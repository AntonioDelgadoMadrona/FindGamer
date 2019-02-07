import React, { Component } from 'react';
import { Row, Col, Collapse, Button } from 'reactstrap';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button className="btn-sm" color="danger" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Comentar</Button>
        <Collapse isOpen={this.state.collapse}>
        <Row className=" mensaje-nuevo" id="comentario1">
            <Col className="d-flex justify-content-end">
                <form action="" className="form-group form-inline">
                    <textarea className="form-control" placeholder="Envia un comentario" cols="50" rows="1" name=""></textarea>
                    <button type="submit" class="mx-1 btn btn-sm boton-celeste">Enviar</button>
                </form>
            </Col>
        </Row>
        </Collapse>
      </div>
    );
  }
}

export default Comment;