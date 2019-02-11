import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import "./UserFooter1.css";

class UserFooter extends Component {
  render() {
    return (
      <Row className="justify-content-between">
        <Col xs={3}>
          <Row className="mb-3">
            <Col xs={12}>
              <h4 className="titulo-h4">INFORMACION</h4>
            </Col>
            <Col xs={12}>
              <h6>
                Nombre:{" "}
                <span className="datos-usuario">
                  {this.props.first_name} {this.props.last_name}
                </span>
              </h6>
              <h6>
                Vivo en:{" "}
                <span className="datos-usuario">
                  {this.props.city}, {this.props.country}
                </span>
              </h6>
              <h6>
                Plataforma:{" "}
                <span className="datos-usuario">{this.props.fav_platform}</span>
              </h6>
              <h6>
                Juego favorito:{" "}
                <span className="datos-usuario">{this.props.fav_game}</span>
              </h6>
              <h6>
                Juegos completados:{" "}
                <span className="datos-usuario">
                  {this.props.games_complete_length}
                </span>
              </h6>
              <h6>
                Registrado el:{" "}
                <span className="datos-usuario">
                  {this.props.register_date}
                </span>
              </h6>
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Row className="mb-3 ">
            <Col xs={12}>
              <h4 className="titulo-h4">ACTUALMENTE JUGANDO</h4>
            </Col>
            <Col xs={12} className="juegos-usuario">
              {this.props.playing_games.map((game, i) => {
                return <h6 key={i}>{game}</h6>;
              })}
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Row className="mb-3 ">
            <Col xs={12}>
              <h4 className="titulo-h4">PROXIMOS JUEGOS</h4>
            </Col>
            <Col xs={12} className="juegos-usuario">
              {this.props.next_games.map((game, i) => {
                return <h6 key={i}>{game}</h6>;
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default UserFooter;
