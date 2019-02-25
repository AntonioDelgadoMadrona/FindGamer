import React, { Component } from "react";
import axios from "axios";

import { Container, Row, Col, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import ModalImageProfile from "../ModalImageProfile/ModalImageProfile";

import "./UserHeader.css";

import portada from "../../img/fondo-pantalla.jpg";

class UserHeader extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      followed: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  addFriend(friendID) {
    let token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:3001/user/addfriend",
        { friendID },
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      )
      .then(response => {
        // console.log(response.data);
        this.setState({
          followed: !this.state.followed
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let leftButton = (
      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          this.addFriend(this.props.id);
          this.handleShow();
        }}
      >
        Seguir
      </button>
    );
    if (this.state.followed) {
      leftButton = (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            this.addFriend(this.props.id);
            this.handleShow();
          }}
        >
          Dejar de seguir
        </button>
      );
    }

    let rightButton = (
      <button type="button" className="btn text-white bg-info" disabled>
        Valorar
      </button>
    );

    if (!this.props.anotherUser) {
      leftButton = (
        <button type="button" className="btn btn-success" disabled>
          Editar perfil
        </button>
      );
      rightButton = <ModalImageProfile />;
    }

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
    let modal = (
      <Modal.Header className="bg-success" closeButton>
        Has comenzado a seguir a
        <strong className="ml-1">{this.props.username}</strong>
      </Modal.Header>
    );
    if (!this.state.followed) {
      modal = (
        <Modal.Header className="bg-danger" closeButton>
          Has dejado de seguir a
          <strong className="ml-1">{this.props.username}</strong>
        </Modal.Header>
      );
    }

    return (
      <Container className="hijo">
        <Row>
          <Col>
            <h4 className="titulo-h4">PERFIL DE USUARIO</h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10}>
            <img src={portada} className="fondo-perfil-usuario" alt="" />
          </Col>
        </Row>
        <Row className="mensaje-seguir">
          <Col xs={5} className="text-center">
            {leftButton}
          </Col>
          <Col xs={5} className="text-right">
            {rightButton}
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            <img
              src={`http://localhost:3001/users/${this.props.img_small}`}
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
        {/* ALERT MODAL */}

        <Modal show={this.state.show} onHide={this.handleClose}>
          {modal}
        </Modal>
      </Container>
    );
  }
}

export default UserHeader;
