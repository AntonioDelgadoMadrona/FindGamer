import React, { Component } from "react";

import { Row, Col, Collapse, Button } from "reactstrap";

import './GamesForm.css';

class GamesForm extends Component {
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
      <div className="busqueda-avanzada">
      <Col>
      <Button
          className="boton-celeste"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
        >
          Busqueda avanzada
        </Button>
      </Col>
        <Collapse isOpen={this.state.collapse}>
            <Row>
              <Col xs={12}>
                <form action="" className="form-group">
                  <div className="form-row">
                    <Col xs={12} md={6} className="form-group">
                      <label>Nombre del juego</label>
                      <input type="text" className="form-control" id="inputJuego" />
                    </Col>
                    <Col xs={12} md={6} className="form-group">
                      <label>Plataforma</label>
                      <select
                        className="custom-select"
                        id="inputGroupSelect04"
                      >
                        <option defaultValue>...</option>
                        <option value="1">PC</option>
                        <option value="2">Xbox One</option>
                        <option value="3">Playstation 4</option>
                        <option value="4">Nintendo Switch</option>
                      </select>
                    </Col>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                      <label>Año lanzamiento</label>
                      <select className="custom-select"  id="">
                        <option defaultValue />
                        <option value="1">1958</option>
                        <option value="2">1959</option>
                        <option value="3">1960</option>
                        <option value="3">1961</option>
                        <option value="3">...</option>
                      </select>
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label>Genero</label>
                      <select className="custom-select" id="">
                        <option defaultValue />
                        <option value="1">Accion</option>
                        <option value="2">RPG</option>
                        <option value="3">Aventuras</option>
                        <option value="3">Animacion</option>
                        <option value="3">...</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                      <label>Modo de juego</label>
                      <select className="custom-select" id="">
                        <option defaultValue />
                        <option value="1">Co-operativo</option>
                        <option value="2">Multijugador</option>
                        <option value="3">Solitario</option>
                      </select>
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label>Perspectiva</label>
                      <select className="custom-select" id="">
                        <option defaultValue />
                        <option value="1">Primera persona</option>
                        <option value="2">Tercera persona</option>
                        <option value="3">Ojo de pajaro</option>
                        <option value="3">Vista lateral</option>
                        <option value="3">...</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                      <label>Puntuacion minima</label>
                      <select
                        className="custom-select"
                        id="inputJugadores"
                        aria-label="Example select with button addon"
                      >
                        <option defaultValue>1</option>
                        <option value="1">2</option>
                        <option value="2">3</option>
                        <option value="3">4</option>
                        <option value="4">5</option>
                      </select>
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label>Puntuacion maxima</label>
                      <select
                        className="custom-select"
                        id="inputJugadores"
                        aria-label="Example select with button addon"
                      >
                        <option defaultValue>100</option>
                        <option value="1">99</option>
                        <option value="2">98</option>
                        <option value="3">97</option>
                        <option value="4">96</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="form-row d-flex justify-content-center">
                    <button type="submit" className="btn boton-celeste">
                      Buscar
                    </button>
                  </div>
                </form>
              </Col>
            </Row>
          
        </Collapse>
      </div>
    );
  }
}

export default GamesForm;
