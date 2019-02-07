import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class EventFollow extends Component {

  render() {
    return (
      <Container className="hijo">
            <Row>
                <Col xs={8} className="plazas-disponibles">
                    <h2 className="titulo">PLAZAS DISPONIBLES: <span className="badge badge-light">3/4</span></h2>
                </Col>
                <Col xs={2}>
                    <button type="submit" className="btn btn-sm boton-verde">Participar</button>
                </Col>
            </Row>
        </Container>
    )
  }
};

export default EventFollow;
