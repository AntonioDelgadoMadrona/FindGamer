import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

import GamesHeader from "../GamesHeader/GamesHeader";
import GamesList from "../GamesList/GamesList";

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  searchPlatform = platform => {
    axios
      .get("http://localhost:3001/games/search/platforms" + platform)
      .then(response => {
        console.log(response.data);
        this.setState({
          games: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  searchName = name => {
    console.log(name);
    axios
      .get("http://localhost:3001/games/search" + name)
      .then(response => {
        console.log(response.data);
        this.setState({
          games: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <GamesHeader searchPlatform={this.searchPlatform} />
        <Container className="padre">
          <GamesList
            searchName={this.searchName}
            listGames={this.state.games}
          />
        </Container>
      </>
    );
  }
}

export default Games;
