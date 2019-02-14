import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from 'axios';

import GamesHeader from "../GamesHeader/GamesHeader";
import GamesList from "../GamesList/GamesList";

class Games extends Component {

  constructor(props){
    super(props);
    this.state = {
      games: []
    }
  };

  componentDidMount(){
    this.searchGames({})
  };

  searchGames = (search) => {
    axios.get("http://localhost:3001/games/search", { params: search }).then(response => {
      console.log(response.data)
      this.setState({
        games: response.data
      })

    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <>
        <GamesHeader />
        <Container className="padre">
          <GamesList listGames={this.state.games} searchGames={this.searchGames} />
        </Container>
      </>
    );
  }
}

export default Games;