import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./EventBody.css";

import imagen1 from "../../img/fondo-1.jpg";

class EventBody extends Component {
  render() {
    return (
      <Container className="hijo">
        {/* <Nombre del juego del evento */}
        <Row>
          <Col xs={12} className="text-center">
            <h3 className="titulo-h2">FORTNITE: BATTLE ROYALE</h3>
          </Col>
        </Row>

        {/* <!--Informacion del evento--> */}
        <Row className="my-2">
          <Col xs={12} md={4}>
            <div>
              <img src={imagen1} className="imagen-evento" alt="" />
            </div>
          </Col>
          <Col xs={12} md={8}>
            <h3 className="titulo">
              CREADOR:{"  "}<span className="badge badge-dark">Madrona5</span>
            </h3>
            <h3 className="titulo">
              PLATAFORMA:{"  "}
              <span className="badge badge-success mx-1">Xbox One</span>
              <span className="badge badge-primary mx-1">PS4</span>
            </h3>
            <h3 className="titulo">
              Nº JUGADORES:{"  "}<span className="badge badge-info">4</span>
            </h3>
            <h3 className="titulo">
              PUNTUACION MINIMA:{"  "}
              <span className="subtitulo">
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
              </span>
            </h3>
          </Col>
        </Row>
        {/* <!--Duracion del evento--> */}
        <Row className="my-3 text-center">
          <Col xs={12} md={6}>
            <p className="subtitulo">
              INICIO DEL EVENTO:{"  "}
              <span className="text-muted">15/01/19 - 11:00h</span>
            </p>
          </Col>
          <Col xs={12} md={6}>
            <p className="subtitulo">
              FIN DEL EVENTO:{"  "}
              <span className="text-muted">15/01/19 - 12:00h</span>
            </p>
          </Col>
        </Row>
        {/* <!--Mensaje--> */}
        <Row className="my-2">
          <Col xs={12}>
            <h5 className="titulo-h4">Mensaje del creador:</h5>
            <div className="justify-content-center">
              <p>
                Hola busco 3 jugadores que se unan conmigo para partir cabezas
                ahi fuera, no quiero ningun mierdecillas que no tenga huevos
                para a una media de 15 kills por partida, juro que todo aquel
                que no cumpla con este promedio le voy a dar una puntuacion de
                mierda, como el gamer que es.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventBody;
