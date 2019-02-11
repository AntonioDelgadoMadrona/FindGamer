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
        description: null,
        rating: null
      }
    };
  }

  componentDidMount() {
    var juego = "1942";
    var URL = "http://localhost:3001";

    axios
      .get(`${URL}/game/info?id=${juego}`)
      .then(response => {
        console.log(response.data[0]);
       

        return axios.get(`${URL}/game/cover`);
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
    const genres = this.state.juego.genres.map(genre => {
      genresString += genre.name + " / ";
    });
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
            <p>Genero: {genresString}</p>
            <p>Plataformas: {platformsString}</p>
            <p>Descripcion:</p>
            <p>{this.state.juego.description}</p>
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
