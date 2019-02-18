import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import foto from "../../img/foto-perfil1.jpg";

class EventGamers extends Component {
  render() {
    return (
      <Container className="hijo">
        <Row>
          <Col xs={12}>
            <h4 className="titulo-h4">JUGADORES INSCRITOS</h4>
          </Col>
          {this.props.participants.map((e, i) => {
            // Calculo la media de valoraciones
            let suma = 0;
            let media = 0;
            e.puntuacion.map((g, j) => {
              return (suma = suma + g);
            });
            media = suma / e.puntuacion.length;

            // Creo un array donde meto cada estrella en funcion de la media
            let starsRender = [];
            for (let i = 0; i < 5; i++) {
              starsRender.push(
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={`text-${i < media ? "warning" : "muted"} `}
                />
              );
            }

            return (
              <Col xs={12} lg={7} className="my-1" key={i}>
                <Row className="text-center align-items-center">
                  <Col xs={3}>
                    <img
                      src={foto}
                      className="imagen-usuario"
                      alt={e.nombre_usuario}
                    />
                  </Col>
                  <Col xs={5}>
                    <h4>{e.nombre_usuario}</h4>
                  </Col>
                  <Col xs={4} lg={3}>
                    <span>{starsRender}</span>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default EventGamers;
