import React, { Component } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";

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
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // console.log(this.props)
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
          <Col xs={2}>
            <button
              type="submit"
              onClick={() => this.updateGamer(this.props.eventID)}
              className="btn btn-sm boton-celeste"
            >
              Participar
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventFollow;
