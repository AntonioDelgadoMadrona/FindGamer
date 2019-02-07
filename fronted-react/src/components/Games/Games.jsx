import React, { Component } from "react";
import { Container } from "react-bootstrap";

import GamesHeader from "../GamesHeader/GamesHeader";
import GamesList from "../GamesList/GamesList";

class Games extends Component {
  render() {
    return (
      <>
        <GamesHeader />
        <Container className="padre">
          <GamesList />
          
        </Container>
      </>
    );
  }
}

export default Games;