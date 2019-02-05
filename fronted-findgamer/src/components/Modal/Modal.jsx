import React, { Component } from "react";

import { Button, Modal, Form } from "react-bootstrap";

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
        <Button variant="primary" onClick={this.handleShow}>
          Icono usuario
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="titulo-h4 text-dark" >INICIA SESION</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form inline>
              <Form.Group controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Introduce tu correo" />
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <span class="text-dark mr-5">¿Aun no estas registrado?<a href="/">Registrate!!</a></span
            >
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
