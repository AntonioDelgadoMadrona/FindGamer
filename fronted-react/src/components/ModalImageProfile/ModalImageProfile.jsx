import React, { Component } from "react";
import axios from 'axios';

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
      })
  };

  fileUploadHandler = () => {
      let file = this.state.selectedFile
    axios.post("http://localhost:3001/user/addimgprofile", file).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
  }

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

export default ModalImageProfile;
