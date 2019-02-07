import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import foto from '../../img/foto-perfil1.jpg';

class EventGamers extends Component {
  render() {
    return (
      <Container className="hijo">
        <Row>
          <Col xs={12}>
            <h4 className="titulo-h4">JUGADORES INSCRITOS</h4>
          </Col>
          <Col xs={12} lg={7} className="my-1">
            <Row className="text-center align-items-center">
              <Col xs={3}>
                <img src={foto} className="imagen-usuario" alt="" />
              </Col>
              <Col xs={5}>
                <h4>Madrona5</h4>
              </Col>
              <Col xs={4} lg={3}>
                <span>
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                </span>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={7} className="my-1">
            <Row className="text-center align-items-center">
              <Col xs={3}>
                <img src={foto} className="imagen-usuario" alt="" />
              </Col>
              <Col xs={5}>
                <h4>Madrona5</h4>
              </Col>
              <Col xs={4} lg={3}>
                <span>
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default EventGamers;
