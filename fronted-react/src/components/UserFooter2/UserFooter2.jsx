import React, { Component } from "react";
import moment from "moment";
import { Link, withRouter } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./UserFooter2.css";

import foto from "../../img/foto-perfil2.jpg";
import imagen from "../../img/juego1.jpg";

class UserFooter2 extends Component {
  render() {
    return (
      <Row className="justify-content-between">
        <Col xs={3}>
          <Row>
            <Col xs={12}>
              <h4 className="titulo-h4">AMIGOS</h4>
            </Col>
            <Col xs={12} className="amigos-usuario">
              {this.props.friends.map((f, i) => {
                let suma = 0;
                const starsRender = [];
                if (f.puntuacion) {
                  for (let i = 0; i < f.puntuacion.length; i++) {
                    suma = suma + f.puntuacion[i];
                  }
                  let media = suma / f.puntuacion.length;

                  const rounded_mean = Math.round(media);

                  for (let i = 0; i < 5; i++) {
                    starsRender.push(
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className={`text-${
                          i < rounded_mean ? "warning" : "muted"
                        }`}
                      />
                    );
                  }
                }

                return (
                  <Row className="amigo-usuario" key={i}>
                    <Col xs={4}>
                      <img src={foto} className="imagen-usuario" alt={f.name} />
                    </Col>
                    <Col xs={8}>
                      <Link to={`/user/${f._id}`}>
                        <p>
                          <strong className="text-white">
                            {f.nombre_usuario}
                          </strong>
                        </p>
                      </Link>
                      <p>{starsRender}</p>
                      <p className="text-muted">{f.plataforma_fav}</p>
                    </Col>
                  </Row>
                );
              })}
            </Col>
          </Row>
        </Col>

        <Col xs={8}>
          <Row>
            <Col xs={12}>
              <h4 className="titulo-h4">JUEGOS COMPLETADOS</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={2} />
            <Col xs={4} className="columna-juegos-completados">
              <p>Nombre del juego</p>
            </Col>
            <Col xs={3} className="columna-juegos-completados">
              <p>Valoracion personal</p>
            </Col>
            <Col xs={3} className="columna-juegos-completados">
              <p>Fecha completado</p>
            </Col>
          </Row>
          <Col className="lista-juegos-completados">
            {this.props.games_complete.map((game, id) => {
              let date = moment.utc(game.f_completado).format("DD/MM/YYYY");

              return (
                <Row className="juego-completado" key={id}>
                  <Col xs={2}>
                    <img src={imagen} className="imagen-juego-usuario" alt="" />
                  </Col>
                  <Col xs={4}>
                    <a href="/">
                      <p>{game.juego}</p>
                    </a>
                  </Col>
                  <Col xs={3} className="text-center">
                    <p>{game.valoracion}/100</p>
                  </Col>
                  <Col xs={3} className="text-center">
                    <p>{date}</p>
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Col>
      </Row>
    );
  }
}

export default withRouter(UserFooter2);
