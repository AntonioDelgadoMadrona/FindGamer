import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

import GamesHeader from "../GamesHeader/GamesHeader";
import GamesList from "../GamesList/GamesList";

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      platform_id: 1
    };
  }

  componentDidMount() {
    this.searchPlatformSort(this.state.platform_id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.platform_id !== prevState.platform_id ||
      this.state.sort !== prevState.sort
    ) {
      this.searchPlatformSort(this.state.platform_id, this.state.sort);
    }
  }

  searchPlatformSort = (platform, sort) => {
    axios
      .get(
        "http://localhost:3001/games/search/platforms/" +
          platform +
          "/" +
          (sort ? sort : "")
      )
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

  selectPlatform = platform_id => {
    this.setState({
      platform_id
    });
  };

  selectSort = sort => {
    this.setState({
      sort
    });
  };

  render() {
    return (
      <>
        <GamesHeader selectPlatform={this.selectPlatform} />
        <Container className="padre">
          <GamesList
            searchName={this.searchName}
            listGames={this.state.games}
            selectSort={this.selectSort}
          />
        </Container>
      </>
    );
  }
}

export default Games;
