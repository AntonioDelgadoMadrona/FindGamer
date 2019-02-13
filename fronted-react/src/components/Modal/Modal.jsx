import React, { Component } from "react";

import { Link } from 'react-router-dom';

import { Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class FormModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
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
            <Form inline>
              <Form.Group controlId="formGroupEmail">
                <Form.Control type="email" className="mr-2" placeholder="Introduce tu correo" />
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <span class="text-dark mr-5">
              ¿Aun no estas registrado?<Link to="/singin">Registrate!!</Link>
            </span>
            <Button className="btn-sm boton-celeste" onClick={this.handleClose}>
              Iniciar sesion
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default FormModal;
