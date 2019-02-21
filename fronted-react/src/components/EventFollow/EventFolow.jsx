import React, { Component } from "react";
import axios from "axios";

import { Container, Row, Col, Alert } from "react-bootstrap";

class EventFollow extends Component {
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
        // console.log(response.data);
        alert("Te has inscrito en el evento");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // console.log(this.props);
    let participar = (
      <Alert variant="danger">
        <strong>Tu puntuacion es menor que la requerida</strong>
      </Alert>
    );
    if (this.props.participar === true) {
      participar = (
        <button
          type="button"
          onClick={() => this.updateGamer(this.props.eventID)}
          className="btn btn-sm boton-celeste"
        >
          Participar
        </button>
      );
    }
    return (
      <Container className="hijo">
        <Row>
          <Col xs={8} className="plazas-disponibles">
            <h2 className="titulo">
              PLAZAS DISPONIBLES:{" "}
              <span className="badge badge-light">
                {this.props.n_gamers - this.props.participants.length}/
                {this.props.n_gamers}
              </span>
            </h2>
          </Col>
          <Col xs={4}>{participar}</Col>
        </Row>
      </Container>
    );
  }
}

export default EventFollow;
