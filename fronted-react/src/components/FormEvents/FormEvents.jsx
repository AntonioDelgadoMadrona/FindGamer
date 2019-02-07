import React, { Component } from 'react';

import { Container, Row, Col, Collapse, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class FormEvents extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <Container className="hijo text-center">
        <Button className="boton-celeste" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Publicar mensaje</Button>
        <Collapse isOpen={this.state.collapse}>
          <Col xs={12} className="publicar-mensaje" id="bloque1">
                <Form action="" className="form-group">
                    <Row>
                       <Col xs={12} md={6}>
                           <FormGroup>
                            <Input type="text" classNameName="form-control" id="inputJuego" placeholder="Nombre del juego" />
                        </FormGroup>
                       </Col>
                        <Col xs={12} md={6}>
                            <FormGroup>
                                <Input type="select" id="inputGroupSelect04" >
                                    <option selected>Plataforma</option>
                                    <option value="1">PC</option>
                                    <option value="2">Xbox One</option>
                                    <option value="3">Playstation 4</option>
                                    <option value="4">Nintendo Switch</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                       <Col xs={12} md={6}>
                           <FormGroup>
                            <Label>Fecha Inicio</Label>
                            <Input type="date" className="form-control" id="f-inicioEvento" />
                        </FormGroup>
                        </Col>
                        <Col xs={12} md={6}>
                           <FormGroup>
                            <Label>Hora de inicio</Label>
                            <Input type="time" className="form-control" id="h-inicioEvento"  />
                            </FormGroup>
                       </Col>
                    </Row>
                    <Row>
                       <Col xs={12} md={6}>
                           <FormGroup>
                            <Label>Fecha de fin</Label>
                            <Input type="date" className="form-control" id="f-finEvento"  />
                        </FormGroup>
                       </Col>
                        <Col xs={12} md={6}>
                           <FormGroup>
                            <Form.Label>Hora de fin</Form.Label>
                            <Input type="time" className="form-control" id="h-finEvento"  />
                        </FormGroup>
                       </Col>
                    </Row>
                    <Row>
                       <Col xs={12} md={6}>
                           <FormGroup>
                            <Input type="select" className="custom-select" id="inputJugadores" >
                                <option selected>Numero de jugadores</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Input>
                        </FormGroup>
                       </Col>
                        <Col xs={12} md={6}>
                           <FormGroup>
                            <Input type="select" id="inputJugadores">
                                <option selected>Minimo de estrellas para participar</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                            </Input>
                        </FormGroup>
                       </Col>
                    </Row>
                    <Row>
                        <textarea className="form-control" placeholder="Si quieres añadir un mensaje..." name="" id=""></textarea>
                    </Row>
                    <Row className="d-flex justify-content-center mt-2">
                        <button type="submit" className="btn boton-celeste">Publicar</button>
                    </Row>
                </Form>
            </Col>
        </Collapse>
      </Container>
    )
  }
}

export default FormEvents;