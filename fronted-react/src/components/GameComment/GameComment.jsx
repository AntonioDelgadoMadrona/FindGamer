import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import Comment from "../Comment/Comment";

import "./GameComment.css";

import foto1 from "../../img/foto-perfil3.jpg";

class GameComment extends Component {
  render() {
    return (
      <Container className="hijo">
        <Row>
          <Col>
            <h4 className="titulo-h4">COMENTARIOS</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={9} className="rounded">
            <Row className="d-flex justify-content-center">
              <Col xs={11} className="my-2 p-2 rounded text-dark publicar-mensaje">
                <form action="" className="form-group">
                  <textarea
                    className="form-control"
                    id=""
                    placeholder="Comparte un comentario"
                  />
                  <div className="d-flex justify-content-between mt-2">
                    <button type="submit" className="btn btn-sm boton-celeste">
                      Compartir
                    </button>
                  </div>
                </form>
              </Col>

              <Col xs={11} className="mensaje-juego">
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
                <Row>
                  <Col>
                    <div className="texto-mensaje">
                      <p>
                        Hola chicos, mi nombre es Roberto y estoy buscanco a
                        compañeros para poder jugar que estoy mas solo que la
                        una macho... asi que por favor contad conmigo para jugar
                        al juego que sea, tengo fortnite, Fortnite, FORTNITE y
                        el fornait ese que esta muy chulo la verdad el mejor de
                        la lista
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="text-right">
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
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GameComment;
