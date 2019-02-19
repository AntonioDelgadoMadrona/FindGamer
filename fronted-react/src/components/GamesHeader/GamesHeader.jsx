import React, { Component } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

import "./GamesHeader.css";

import pc from "../../img/PClogo.png";
import xbox from "../../img/logo-xbox-one.png";
import ps4 from "../../img/PlayStation_4_-_Logo.svg.png";
import nintendo from "../../img/nintendo-switch.png";

class GamesHeader extends Component {
  constructor() {
    super();
    this.state = {
      platform: "TODOS LOS JUEGOS"
    };

    this.changePlatform = this.changePlatform.bind(this);
  }

  changePlatform(platform) {
    this.setState({
      platform: platform
    })
  }

  render() {
    // if(this.state.platform = "TODOS LOS JUEGOS"){
    //   this.props.searchPlatform((6,49,48,130))
    // }
    return (
      <>
        <Container className="cabecera-juegos rounded sombra-1">
          <Row>
            <Col>
              <Nav className="justify-content-center align-items-center">
                <span
                  className="mr-lg-3 cursor p-3 pc"
                  onClick={() => {
                    this.props.searchPlatform(6);
                    this.changePlatform("JUEGOS DE PC");
                  }}
                >
                  <img src={pc} width="35" alt="pc" />
                </span>
                <span
                  className="mr-lg-3 p-3 cursor xbox-one"
                  onClick={() => {
                    this.props.searchPlatform(49);
                    this.changePlatform("JUEGOS DE XBOX ONE");
                  }}
                >
                  <img src={xbox} width="35" alt="xbox-one" />
                </span>
                <span
                  className="mr-lg-3 p-3 cursor ps4"
                  onClick={() => {
                    this.props.searchPlatform(48);
                    this.changePlatform("JUEGOS DE PS4");
                  }}
                >
                  <img src={ps4} width="80" alt="ps4" />
                </span>
                <span
                  href="/"
                  className="mr-lg-3 cursor p-3 switch"
                  onClick={() => {
                    this.props.searchPlatform(130);
                    this.changePlatform("JUEGOS DE NINTENDO SWITCH");
                  }}
                >
                  <img src={nintendo} width="60" alt="switch" />
                </span>
              </Nav>
            </Col>
          </Row>
        </Container>

        <Container className="hijo mt-3 mb-0">
          <Row>
            <Col>
              <h2 className="titulo-h2">{this.state.platform}</h2>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default GamesHeader;
