import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap';

import RecoGames from '../RecoGames/RecoGames';
import RecoUsers from '../RecoUsers/RecoUsers';

class Recommendeds extends Component {
  render() {
    return (
      <div>
        <Container className="hijo">
            <Row>
                <RecoGames />
                <RecoUsers />
            </Row>
        </Container>
      </div>
    )
  }
};

export default Recommendeds;
