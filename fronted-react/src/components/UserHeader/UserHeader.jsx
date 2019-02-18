import React, { Component } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import ModalImageProfile from "../ModalImageProfile/ModalImageProfile";

import "./UserHeader.css";

import portada from "../../img/fondo-pantalla.jpg";
import foto from "../../img/foto-perfil1.jpg";

let userID = "5c5f4d2b310eaf1330ddbd05";

class UserHeader extends Component {
  addFriend(friendID) {
    axios
      .post("http://localhost:3001/user/addfriend", { userID, friendID })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let suma = 0;
    const starsRender = [];
    if (this.props.rating) {
      for (let i = 0; i < this.props.rating.length; i++) {
        suma = suma + this.props.rating[i];
      }
      let media = suma / this.props.rating.length;

      const rounded_mean = Math.round(media);

      for (let i = 0; i < 5; i++) {
        starsRender.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className={`text-${i < rounded_mean ? "warning" : "muted"} fa-lg`}
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
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.addFriend(this.props.id);
              }}
            >
              Añadir amigo
            </button>
          </Col>
          <Col xs={5} className="text-right">
            {/* <button type="button" className="btn boton-celeste">
              Mensaje
            </button> */}
            <ModalImageProfile />
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
