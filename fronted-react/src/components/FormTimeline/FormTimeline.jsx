import React, { Component } from 'react';
import { Container, Col, Collapse, Button, Form } from 'reactstrap';

import './FormTimeline.css'

class FormTimeline extends Component {
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
      <Container className="hijo text-center">
        <Button className="boton-celeste" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Publicar mensaje</Button>
        <Collapse isOpen={this.state.collapse}>
          <Col xs={12} className="publicar-mensaje" id="bloque1">
            <Form action="" className="form-group">
                <textarea className="form-control" id="" placeholder="Comparte un mensaje, foto o evento..."></textarea>
                <div className="d-flex justify-content-between mt-2">
                    <input type="file" className="form-control-file form-control-sm " name="" id=""></input>
                    <button type="submit" className="btn btn-sm boton-celeste">Compartir</button>
                </div>
            </Form>
        </Col>
        
        </Collapse>
      </Container>
    );
  }
}

export default FormTimeline;