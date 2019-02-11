import React, { Component } from "react";
import { Container } from "react-bootstrap";

import UserHeader from "../UserHeader/UserHeader";
import UserFooter1 from "../UserFooter1/UserFooter1";
import UserFooter2 from "../UserFooter2/UserFooter2";
import axios from "axios";

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      friends: null,
      img_small: null,
      img_big: null
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/user/getinfo", {
        params: { email: "antonio_dm93@hotmail.com" }
      })
      .then(response => {
        const r = response.data[0];
        this.setState({
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
    return (
      <Container className="padre">
        <UserHeader
          img_small={this.state.img_small}
          img_big={this.state.img_big}
          rating={this.state.rating}
          username={this.state.username}
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

export default UserInfo;
