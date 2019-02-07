import React, { Component } from "react";
import axios from "axios";

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
  componentDidMount() {
    axios
      .get("https://api-v3.igdb.com/games/1942?fields=*", {
        mode: "no-cors",
        headers: {
          "user-key": "f0f1952d6e1bfdcea5a1bdd0785d2a85",
          Accept: "application/json"
        }
      })
      .then(response => {
        // Do work here
        console.log(response.data);
      })
      .catch(e => {
        console.log("error", e);
      });
  }

  render() {
    return (
      <Container className="hijo pt-0">
        <Row>
          <img src={fondo} className="imagen-juego-cabecera" alt="" />
        </Row>
        <Row className="cuerpo-juego-portada">
          <Col xs={12} lg={3}>
            <img src={imagen} className="imagen-juego-portada" alt="" />
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
            <h3>Red Dead Redemption 2</h3>
            <h4>Cd Project Red</h4>
            <h5>Publicado: 16/05/2015</h5>
            <br />
            <p>
              Genero: <span>RPG, Aventura</span>
            </p>
            <p>Plataformas: PC/Xbox One/PS4</p>
            <p>Descripcion:</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum esse fugit laboriosam tenetur voluptas, atque aut,
              cumque adipisci dolore nam numquam et, voluptatem ut incidunt
              repellendus corporis dolorum asperiores quo! Itaque nisi rerum
              nesciunt ratione, architecto assumenda sint soluta similique odio
              eligendi officia commodi libero, esse. Tempore quod rerum quam!
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
