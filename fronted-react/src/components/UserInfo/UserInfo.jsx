import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router";

import UserHeader from "../UserHeader/UserHeader";
import UserFooter1 from "../UserFooter1/UserFooter1";
import UserFooter2 from "../UserFooter2/UserFooter2";
import axios from "axios";

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tokenID: null,
      id: null,
      first_name: null,
      last_name: null,
      username: null,
      city: null,
      country: null,
      email: null,
      rating: null,
      fav_platform: null,
      fav_game: null,
      games_complete: [],
      register_date: null,
      playing_games: [],
      next_games: [],
      licence: null,
      friends: [],
      img_small: null,
      img_big: null
    };
  }
  componentDidMount() {
    // console.log(this.props.match.params)
    let userID = this.props.match.params.id;
    let token = localStorage.getItem("token");
    let headers;
    if (token) {
      headers = { Authorization: "Bearer " + token };
    }
    axios
      .get("http://localhost:3001/user/getinfo", {
        params: { userID },
        headers: {
          ...headers
        }
      })
      .then(response => {
        console.log(response);
        const r = response.data[0];
        this.setState({
          tokenID: response.data.userID,
          id: r._id,
          first_name: r.nombre,
          last_name: r.apellidos,
          username: r.nombre_usuario,
          city: r.ciudad,
          country: r.pais,
          email: r.email,
          rating: r.puntuacion,
          fav_platform: r.plataforma_fav,
          fav_game: r.juego_fav,
          games_complete: r.j_completados,
          register_date: r.fecha_registro,
          playing_games: r.j_jugando,
          next_games: r.j_proximos,
          licence: r.permiso,
          friends: r.amigos,
          img_small: r.imagen_perfil,
          img_big: r.imagen_portada
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    let anotherUser = true;
    if (this.state.tokenID === this.state.id) {
      anotherUser = false;
    }

    return (
      <Container className="padre">
        <UserHeader
          id={this.state.id}
          img_small={this.state.img_small}
          img_big={this.state.img_big}
          rating={this.state.rating}
          username={this.state.username}
          anotherUser={anotherUser}
        />
        <Container className="hijo">
          <UserFooter1
            first_name={this.state.first_name}
            last_name={this.state.last_name}
            city={this.state.city}
            country={this.state.country}
            fav_platform={this.state.fav_platform}
            fav_game={this.state.fav_game}
            register_date={this.state.register_date}
            playing_games={this.state.playing_games}
            next_games={this.state.next_games}
            games_complete_length={this.state.games_complete.length}
          />
          <UserFooter2
            friends={this.state.friends}
            games_complete={this.state.games_complete}
          />
        </Container>
      </Container>
    );
  }
}

export default withRouter(UserInfo);
