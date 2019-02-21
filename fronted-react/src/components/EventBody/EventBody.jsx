import React, { Component } from "react";
import moment from "moment";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./EventBody.css";

import imagen1 from "../../img/icono-evento-04.png";

class EventBody extends Component {

  render() {

    let puntuacion = [];
    for (let i = 0; i < 5; i++) {
      puntuacion.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`text-${
            i < this.props.rating ? "warning" : "light"
          } fa-lg`}
        />
      );
    };

    let start_event = moment.utc(this.props.start_event).format("DD/MM/YYYY");
    let end_event = moment.utc(this.props.end_event).format("DD/MM/YYYY");

    return (
      <Container className="hijo">
        {/* <Nombre del juego del evento */}
        <Row>
          <Col xs={12} className="text-center">
            <h3 className="titulo-h2">{this.props.game}</h3>
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
              CREADOR:{"  "}
              <span className="badge badge-dark">{this.props.creator.nombre_usuario}</span>
            </h3>
            <h3 className="titulo">
              PLATAFORMA:{"  "}
              <span className="badge badge-success mx-1">
                {this.props.platform}
              </span>
            </h3>
            <h3 className="titulo">
              Nº JUGADORES:{"  "}
              <span className="badge badge-info">{this.props.n_gamers}</span>
            </h3>
            <h3 className="titulo">
              PUNTUACION MINIMA:{"  "}
              <span className="subtitulo">{puntuacion}</span>
            </h3>
          </Col>
        </Row>
        {/* <!--Duracion del evento--> */}
        <Row className="my-3 text-center">
          <Col xs={12} md={6}>
            <p className="subtitulo">
              INICIO DEL EVENTO:{"  "}
              <span className="text-muted">{start_event} - {this.props.h_start_event}h</span>
            </p>
          </Col>
          <Col xs={12} md={6}>
            <p className="subtitulo">
              FIN DEL EVENTO:{"  "}
              <span className="text-muted">{end_event} - {this.props.h_end_event}h</span>
            </p>
          </Col>
        </Row>
        {/* <!--Mensaje--> */}
        <Row className="my-2">
          <Col xs={12}>
            <h5 className="titulo-h4">Mensaje del creador:</h5>
            <div className="justify-content-center">
              <p>{this.props.message}</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventBody;
