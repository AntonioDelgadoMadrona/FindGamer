import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import foto1 from "../../img/foto-perfil3.jpg";

import "./ActiveUsersEvent.css";

class ActiveUsersEvent extends Component {
  render() {
    return (
      <Col lg={4} xl={3} className="d-none d-lg-block">
        <Row>
          <Col>
            <h4 className="titulo-h4">LOS ULTIMOS EN PUBLICAR</h4>
          </Col>
        </Row>
        <div id="lista-vertical-timeline">
          <Row className="pb-3 jugador-recomendacion">
            <div className="d-flex justify-content-around">
              <div>
                <img
                  src={foto1}
                  className="float-left imagen-usuario"
                  alt=""
                />
                <div className="float-right ml-3">
                  <a href="/">
                    <p>
                      <strong className="text-white">Nombre de Jugador</strong>
                    </p>
                  </a>
                  <p>
                    <span className="verde">Puntuacion</span>
                  </p>
                  <p className="text-muted">Fecha de registro</p>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Col>
    );
  }
}

export default ActiveUsersEvent;
