import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import RecoGames from "../RecoGames/RecoGames";
import RecoUsers from "../RecoUsers/RecoUsers";
import BestRated from "../BestRated/BestRated";

class HomeRecommendeds extends Component {
  render() {
    return (
      <div>
        <Container className="hijo">
          <Row>
            <RecoGames />
            <RecoUsers />
            <BestRated />
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomeRecommendeds;
