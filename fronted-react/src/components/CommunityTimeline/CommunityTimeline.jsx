import React, { Component } from "react";
import axios from "axios";

import { Container, Row, Col, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import FormTimeline from "../FormTimeline/FormTimeline";
import Comment from "../Comment/Comment";

import "./CommunityTimeline.css";

import CommunityTimelineMessage from "./CommunityTimelineMessage";

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      token: null
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/timeline/getall")
      .then(response => {
        // console.log(response.data);
        this.setState({ data: response.data.reverse() });
      })
      .catch(err => {
        console.log(err);
      });
    let token = localStorage.getItem("token");
    this.setState({
      token: token
    });
  }

  newMessage = message => {
    // console.log(message);
    this.setState({
      data: [...message, ...this.state.data]
    });
  };

  render() {
    let formTimeline = null;
    let moreInfo = false;
    let alert = null;
    if (this.state.token) {
      formTimeline = <FormTimeline newMessage={this.newMessage} />;
      moreInfo = true;
    } else {
      alert = (
        <Alert variant="warning">
          Debes iniciar sesion para interactuar con los mensajes
        </Alert>
      );
    }
    return (
      <Col xs={12} lg={8} xl={9}>
        <Row>
          <Col>
            <h4 className="titulo-h4">MENSAJES DE LA COMUNIDAD</h4>
          </Col>
        </Row>
        {alert}
        <Row className="d-flex justify-content-center">
          {formTimeline}

          <Container className="timeline">
            {this.state.data.map((m, i) => {
              return (
                <CommunityTimelineMessage moreInfo={moreInfo} m={m} key={i} />
              );
            })}

            {/* MENSAJE IMAGENES */}
            {/* <Col xs={12} className="mensaje-timeline">
              <Row className="p-2 mensaje-cuerpo">
                <div className=" d-flex justify-content-around">
                  <div>
                    <img
                      src={foto1}
                      className="float-left imagen-usuario"
                      alt=""
                    />
                    <div className="float-right ml-3 usuario-mensaje">
                      <a href="/">
                        <p className="font-weight-bold">Nombre de Jugador</p>
                      </a>
                      <p className="text-muted">17/12/1960 - 15:45h</p>
                    </div>
                  </div>
                </div>
              </Row>
              <Row className="my-1">
                <Col>
                  <img
                    src={imagen1}
                    className="imagen-mensaje-timeline rounded"
                    alt=""
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="texto-mensaje" id="mensaje-comunidad">
                    <p>
                      Hola chicos, mi nombre es Roberto y estoy buscanco a
                      compañeros para poder jugar que estoy mas solo que la una
                      macho... asi que por favor contad conmigo para jugar al
                      juego que sea, tengo fortnite, Fortnite, FORTNITE y el
                      fornait ese que esta muy chulo la verdad el mejor de la
                      lista
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="text-right">
                <Col>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="fa-lg cursor mr-md-3"
                  />
                  <small className="text-muted">15 likes</small>
                </Col>
              </Row>
              <Comment />
            </Col> */}
          </Container>
        </Row>
      </Col>
    );
  }
}

export default Timeline;
