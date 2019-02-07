import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import './UserHeader.css';

import portada from "../../img/fondo-pantalla.jpg";
import foto from "../../img/foto-perfil1.jpg";

class UserHeader extends Component {
  render() {
    return (
      <Container className="hijo">
        <Row>
          <Col>
            <h4 className="titulo-h4">PERFIL DE USUARIO</h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xsw={9}>
            <img src={portada} className="fondo-perfil-usuario" alt="" />
          </Col>
        </Row>
        <Row className="mensaje-seguir">
          <Col xs={5} className="text-center">
            <button type="button" className="btn btn-success">
              Añadir amigo
            </button>
          </Col>
          <Col xs={5} className="text-right">
            <button type="button" className="btn boton-celeste">
              Mensaje
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            <img
              src={foto}
              className="icono-perfil-usuario img-fluid rounded-circle"
              alt=""
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            <h3 className="text-black">Juanito23</h3>
            <p>
              <FontAwesomeIcon icon={faStar} className="text-warning fa-lg" />
              <FontAwesomeIcon icon={faStar} className="text-warning fa-lg" />
              <FontAwesomeIcon icon={faStar} className="text-warning fa-lg" />
              <FontAwesomeIcon icon={faStar} className="text-warning fa-lg" />
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserHeader;
