import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";

import { Container, Row, Col, Alert, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./EventOne.css";

import Comment from "../Comment/Comment";
import FormEvents from "../FormEvents/FormEvents";

import imagen1 from "../../img/icono-evento-04.png";

class EventOne extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      token: null,
      event: null,
      myUser: {
        id: null,
        permiso: null
      }
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  deleteEvent = eventID => {
    console.log(eventID)
    axios
      .post("http://localhost:3001/event/delete", { eventID })
      .then(response => {
        // console.log(response.data);
        this.setState({
          show: false,
          event: eventID
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3001/user/getmyuser", {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response2 => {
          // console.log(response2.data);
          this.setState({
            myUser: {
              id: response2.data._id,
              permiso: response2.data.permiso
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }

    axios
      .get("http://localhost:3001/event/getall")
      .then(response => {
        // console.log(response.data);
        this.setState({
          data: response.data
        });
        this.setState({
          token: token
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Para añadir el evento a la lista al momento
  newEvent = event => {
    console.log(event);
    this.setState({
      data: [...event, ...this.state.data]
    });
  };

  render() {
    let moderador = null;
    if (this.state.myUser.permiso === "moderador") {
      moderador = (
        <Row className="m-0">
          <Col xs={12} className="text-right">
            <button
              type="button"
              className="btn btn-sm btn-warning"
              onClick={this.handleShow}
            >
              <strong>x</strong>
            </button>
          </Col>
        </Row>
      );
    }

    let formEvents = null;
    let comment = null;
    let alert = null;
    if (this.state.token) {
      formEvents = <FormEvents newEvent={this.newEvent} />;
      comment = <Comment />;
    } else {
      alert = (
        <Alert variant="warning">
          Debes iniciar sesion para interactuar con los eventos
        </Alert>
      );
    }

    return (
      <Col xs={12} lg={8} xl={9}>
        <Row>
          <Col>
            <h4 className="titulo-h4">EVENTOS PUBLICADOS</h4>
          </Col>
        </Row>
        {alert}
        <Row className="d-flex justify-content-center">
          {formEvents}
          {this.state.data.map((m, i) => {
            let eventID = m._id;
            let date = moment.utc(m.f_publicacion).format("DD/MM/YYYY, HH:mm");

            let inicio = moment.utc(m.f_inicio).format("DD/MM/YYYY");
            let fin = moment.utc(m.f_fin).format("DD/MM/YYYY");

            let puntuacion = [];
            for (let i = 0; i < 5; i++) {
              puntuacion.push(
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={`text-${
                    i < m.puntuacion_min ? "warning" : "muted"
                  } fa-lg`}
                />
              );
            }
            let moreInfo = null;
            if (this.state.token) {
              moreInfo = (
                <Row className="mb-1 text-center">
                  <Col>
                    <Link to={`/events/${m._id}`}>
                      <button type="button" className="btn bg-warning">
                        <strong>+ info</strong>
                      </button>
                    </Link>
                  </Col>
                </Row>
              );
            }
            let plataforma = null;
            if (m.plataforma == "PS4") {
              plataforma = (
                <span className="badge badge-primary">{m.plataforma}</span>
              );
            } else if (m.plataforma == "Xbox One") {
              plataforma = (
                <span className="badge badge-success">{m.plataforma}</span>
              );
            } else if (m.plataforma == "PC") {
              plataforma = (
                <span className="badge badge-warning">{m.plataforma}</span>
              );
            } else if (m.plataforma == "Nintendo Switch") {
              plataforma = (
                <span className="badge badge-danger text-white">
                  {m.plataforma}
                </span>
              );
            }
            let mensaje = null;
            if (m._id === this.state.event) {
              mensaje = (
                <Alert variant="danger">
                  Este evento ha sido eliminado por un moderador
                </Alert>
              );
              moreInfo = null;
              comment = null;
            }

            return (
              <Container className="evento" key={i}>
                <Col xs={12} className="mensaje-timeline-eventos">
                  {moderador}
                  <Row className="p-2">
                    <div className="d-flex align-items-center">
                      <img
                        src={`http://localhost:3001/users/${
                          m.creador.imagen_perfil
                        }`}
                        className="float-left imagen-usuario"
                        alt=""
                      />
                      <div className="float-right datos-evento">
                        <Link to={`/user/${m.creador._id}`}>
                          <p className="font-weight-bold text-white">
                            {m.creador.nombre_usuario}
                          </p>
                        </Link>
                        <p className="text-muted">{date}h</p>
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
                          <h4 className="titulo-h2">{m.juego}</h4>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} md={6} className="info-evento-2">
                          <h3 className="subtitulo">
                            JUGADORES:{" "}
                            <span className="badge badge-dark">
                              {m.n_jugadores}
                            </span>
                          </h3>
                        </Col>
                        <Col xs={12} md={6} className="info-evento-2">
                          <h3 className="subtitulo">
                            PLATAFORMA: {plataforma}
                          </h3>
                        </Col>
                      </Row>
                      <Row className="align-items-center">
                        <Col xs={12} md={6} className="info-evento-2">
                          <h3 className="subtitulo">PUNTUACION MINIMA:</h3>
                          {puntuacion}
                        </Col>
                        <Col xs={12} md={6} className="info-evento-2">
                          <h3 className="subtitulo">PLAZAS DISPONIBLES:</h3>
                          <span className="subtitulo">
                            {m.n_jugadores - m.participantes.length}
                          </span>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="titulo-h4 mb-1" />
                      </Row>
                      <Row>
                        <Col xs={12} md={6}>
                          <h5>
                            Inicio:{" "}
                            <span>
                              {inicio} - {m.h_inicio}h
                            </span>
                          </h5>
                        </Col>
                        <Col xs={12} md={6}>
                          <h5>
                            Fin:{" "}
                            <span>
                              {fin} - {m.h_fin}h
                            </span>
                          </h5>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {mensaje}
                  {moreInfo}
                  {comment}
                </Col>
                {/* ALERT MODAL */}

                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    ¿Estas seguro que quieres eliminar este mensaje?
                  </Modal.Header>
                  <Modal.Footer>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={this.handleClose}
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.deleteEvent(eventID)}
                    >
                      Eliminar
                    </button>
                  </Modal.Footer>
                </Modal>
              </Container>
            );
          })}
        </Row>
      </Col>
    );
  }
}

export default EventOne;
