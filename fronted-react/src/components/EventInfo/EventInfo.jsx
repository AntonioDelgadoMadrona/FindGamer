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
      }
    };
  }

  componentDidMount() {
    let eventID = this.props.match.params.id;
    axios
      .get("http://localhost:3001/event/getinfo", {
        params: { eventID }
      })
      .then(response => {
        // console.log(response.data[0])
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
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
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
        />
        <EventGamers participants={this.state.event.participants} />
      </Container>
    );
  }
}

export default withRouter(EventInfo);
