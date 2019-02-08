import React, { Component } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";

import "./GamesHeader.css";

import pc from "../../img/PClogo.png";
import xbox from "../../img/logo-xbox-one.png";
import ps4 from "../../img/PlayStation_4_-_Logo.svg.png";
import nintendo from "../../img/nintendo-switch.png";

class GamesHeader extends Component {
  render() {
    return (
      <>
        <Container className="cabecera-juegos rounded sombra-1">
          <Row>
            <Col>
              <Nav className="justify-content-center align-items-center">
                <NavLink href="/" className="mr-lg-3 pc">
                  <img src={pc} width="35" alt="" />
                </NavLink>
                <NavLink href="/" className="mr-lg-3 xbox-one">
                  <img src={xbox} width="35" alt="" />
                </NavLink>
                <NavLink href="/" className="mr-lg-3 ps4">
                  <img src={ps4} width="80" alt="" />
                </NavLink>
                <NavLink href="/" className="mr-lg-3 switch">
                  <img src={nintendo} width="60" alt="" />
                </NavLink>
              </Nav>
            </Col>
          </Row>
        </Container>

        <Container className="hijo mt-3 mb-0">
          <Row>
            <Col>
              <h2 className="titulo-h2">JUEGOS DE PC</h2>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default GamesHeader;
