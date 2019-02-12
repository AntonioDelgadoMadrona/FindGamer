import React, { Component } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons";

import "./EventOne.css";

import Comment from "../Comment/Comment";
import FormEvents from "../FormEvents/FormEvents";

import foto1 from "../../img/foto-perfil3.jpg";
import imagen1 from "../../img/fortnite.jpg";

class EventOne extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/event/getall")
      .then(response => {
        // console.log(response.data);
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    return (
      <Col xs={12} lg={8} xl={9}>
        <Row>
          <Col>
            <h4 className="titulo-h4">EVENTOS PUBLICADOS</h4>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <FormEvents />

          {this.state.data.map((m, i) => (
            <Container className="evento" key={i}>
              <Col xs={12} className="mensaje-timeline-eventos">
                <Row className="p-2">
                  <div className="d-flex align-items-center">
                    <img
                      src={foto1}
                      className="float-left imagen-usuario"
                      alt=""
                    />
                    <div className="float-right datos-evento">
                      <a href="/">
                        <p className="font-weight-bold">{m.creador}</p>
                      </a>
                      <p className="text-muted">{m.f_creacion}</p>
                    </div>
                  </div>
                </Row>
                <Row className="info-evento">
                  <Col xs={12} xl={3}>
                    <img
                      src={imagen1}
                      className="img-fluid rounded imagen-evento-timeline"
                      alt=""
                    />
                  </Col>
                  <Col xs={12} xl={9}>
                    <Row>
                      <Col>
                        <h4 className="titulo-h2">
                          <a href="juego.html">{m.juego}</a>
                        </h4>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={6} className="info-evento-2">
                        <h3 className="subtitulo">
                          JUGADORES: <span className="badge badge-dark">{m.n_jugadores}</span>
                        </h3>
                      </Col>
                      <Col xs={12} md={6} className="info-evento-2">
                        <h3 className="subtitulo">
                          PLATAFORMA:
                          <span className="badge badge-success">{m.plataforma}</span>
                        </h3>
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col xs={12} md={6} className="info-evento-2">
                        <h3 className="subtitulo">PUNTUACION MINIMA:</h3>
                        <span className="text-warning">
                          <FontAwesomeIcon icon={faStar} className="fa-lg" />
                          <FontAwesomeIcon icon={faStar} className="fa-lg" />
                          <FontAwesomeIcon icon={faStar} className="fa-lg" />
                          <FontAwesomeIcon icon={faStar} className="fa-lg" />
                        </span>
                      </Col>
                      <Col xs={12} md={6} className="info-evento-2">
                        <h3 className="subtitulo">PLAZAS DISPONIBLES:</h3>
                        <span className="subtitulo">{m.n_jugadores - m.participantes.length}</span>
                      </Col>
                    </Row>
                    <Row><Col className="titulo-h4 mb-1"></Col></Row>
                    <Row>
                      <Col xs={12} md={6}>
                        <h5>
                          Inicio: <span>{m.f_inicio}</span>
                        </h5>
                      </Col>
                      <Col xs={12} md={6}>
                        <h5>
                          Fin: <span>{m.f_fin}</span>
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="my-0">
                  <Col>
                    <p>
                      {m.mensaje}
                    </p>
                  </Col>
                </Row>
                <Row className="mb-1 text-right">
                  <Col>
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className="fa-lg cursor like mr-md-3"
                    />
                    <small className="text-muted">{m.likes.length}</small>
                  </Col>
                </Row>

                <Comment />
              </Col>
            </Container>
          ))}

          <Container className="evento">
            <Col xs={12} className="mensaje-timeline-eventos">
              <Row className="p-2">
                <div className="d-flex align-items-center">
                  <img
                    src={foto1}
                    className="float-left imagen-usuario"
                    alt=""
                  />
                  <div className="float-right datos-evento">
                    <a href="/">
                      <p className="font-weight-bold">Nombre de Jugador</p>
                    </a>
                    <p className="text-muted">17/12/1960 - 15:45h</p>
                  </div>
                </div>
              </Row>
              <Row className="info-evento">
                <Col xs={12} xl={3}>
                  <img
                    src={imagen1}
                    className="img-fluid rounded imagen-evento-timeline"
                    alt=""
                  />
                </Col>
                <Col xs={12} xl={9}>
                  <Row>
                    <Col>
                      <h4 className="titulo-h2">
                        <a href="juego.html">Fortnite Battle Royale</a>
                      </h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6} className="info-evento-2">
                      <h3 className="subtitulo">
                        JUGADORES: <span className="badge badge-dark">4</span>
                      </h3>
                    </Col>
                    <Col xs={12} md={6} className="info-evento-2">
                      <h3 className="subtitulo">
                        PLATAFORMA:{" "}
                        <span className="badge badge-success">Xbox One</span>
                        <span className="badge badge-primary mx-1">PS4</span>
                      </h3>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col xs={12} md={6} className="info-evento-2">
                      <h3 className="subtitulo">PUNTUACION MINIMA:</h3>
                      <span className="text-warning">
                        <FontAwesomeIcon icon={faStar} className="fa-lg" />
                        <FontAwesomeIcon icon={faStar} className="fa-lg" />
                        <FontAwesomeIcon icon={faStar} className="fa-lg" />
                        <FontAwesomeIcon icon={faStar} className="fa-lg" />
                      </span>
                    </Col>
                    <Col xs={12} md={6} className="info-evento-2">
                      <h3 className="subtitulo">PLAZAS DISPONIBLES:</h3>
                      <span className="subtitulo">2</span>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col xs={12} md={6}>
                      <h5>
                        Inicio: <span>15/10/2056 - 12:00h</span>
                      </h5>
                    </Col>
                    <Col xs={12} md={6}>
                      <h5>
                        Fin: <span>16/10/2056 - 12:00h</span>
                      </h5>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Busco a tres personas para formar una squad en Fortine y
                    partir trocolos a todo el que se ponga por delante que me
                    cago ya en satanas joder hijo de las mil putas hostia me
                    cago en dios
                  </p>
                </Col>
              </Row>
              <Row className="mb-1 text-right">
                <Col>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="fa-lg cursor like mr-md-3"
                  />
                  <small className="text-muted">15 likes</small>
                </Col>
              </Row>

              <Comment />
            </Col>
          </Container>
        </Row>
      </Col>
    );
  }
}

export default EventOne;
