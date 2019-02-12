import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

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
const large = "t_1080p/"
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
        rating: null
      }
    };
  }

  componentDidMount() {
    var juego = "3025";

    axios
      .get(`http://localhost:3001/game/info/${juego}`)
      .then(response => {
        console.log(response.data)
        let r = response.data[0]
        this.setState({
          juego: {
            id: r.id,
            name: r.name,
            companies: r.involved_companies[0].company.name,
            image: r.cover.image_id,
            release_date: r.release_dates[0].created_at,
            platforms: r.platforms,
            genres: r.genres,
            summary: r.summary,
            rating: r.rating

          }
        })
        console.log(this.state.juego);
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    console.log(this.state.juego);
    let platformsString = " ";
    const platforms = this.state.juego.platforms.map(platform => {
      platformsString += platform.name + " || ";
    });

    let genresString = " ";
    this.state.juego.genres.map(genre => {
      genresString += genre.name + " / ";
    });
    return (
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
              alt={this.state.name}
            />
            <div className="d-flex justify-content-around mt-5">
              <FontAwesomeIcon icon={faClock} className="fa-2x enlace" />
              <p>
                <FontAwesomeIcon icon={faGamepad} className="fa-2x enlace" />
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="fa-2x enlace"
                />
              </p>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <h2>{this.state.juego.name}</h2>
            <h4>{this.state.juego.companies}</h4>
            <h5 className="text-white">
              Publicado: {this.state.juego.release_date}
            </h5>
            <br />
            <p>Genero: {genresString}</p>
            <p>Plataformas: {platformsString}</p>
            <p>Descripcion:</p>
            <p>{this.state.juego.summary}</p>
          </Col>
          <Col xs={12} lg={3}>
            <h4>Puntuacion:</h4>
            <ProgressBar variant="success" now={this.state.juego.rating} label={`${this.state.juego.rating}/100`} />
            <h4>Tu valoracion:</h4>
            <ProgressBar variant="success" now="95" label={`${95}/100`} />
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
    );
  }
}

export default GameInfo;
