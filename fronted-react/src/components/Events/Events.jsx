import React, { Component } from "react";

import { Container, Row } from "react-bootstrap";

import EventOne from "../EventOne/EventOne";
import ActiveUsersEvent from "../ActiveUsersEvent/ActiveUsersEvent";

class Events extends Component {

  render() {
    return (
      <Container className="padre">
        <Container className="hijo">
          <Row className="justify-content-between">
            <EventOne />
            <ActiveUsersEvent />
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Events;
