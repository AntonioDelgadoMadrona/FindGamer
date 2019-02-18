import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class FormModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      user: {
        email: null,
        password: null
      }
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      user: {
        [event.target.id]: event.target.value
      }
    });
  }

  handleClick() {
    let user = this.state.user;
    axios
      .post("http://localhost:3001/user/login", user)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <FontAwesomeIcon
          onClick={this.handleShow}
          icon={faUser}
          size={"lg"}
          className="enlace"
        />

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4 className="titulo-h4 text-dark">INICIA SESION</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-inline">
              <div className="form-group">
                <input
                  type="email"
                  className="mr-2"
                  onChange={this.handleChange}
                  placeholder="Introduce tu correo"
                  id="email"
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  onChange={this.handleChange}
                  id="password"
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <span className="text-dark mr-5">
              ¿Aun no estas registrado?
              <Link to="/singin" onClick={this.handleClose}>
                Registrate!!
              </Link>
            </span>
            <Button className="btn-sm boton-celeste" onClick={this.handleClick}>
              Iniciar sesion
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default FormModal;
