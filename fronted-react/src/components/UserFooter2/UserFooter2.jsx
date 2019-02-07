import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./UserFooter2.css";

import foto from "../../img/foto-perfil2.jpg";
import imagen from "../../img/juego1.jpg";

class UserFooter2 extends Component {
  render() {
    return (
      <Row className="justify-content-between">
        <Col xs={3}>
          <Row>
            <Col xs={12}>
              <h4 className="titulo-h4">AMIGOS</h4>
            </Col>
            <Col xs={12} className="amigos-usuario">
              <Row className="amigo-usuario">
                <Col xs={4}>
                  <img src={foto} className="imagen-usuario" alt="" />
                </Col>
                <Col xs={8}>
                  <a href="/">
                    <p>
                      <strong className="text-white">Nombre de Jugador</strong>
                    </p>
                  </a>
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                    </span>
                  </p>
                  <p className="text-muted">Fecha de registro</p>
                </Col>
              </Row>
              <Row className="amigo-usuario">
                <Col xs={4}>
                  <img src={foto} className="imagen-usuario" alt="" />
                </Col>
                <Col xs={8}>
                  <a href="/">
                    <p>
                      <strong className="text-white">Nombre de Jugador</strong>
                    </p>
                  </a>
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                    </span>
                  </p>
                  <p className="text-muted">Fecha de registro</p>
                </Col>
              </Row>
              <Row className="amigo-usuario">
                <Col xs={4}>
                  <img src={foto} className="imagen-usuario" alt="" />
                </Col>
                <Col xs={8}>
                  <a href="/">
                    <p>
                      <strong className="text-white">Nombre de Jugador</strong>
                    </p>
                  </a>
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                    </span>
                  </p>
                  <p className="text-muted">Fecha de registro</p>
                </Col>
              </Row>
              <Row className="amigo-usuario">
                <Col xs={4}>
                  <img src={foto} className="imagen-usuario" alt="" />
                </Col>
                <Col xs={8}>
                  <a href="/">
                    <p>
                      <strong className="text-white">Nombre de Jugador</strong>
                    </p>
                  </a>
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                    </span>
                  </p>
                  <p className="text-muted">Fecha de registro</p>
                </Col>
              </Row>
              <Row className="amigo-usuario">
                <Col xs={4}>
                  <img src={foto} className="imagen-usuario" alt="" />
                </Col>
                <Col xs={8}>
                  <a href="/">
                    <p>
                      <strong className="text-white">Nombre de Jugador</strong>
                    </p>
                  </a>
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                    </span>
                  </p>
                  <p className="text-muted">Fecha de registro</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={8}>
          <Row>
            <Col xs={12}>
              <h4 className="titulo-h4">JUEGOS COMPLETADOS</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={2} />
            <Col xs={4} className="columna-juegos-completados">
              <p>Nombre del juego</p>
            </Col>
            <Col xs={3} className="columna-juegos-completados">
              <p>Valoracion personal</p>
            </Col>
            <Col xs={3} className="columna-juegos-completados">
              <p>Fecha completado</p>
            </Col>
          </Row>
          <Col className="lista-juegos-completados">
            <Row className="juego-completado">
              <Col xs={2}>
                <img src={imagen} className="imagen-juego-usuario" alt="" />
              </Col>
              <Col xs={4}>
                <a href="/">
                  <p>Red Dead Redemption 2</p>
                </a>
              </Col>
              <Col xs={3} className="text-center">
                <p>96/100</p>
              </Col>
              <Col xs={3} className="text-center">
                <p>15/01/2019</p>
              </Col>
            </Row>
            <Row className="juego-completado">
              <Col xs={2}>
                <img src={imagen} className="imagen-juego-usuario" alt="" />
              </Col>
              <Col xs={4}>
                <a href="/">
                  <p>Red Dead Redemption 2</p>
                </a>
              </Col>
              <Col xs={3} className="text-center">
                <p>96/100</p>
              </Col>
              <Col xs={3} className="text-center">
                <p>15/01/2019</p>
              </Col>
            </Row>
            <Row className="juego-completado">
              <Col xs={2}>
                <img src={imagen} className="imagen-juego-usuario" alt="" />
              </Col>
              <Col xs={4}>
                <a href="/">
                  <p>Red Dead Redemption 2</p>
                </a>
              </Col>
              <Col xs={3} className="text-center">
                <p>96/100</p>
              </Col>
              <Col xs={3} className="text-center">
                <p>15/01/2019</p>
              </Col>
            </Row>
            <Row className="juego-completado">
              <Col xs={2}>
                <img src={imagen} className="imagen-juego-usuario" alt="" />
              </Col>
              <Col xs={4}>
                <a href="/">
                  <p>Red Dead Redemption 2</p>
                </a>
              </Col>
              <Col xs={3} className="text-center">
                <p>96/100</p>
              </Col>
              <Col xs={3} className="text-center">
                <p>15/01/2019</p>
              </Col>
            </Row>
            <Row className="juego-completado">
              <Col xs={2}>
                <img src={imagen} className="imagen-juego-usuario" alt="" />
              </Col>
              <Col xs={4}>
                <a href="/">
                  <p>Red Dead Redemption 2</p>
                </a>
              </Col>
              <Col xs={3} className="text-center">
                <p>96/100</p>
              </Col>
              <Col xs={3} className="text-center">
                <p>15/01/2019</p>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    );
  }
}

export default UserFooter2;
