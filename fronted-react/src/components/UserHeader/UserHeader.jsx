import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./UserHeader.css";

import portada from "../../img/fondo-pantalla.jpg";
import foto from "../../img/foto-perfil1.jpg";

const array = [5, 4, 3, 2, 5, 4, 3, 2];

class UserHeader extends Component {
  render() {

      let suma = 0;
      const starsRender = [];
      if(this.props.rating){
      for (let i = 0; i < this.props.rating.length; i++) {
        suma = suma + this.props.rating[i];
      }
      let media = suma / this.props.rating.length;
      console.log(media)

    const rounded_mean = Math.round(media);

    for (let i = 0; i < 5; i++) {
      starsRender.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`text-${i < rounded_mean ? "warning" : "light"} fa-lg`}
        />
      );
    }
  }

    return (
      <Container className="hijo">
        <Row>
          <Col>
            <h4 className="titulo-h4">PERFIL DE USUARIO</h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={9}>
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
            <h3 className="text-black">{this.props.username}</h3>
            <p>{starsRender}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserHeader;
