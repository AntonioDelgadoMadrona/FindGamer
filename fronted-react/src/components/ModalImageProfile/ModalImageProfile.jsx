import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import axios from "axios";

import { Button, Modal } from "react-bootstrap";

class ModalImageProfile extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      selectedFile: null
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  fileUploadHandler = () => {
    let userID = this.props.match.params.id;
    const fd = new FormData();
    fd.append("image", this.state.selectedFile);
    fd.append("type", "users");
    fd.append("id", userID);
    axios
      .put("http://localhost:3001/upload", fd)
      .then(response => {
        this.setState({
          show: false
        });
        // console.log(response);
        
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <Button className="boton-celeste" onClick={this.handleShow}>
          Foto perfil
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cambia tu foto de perfil</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="file"
              name="img_profile"
              onChange={this.fileSelectedHandler}
              placeholder="Selecciona una imagen"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button className="boton-celeste" onClick={this.fileUploadHandler}>
              Cambiar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withRouter(ModalImageProfile);
