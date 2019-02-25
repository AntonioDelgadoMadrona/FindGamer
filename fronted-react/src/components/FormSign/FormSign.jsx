import React, { Component } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";

import "./FormSign.css";

class FormSign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      last_name: null,
      username: null,
      fav_platform: null,
      country: null,
      city: null,
      birthday: null,
      email: null,
      password: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
    // console.log(this.state);
  }

  handleClick() {
    let user = this.state;
    axios
      .post("http://localhost:3001/user/register", user)
      .then(response => {
        // console.log(response.data)
        let id = response.data.id;
        // Redirecciono al home del id recibido en el registro
        // console.log(response)
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/user/" + id);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container className="padre registro">
        <Container className="hijo py-5 registro align-items-center">
          <Row className="justify-content-center ">
            <Col xs={6} className="titulo-h2 text-center mb-5">
              <h1>REGISTRO</h1>
            </Col>
          </Row>
          <Row className="row justify-content-center">
            <Col xs={12} lg={8}>
              <form id="formulario_registro">
                <div className="form-row">
                  <Col xs={12} lg={6}>
                    <label>Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      onChange={this.handleChange}
                      required
                    />
                    <div id="errorNombre1" />
                  </Col>
                  <Col xs={12} lg={6} className="form-group">
                    <label>Apellidos</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.handleChange}
                      id="last_name"
                      required
                    />
                    <div id="errorApellidos1" />
                  </Col>
                </div>
                <div className="form-row align-items-center">
                  <Col xs={12} lg={6} className="form-group">
                    <label>Nombre de usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.handleChange}
                      id="username"
                      required
                    />
                    <div id="errorUsuario" />
                  </Col>
                  <Col xs={12} lg={6} className="form-group">
                    <label>Plataforma favorita</label>
                    <select
                      className="custom-select"
                      onChange={this.handleChange}
                      id="fav_platform"
                    >
                      <option defaultValue />
                      <option value="PC">PC</option>
                      <option value="Xbox One">Xbox One</option>
                      <option value="PS4">Playstation 4</option>
                      <option value="Nintendo Switch">Nintendo Switch</option>
                    </select>
                  </Col>
                </div>
                <div className="form-row">
                  <Col xs={12} md={6} lg={4} className="form-group">
                    <label>Pais</label>
                    <select
                      className="custom-select"
                      onChange={this.handleChange}
                      id="country"
                    >
                      <option defaultValue />
                      <option value="España">España</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Chile">Chile</option>
                      <option value="Uruguay">Uruguay</option>
                    </select>
                  </Col>
                  <Col xs={12} md={6} lg={4} className="form-group">
                    <label>Ciudad</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.handleChange}
                      id="city"
                      required
                    />
                    <div id="errorCiudad1" />
                  </Col>
                  <Col xs={12} lg={4} className="form-group">
                    <label>Fecha de Nacimiento</label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={this.handleChange}
                      id="birthday"
                      required
                    />
                    <div id="errorFecha" />
                  </Col>
                </div>
                <div className="form-row">
                  <Col className="form-group col-12 col-lg-6">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={this.handleChange}
                      id="email"
                      required
                    />
                    <div id="errorEmail1" />
                  </Col>

                  <Col className="form-group col-6 col-lg-3">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" />
                    <div id="errorPassword11" />
                  </Col>

                  <Col xs={6} lg={3} className="form-group">
                    <label>Repite contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      onChange={this.handleChange}
                      required
                    />
                    <div id="errorPassword12" />
                  </Col>
                </div>

                {/* <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck2"
                      required
                    />
                    <label className="custom-control-label enlace">
                      <p>
                        He leido y Acepto el aviso legal y la politica de
                        privacidad
                      </p>
                    </label>
                    <div id="errorAcepto1" />
                  </div>
                </div> */}
                <Row className="row text-center mt-5">
                  <Col className="col-12">
                    <button
                      type="button"
                      onClick={this.handleClick}
                      id="boton_formulario_registro"
                      className="btn boton-celeste"
                    >
                      Registrarse
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default FormSign;
