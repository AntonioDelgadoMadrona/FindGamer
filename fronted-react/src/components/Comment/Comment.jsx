import React, { Component } from "react";
import axios from "axios";

import { Row, Col, Collapse, Button, Form } from "reactstrap";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      comment: null
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleClick(messageID) {
    let token = localStorage.getItem("token");
    let comment = this.state.comment;
    axios
      .post(
        "http://localhost:3001/timeline/addcomment",
        { comment, messageID },
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Button
          className="btn-sm"
          color="danger"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
          disabled
        >
          Comentar
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Row className=" mensaje-nuevo" id="comentario1">
            <Col className="d-flex justify-content-end">
              <Form action="" className="form-group form-inline">
                <textarea
                  className="form-control"
                  placeholder="Envia un comentario"
                  cols="50"
                  rows="1"
                  id="comment"
                  onChange={this.handleChange}
                />
                <button
                  onClick={() => this.handleClick(this.props.messageID)}
                  className="mx-1 btn btn-sm boton-celeste"
                >
                  Enviar
                </button>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}

export default Comment;
