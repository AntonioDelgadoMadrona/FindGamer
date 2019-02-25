import React, { Component } from "react";
import axios from "axios";

import { Container, Row, Col, Alert, Modal } from "react-bootstrap";

class EventFollow extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  updateGamer(eventID) {
    let token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:3001/event/addgamer",
        {
          params: { eventID }
        },
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      )
      .then(response => {
        console.log(this.props.n_gamers - this.props.participants.length)
        // console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // console.log(this.props);
    let plazasDisponibles = this.props.n_gamers - this.props.participants.length;
    let participar = (
      <Alert variant="danger">
        <strong>Tu puntuacion es menor que la requerida</strong>
      </Alert>
    );
    if (this.props.participar === true) {
      participar = (
        <button
          type="button"
          onClick={() => {
            this.updateGamer(this.props.eventID);
            this.handleShow();
          }}
          className="btn btn-sm boton-celeste"
        >
          Participar
        </button>
      );
    }
    if (this.props.participante === true) {
      participar = (
        <Alert variant="info">
          <strong>Ya estas inscrito en el evento</strong>
        </Alert>
      );
    }
    if(plazasDisponibles < 1){
      participar = <Alert variant="warning">
      <strong>No quedan plazas para este evento</strong>
    </Alert>
    }
    return (
      <Container className="hijo">
        <Row>
          <Col xs={8} className="plazas-disponibles">
            <h2 className="titulo">
              PLAZAS DISPONIBLES:{" "}
              <span className="badge badge-light">
                {plazasDisponibles}/
                {this.props.n_gamers}
              </span>
            </h2>
          </Col>
          <Col xs={4}>{participar}</Col>
        </Row>

        {/* MODAL ALERT */}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            Te han inscrito al evento de{" "}
            <strong className="ml-1"> {this.props.creator}</strong>
          </Modal.Header>
        </Modal>
      </Container>
    );
  }
}

export default EventFollow;
