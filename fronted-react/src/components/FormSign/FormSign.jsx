import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class FormSign extends Component {
  render() {
    return (
      <Container className="my-3">
        <Row className="row justify-content-center">
          <Col xs={12} lg={8}>
            <form id="formulario_registro">
              <div className="form-row">
                <Col xs={12} lg={6}>
                  <label>Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    id="inputNombre1"
                    required
                  />
                  <div id="errorNombre1" />
                </Col>
                <Col xs={12} lg={6} className="form-group">
                  <label>Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    name="apellidos"
                    id="inputApellidos1"
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
                    name="telefono"
                    id="inputTelefono1"
                    required
                  />
                  <div id="errorUsuario" />
                </Col>
                <Col xs={12} lg={6} className="form-group">
                  <label>Plataforma favorita</label>
                  <select className="custom-select" id="inputGroupSelect04">
                    <option selected />
                    <option value="1">PC</option>
                    <option value="2">Xbox One</option>
                    <option value="3">Playstation 4</option>
                    <option value="4">Nintendo Switch</option>
                  </select>
                </Col>
              </div>
              <div className="form-row">
                <Col xs={12} md={6} lg={4} className="form-group">
                  <label>Pais</label>
                  <select className="custom-select" id="inputGroupSelect04">
                    <option selected />
                    <option value="es">España</option>
                    <option value="ar">Argentina</option>
                    <option value="mx">Mexico</option>
                    <option value="co">Colombia</option>
                    <option value="ch">Chile</option>
                    <option value="ur">Uruguay</option>
                  </select>
                </Col>
                <Col xs={12} md={6} lg={4} className="form-group">
                  <label>Ciudad</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ciudad"
                    id="inputCiudad1"
                    required
                  />
                  <div id="errorCiudad1" />
                </Col>
                <Col xs={12} lg={4} className="form-group">
                  <label>Fecha de Nacimiento</label>
                  <input
                    type="date"
                    className="form-control"
                    name="f_nacimiento"
                    id="inputDate"
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
                    name="email"
                    id="inputEmail1"
                    required
                  />
                  <div id="errorEmail1" />
                </Col>

                <Col className="form-group col-6 col-lg-3">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword11"
                    required
                  />
                  <div id="errorPassword11" />
                </Col>

                <Col xs={6} lg={3} className="form-group">
                  <label>Repite contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="inputPassword12"
                    required
                  />
                  <div id="errorPassword12" />
                </Col>
              </div>

              <div className="form-group">
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
              </div>
              <Row className="row text-center">
                <Col className="col-12">
                  <button
                    type="button"
                    onclick="enviarFormulario()"
                    id="boton_formulario_registro"
                    className="btn btn-outline-secondary"
                  >
                    Registrarse
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormSign;
