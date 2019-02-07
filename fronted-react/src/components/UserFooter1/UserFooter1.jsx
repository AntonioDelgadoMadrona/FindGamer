import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import './UserFooter1.css';

class UserFooter extends Component {
  render() {
    return (
      <Row className="justify-content-between">
        <Col xs={3}>
          <Row className="mb-3">
            <Col xs={12}>
              <h4 className="titulo-h4">INFORMACION</h4>
            </Col>
            <Col xs={12}>
              <h6>
                Nombre: <small className="subtitulo">Juan veintitres</small>
              </h6>
              <h6>
                Vivo en: <small className="subtitulo">La red</small>
              </h6>
              <h6>
                Plataforma favorita: <small className="subtitulo">PC</small>
              </h6>
              <h6>
                Juego favorito:
                <small className="subtitulo">Formularios 2.0</small>
              </h6>
              <h6>
                Juegos pasados: <small className="subtitulo">120</small>
              </h6>
              <h6>
                Registrado el: <small className="subtitulo">15/10/2019</small>
              </h6>
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Row className="mb-3 ">
            <Col xs={12}>
              <h4 className="titulo-h4">ACTUALMENTE JUGANDO</h4>
            </Col>
            <Col xs={12} className="juegos-usuario">
              <h6>Red Dead Redemption 2</h6>
              <h6>The Witcher 3: Wild Hunt</h6>
              <h6>Outlast</h6>
              <h6>Outlast 2</h6>
              <h6>Red Dead Redemption 2</h6>
              <h6>The Witcher 3: Wild Hunt</h6>
              <h6>Outlast</h6>
              <h6>Outlast 2</h6>
              <h6>Red Dead Redemption 2</h6>
              <h6>The Witcher 3: Wild Hunt</h6>
              <h6>Outlast</h6>
              <h6>Outlast 2</h6>
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Row className="mb-3 ">
            <Col xs={12}>
              <h4 className="titulo-h4">PROXIMOS JUEGOS</h4>
            </Col>
            <Col xs={12} className="juegos-usuario">
              <h6>Red Dead Redemption 2</h6>
              <h6>The Witcher 3: Wild Hunt</h6>
              <h6>Outlast</h6>
              <h6>Outlast 2</h6>
              <h6>Red Dead Redemption 2</h6>
              <h6>The Witcher 3: Wild Hunt</h6>
              <h6>Outlast</h6>
              <h6>Outlast 2</h6>
              <h6>Red Dead Redemption 2</h6>
              <h6>The Witcher 3: Wild Hunt</h6>
              <h6>Outlast</h6>
              <h6>Outlast 2</h6>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default UserFooter;
