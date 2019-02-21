import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import { withRouter } from "react-router";

import GameScreenshoots from '../GameScreenshoots/GameScreenshoots';

import { ProgressBar, Container, Row, Col } from "react-bootstrap";
import "./GameInfo.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faClock,
  faCheckCircle,
  faStar
} from "@fortawesome/free-solid-svg-icons";

const url_img = "https://images.igdb.com/igdb/image/upload/";
const large = "t_1080p/";
const small = "t_720p/";
const format = ".jpg";

class GameInfo extends Component {
  constructor() {
    super();
    this.state = {
      juego: {
        id: null,
        name: null,
        companies: null,
        image: null,
        release_date: null,
        platforms: [],
        genres: [],
        summary: null,
        rating: null,
        screenshots: []
      },
      token: null
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/game/info/${this.props.match.params.id}`)
      .then(response => {
        // console.log(response.data[0]);
        let r = response.data[0];
        if (r.involved_companies[0].company.name !== "undefined") {
          this.setState({
            juego: {
              id: r.id,
              name: r.name,
              companies: r.involved_companies[0].company.name,
              image: r.cover.image_id,
              release_date: r.release_dates[0].date,
              platforms: r.platforms,
              genres: r.genres,
              summary: r.summary,
              rating: r.rating,
              screenshots: r.screenshots
            }
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  addNextGame(game) {
    let token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:3001/user/addgamenext",
        { game },
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      )
      .then(response => {
        // console.log(response.data);
        alert('Juego añadido a tu lista de proximos juego')
      })
      .catch(error => {
        alert("Debes haber iniciado sesion para añadir un juego a tus listas");
        console.log(error);
      });
  }

  addPlayingGame(game) {
    let token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:3001/user/addgamenow",
        { game },
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      )
      .then(response => {
        // console.log(response.data);
        alert('Juego añadido a tu lista de jugando')
      })
      .catch(error => {
        alert("Debes haber iniciado sesion para añadir un juego a tus listas");
        console.log(error);
      });
  }

  addCompletedGame(game) {
    let token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:3001/user/addgamecomplete",
        { game },
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      )
      .then(response => {
        // console.log(response.data);
        alert('Juego añadido a tu lista de juegos completados')
      })
      .catch(error => {
        alert("Debes haber iniciado sesion para añadir un juego a tus listas");
        console.log(error);
      });
  }

  render() {
    console.log(this.state.juego.screenshots)
    let platformsString = " ";
    this.state.juego.platforms.map(platform => {
      return (platformsString += platform.name + " || ");
    });

    let genresString = " ";
    this.state.juego.genres.map(genre => {
      return (genresString += genre.name + " / ");
    });

    // Convierto en string y me quedo con los dos primeros numeros
    let puntuacion = this.state.juego.rating;
    let rating = "" + puntuacion;
    rating = rating.substring(0, 2);

    let lanzamiento = this.state.juego.release_date;
    let date = moment.unix(lanzamiento, "x").format("DD/MM/YYYY");

    return (
      <>
        <Container className="hijo pt-0">
          <Row>
            <img
              src={`${url_img}${large}${this.state.juego.image}${format}`}
              className="imagen-juego-cabecera"
              alt={this.state.name}
            />
          </Row>
          <Row className="cuerpo-juego-portada">
            <Col xs={12} lg={3}>
              <img
                src={`${url_img}${small}${this.state.juego.image}${format}`}
                className="imagen-juego-portada"
                alt={this.state.juego.name}
              />
              <div className="d-flex justify-content-around mt-5">
                <FontAwesomeIcon
                  icon={faClock}
                  className="fa-2x enlace"
                  onClick={() => this.addNextGame(this.state.juego.name)}
                />
                <p>
                  <FontAwesomeIcon
                    icon={faGamepad}
                    className="fa-2x enlace"
                    onClick={() => this.addPlayingGame(this.state.juego.name)}
                  />
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="fa-2x enlace"
                    onClick={() => this.addCompletedGame(this.state.juego.name)}
                  />
                </p>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <h2>{this.state.juego.name}</h2>
              <h4>{this.state.juego.companies}</h4>
              {date !== null ? (
                <h5 className="text-white">Publicado: {date}</h5>
              ) : null}
              <br />
              <p>Genero: {genresString}</p>
              <p>Plataformas: {platformsString}</p>
              <p>Descripcion:</p>
              <p>{this.state.juego.summary}</p>
            </Col>
            <Col xs={12} lg={3}>
              <h4>Puntuacion:</h4>
              <ProgressBar
                variant="success"
                now={this.state.juego.rating}
                label={`${rating}/100`}
              />
              <h4>Tu valoracion: (proximamente)</h4>
              <ProgressBar variant="success" now="" label={`${""}/100`} />
              <br />
              <p>Valora este juego:</p>
              <p>
                <FontAwesomeIcon icon={faStar} className="fa-lg" />
                <FontAwesomeIcon icon={faStar} className="fa-lg" />
                <FontAwesomeIcon icon={faStar} className="fa-lg" />
                <FontAwesomeIcon icon={faStar} className="fa-lg" />
                <FontAwesomeIcon icon={faStar} className="fa-lg" />
                <FontAwesomeIcon icon={faStar} className="fa-lg" />
                <FontAwesomeIcon icon={faStar} className="fa-lg" />
                <FontAwesomeIcon icon={faStar} className="fa-lg" />
                <FontAwesomeIcon icon={faStar} className="fa-lg" />
                <FontAwesomeIcon icon={faStar} className="fa-lg" />
              </p>
            </Col>
          </Row>
        </Container>
        <GameScreenshoots screenshots={this.state.juego.screenshots}/>
        
      </>
    );
  }
}

export default withRouter(GameInfo);
