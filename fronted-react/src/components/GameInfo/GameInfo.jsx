import React, { Component } from "react";
import axios from "axios";
import striptags from 'striptags';

import { ProgressBar, Container, Row, Col } from "react-bootstrap";
import "./GameInfo.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faClock,
  faCheckCircle,
  faStar
} from "@fortawesome/free-solid-svg-icons";

import imagen from "../../img/fondo-7.jpg";
import fondo from "../../img/fondo-10.jpg";

class GameInfo extends Component {
  constructor() {
    super();
    this.state = {
      juego: {
        name: null,
        developer: null,
        image: null,
        screen: null,
        release_date: null,
        platforms: [],
        genres: [],
        description: null
      }
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://www.gamespot.com/api/games/3030-41484/?api_key=2a45309483f28ff6845b76e6b201aa7808ce57b6&format=json",
        {}
      )
      .then(response => {
        console.log(response);
        this.setState({
          ...this.state.juego,
          juego: {
            name: response.data.results.name,
            developer: response.data.results.developers[0].name,
            image: response.data.results.image.original_url,
            screen: response.data.results.image.screen_url,
            release_date: response.data.results.original_release_date,
            platforms: response.data.results.platforms,
            genres: response.data.results.genres,
            description: response.data.results.description
          }
        });
      })
      .catch(e => {
        console.log("error", e);
      });
  }

  render() {
    let hola = "<h1>Hola</h1>"
    let descriptionClear = this.state.juego.description;

    console.log(striptags(descriptionClear))
    // console.log(this.state.juego);
    let platformsString = " ";
    const platforms = this.state.juego.platforms.map(platform => {
      platformsString += platform.name + " || ";
    });

    let genresString = " ";
    const genres = this.state.juego.genres.map(genre => {
      genresString += genre.name + ' / ';
    })
    return (
      <Container className="hijo pt-0">
        <Row>
          <img
            src={this.state.juego.screen}
            className="imagen-juego-cabecera"
            alt=""
          />
        </Row>
        <Row className="cuerpo-juego-portada">
          <Col xs={12} lg={3}>
            <img
              src={this.state.juego.image}
              className="imagen-juego-portada"
              alt=""
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
            <h1>{this.state.juego.name}</h1>
            <h3>{this.state.juego.developer}</h3>
            <h5 className="text-white">
              Publicado: {this.state.juego.release_date}
            </h5>
            <br />
            <p>
              Genero: {genresString}
            </p>
            <p>Plataformas: {platformsString}</p>
            <p>Descripcion:</p>
            <p>
              {this.state.juego.description}
            </p>
          </Col>
          <Col xs={12} lg={3}>
            <h4>Puntuacion:</h4>
            <ProgressBar variant="success" now="95" label={`${95}/100`} />
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
