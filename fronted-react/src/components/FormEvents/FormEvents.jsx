import React, { Component } from "react";
import axios from 'axios';

import {
  Container,
  Col,
  Collapse,
  Button
} from "reactstrap";

class FormEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      collapse: false,
      event: {
        userId: '5c5f4d2b310eaf1330ddbd05',
        game: null,
        platform: null,
        start_event: null,
        h_start_event: null,
        end_event: null,
        h_end_event: null,
        n_gamers: null,
        rating: null,
        message: null,
      }
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  handleChange(e){
    this.setState({
      event: {
         ...this.state.event,
        [e.target.id]: e.target.value
      }
      
    })
    console.log(this.state)
  }

  handleClick(){
    let event = this.state.event;
    console.log(this.state.event)
    axios.post("http://localhost:3001/event/create", event).then(response => {
      // console.log(response.data)
      this.props.newEvent(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <Container className="hijo text-left">
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
            <form className="form-group">
              <div className="form-row">
                <Col xs={12} md={6} className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    id="game"
                    placeholder="Nombre del juego"
                    required
                  />
                </Col>
                <Col xs={12} md={6} className="form-group">
                  <select
                    className="custom-select"
                    onChange={this.handleChange}
                    id="platform"
                    aria-label="Example select with button addon"
                  >
                    <option defaultValue>Plataforma</option>
                    <option value="PC">PC</option>
                    <option value="Xbox One">Xbox One</option>
                    <option value="PS4">Playstation 4</option>
                    <option value="Nintendo Switch">Nintendo Switch</option>
                  </select>
                </Col>
              </div>
              <div className="form-row">
                <Col xs={12} md={6} className="form-group">
                  <label>Fecha Inicio</label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={this.handleChange}
                    id="start_event"
                    required
                  />
                </Col>
                <Col xs={12} md={6} className="form-group">
                  <label>Hora de inicio</label>
                  <input
                    type="time"
                    className="form-control"
                    onChange={this.handleChange}
                    id="h_start_event"
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
                    id="end_event"
                    onChange={this.handleChange}
                    required
                  />
                </Col>
                <Col xs={12} md={6} className="form-group">
                  <label>Hora de fin</label>
                  <input
                    type="time"
                    className="form-control"
                    id="h_end_event"
                    onChange={this.handleChange}
                    required
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col xs={12} md={6} className="form-group">
                  <select
                    className="custom-select"
                    id="n_gamers"
                    onChange={this.handleChange}
                  >
                    <option defaultValue>Numero de jugadores (incluido tú)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </Col>
                <Col xs={12} md={6} className="form-group">
                  <select
                    className="custom-select"
                    id="rating"
                    onChange={this.handleChange}
                  >
                    <option defaultValue>
                      Minimo de estrellas para participar
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </Col>
              </div>
              <div className="form-row">
                <textarea
                  className="form-control"
                  placeholder="Si quieres añadir un mensaje..."
                  onChange={this.handleChange}
                  id="message"
                />
              </div>
              <br/>
              <div className="form-row d-flex justify-content-center">
                <button type="button" onClick={this.handleClick} className="btn boton-celeste">
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
