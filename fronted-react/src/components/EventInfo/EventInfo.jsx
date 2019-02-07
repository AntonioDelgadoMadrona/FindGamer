import React, { Component } from "react";
import { Container } from "react-bootstrap";

import EventBody from "../EventBody/EventBody";
import EventFollow from '../EventFollow/EventFolow';
import EventGamers from '../EventGamers/EventGamers';

class EventInfo extends Component {
  render() {
    return (
      <Container className="padre">
        <EventBody />
        <EventFollow />
        <EventGamers />
      </Container>
    );
  }
}

export default EventInfo;