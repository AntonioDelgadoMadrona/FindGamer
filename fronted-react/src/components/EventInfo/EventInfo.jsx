import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";

import { Container } from "react-bootstrap";

import EventBody from "../EventBody/EventBody";
import EventFollow from "../EventFollow/EventFolow";
import EventGamers from "../EventGamers/EventGamers";

class EventInfo extends Component {
  constructor() {
    super();

    this.state = {
      event: {
        id: null,
        creator: [],
        game: null,
        platform: null,
        n_gamers: null,
        rating: null,
        start_event: null,
        h_start_event: null,
        end_event: null,
        h_end_event: null,
        message: null,
        participants: [],
        comments: []
      },
      userActive: {
        id: null,
        rating: []
      }
    };
  }

  componentDidMount() {
    let eventID = this.props.match.params.id;
    let token = localStorage.getItem("token");
    axios
      .get("http://localhost:3001/event/getinfo", {
        params: { eventID }
      })
      .then(response => {
        axios
          .get("http://localhost:3001/user/getmyuser", {
            headers: { Authorization: "Bearer " + token }
          })
          .then(response2 => {
            // console.log(response.data[0]);
            // console.log(response2.data);
            let r = response.data[0];
            this.setState({
              event: {
                id: r._id,
                creator: r.creador,
                game: r.juego,
                platform: r.plataforma,
                n_gamers: r.n_jugadores,
                rating: r.puntuacion_min,
                start_event: r.f_inicio,
                h_start_event: r.h_inicio,
                end_event: r.f_fin,
                h_end_event: r.h_fin,
                message: r.mensaje,
                participants: r.participantes,
                comments: r.comentarios
              },

              userActive: {
                id: response2.data._id,
                rating: response2.data.puntuacion
              }
            });
          });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // console.log(this.state.event.participants)
    let suma = 0;
    let media = 0;
    this.state.userActive.rating.map((g, j) => {
      return (suma = suma + g);
    });
    media = suma / this.state.userActive.rating.length;
    media = Math.round(media);

    let participar = false;
    if (this.state.event.rating <= media) {
      participar = true;
    }
    let participante = false;
    this.state.event.participants.map((k, p) => {
      if (this.state.userActive.id && k._id === this.state.userActive.id) {
        participante = true;
      }
    });

    return (
      <Container className="padre">
        <EventBody
          creator={this.state.event.creator}
          game={this.state.event.game}
          platform={this.state.event.platform}
          n_gamers={this.state.event.n_gamers}
          rating={this.state.event.rating}
          start_event={this.state.event.start_event}
          h_start_event={this.state.event.h_start_event}
          end_event={this.state.event.end_event}
          h_end_event={this.state.event.h_end_event}
          participants={this.state.event.participants}
          message={this.state.event.message}
        />
        <EventFollow
          n_gamers={this.state.event.n_gamers}
          participants={this.state.event.participants}
          eventID={this.state.event.id}
          participar={participar}
          participante={participante}
          creator={this.state.event.creator.nombre_usuario}
        />
        <EventGamers participants={this.state.event.participants} />
      </Container>
    );
  }
}

export default withRouter(EventInfo);
