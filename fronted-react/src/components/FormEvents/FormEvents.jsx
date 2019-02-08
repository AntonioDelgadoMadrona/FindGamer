import React, { Component } from "react";

import {
  Container,
  Col,
  Collapse,
  Button
} from "reactstrap";

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
        <Button
          className="boton-celeste"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
        >
          Publicar evento
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Col
            xs={12}
            className="my-2 p-2 text-dark publicar-evento"
            id="bloque1"
          >
            <form action="" className="form-group">
              <div className="form-row">
                <Col xs={12} md={6} className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputJuego"
                    placeholder="Nombre del juego"
                    required
                  />
                </Col>
                <Col xs={12} md={6} className="form-group">
                  <select
                    className="custom-select"
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                  >
                    <option defaultValue>Plataforma</option>
                    <option value="1">PC</option>
                    <option value="2">Xbox One</option>
                    <option value="3">Playstation 4</option>
                    <option value="4">Nintendo Switch</option>
                  </select>
                </Col>
              </div>
              <div className="form-row">
                <Col xs={12} md={6} className="form-group">
                  <label>Fecha Inicio</label>
                  <input
                    type="date"
                    className="form-control"
                    id="f-inicioEvento"
                    required
                  />
                </Col>
                <Col xs={12} md={6} className="form-group">
                  <label>Hora de inicio</label>
                  <input
                    type="time"
                    className="form-control"
                    id="h-inicioEvento"
                    required
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col xs={12} md={6} className="form-group">
                  <label>Fecha de fin</label>
                  <input
                    type="date"
                    className="form-control"
                    id="f-finEvento"
                    required
                  />
                </Col>
                <Col xs={12} md={6} className="form-group">
                  <label>Hora de fin</label>
                  <input
                    type="time"
                    className="form-control"
                    id="h-finEvento"
                    required
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col xs={12} md={6} className="form-group">
                  <select
                    className="custom-select"
                    id="inputJugadores"
                    aria-label="Example select with button addon"
                  >
                    <option defaultValue>Numero de jugadores</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </Col>
                <Col xs={12} md={6} className="form-group">
                  <select
                    className="custom-select"
                    id="inputJugadores"
                    aria-label="Example select with button addon"
                  >
                    <option defaultValue>
                      Minimo de estrellas para participar
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                  </select>
                </Col>
              </div>
              <div className="form-row">
                <textarea
                  className="form-control"
                  placeholder="Si quieres añadir un mensaje..."
                  name=""
                  id=""
                />
              </div>
              <br/>
              <div className="form-row d-flex justify-content-center">
                <button type="submit" className="btn boton-celeste">
                  Publicar
                </button>
              </div>
            </form>
          </Col>
        </Collapse>
      </Container>
    );
  }
}

export default FormEvents;
