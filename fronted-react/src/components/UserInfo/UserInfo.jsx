import React, { Component } from "react";
import { Container } from "react-bootstrap";

import UserHeader from "../UserHeader/UserHeader";
import UserFooter1 from "../UserFooter1/UserFooter1";
import UserFooter2 from "../UserFooter2/UserFooter2";

class UserInfo extends Component {
  render() {
    return (
      <Container className="padre">
        <UserHeader />
        <Container className="hijo">
          <UserFooter1 />
          <UserFooter2 />
        </Container>
      </Container>
    );
  }
}

export default UserInfo;
