import React, { Component } from "react";
import axios from "axios";

import { Container, Col, Collapse, Button, Form } from "reactstrap";

import "./FormTimeline.css";

class FormTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      message: {
        message: null,
        selectedFile: null
      }
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  handleChange(e) {
    this.setState({
      message: {
        ...this.state.message,
        [e.target.id]: e.target.value
      }
    });
  }

  handleClick() {
    let message = this.state.message;
    let token = localStorage.getItem("token");
    // console.log(message)
    axios
      .post("http://localhost:3001/timeline/create", message, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        this.props.newMessage(response.data);
        this.setState({ collapse: !this.state.collapse });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container className="hijo text-center">
        <Button
          className="boton-celeste"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
        >
          Publicar mensaje
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Col xs={12} className="publicar-mensaje">
            <Form className="form-group">
              <textarea
                className="form-control"
                id="message"
                onChange={this.handleChange}
                placeholder="Comparte un mensaje, foto o evento..."
              />
              <div className="d-flex justify-content-between mt-2">
                {/* <input
                  type="file"
                  className="form-control-file form-control-sm "
                  onChange={this.handleChange}
                  id="image"
                /> */}
                <button
                  type="button"
                  onClick={this.handleClick}
                  className="btn btn-sm boton-celeste"
                >
                  Compartir
                </button>
              </div>
            </Form>
          </Col>
        </Collapse>
      </Container>
    );
  }
}

export default FormTimeline;
