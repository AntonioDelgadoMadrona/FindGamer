import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import GamesForm from "../GamesForm/GamesForm";

import "./GamesList.css";

import juego from "../../img/juego2.jpg";

class GamesList extends Component {
  render() {
    return (
      <>
        <Container className="hijo">
          <Row className="text-right">
            <Col xs={12} md={5}>
              <form
                action=""
                className="form-group input-group-sm form-inline align-items-center"
              >
                <input
                  type="text"
                  className="form-control mb-1"
                  name=""
                  placeholder="¿Buscas algun juego?"
                />
                <button type="submit" className="btn btn-sm boton-celeste ml-1">
                  Buscar
                </button>
              </form>
            </Col>
            <Col xs={12} md={4}>
              <form action="" className="input-group">
                <select
                  className="custom-select input-pequeño mb-2"
                  id="inputGroupSelect04"
                >
                  <option defaultValue>Ordenar por...</option>
                  <option value="1">Mayor puntuación</option>
                  <option value="2">Menor puntuación</option>
                  <option value="3">A - Z</option>
                  <option value="4">Z - A</option>
                  <option value="5">Los mas recientes</option>
                  <option value="6">Los mas antiguos</option>
                </select>
                <div className="input-group-append">
                  <button type="submit" className="btn h-75 btn-sm boton-celeste">
                    Filtrar
                  </button>
                </div>
              </form>
            </Col>
            
          </Row>
          <GamesForm />
        </Container>

        <Container className="hijo">
          <Row className="justify-content-around fila-lista-juegos">
            {/* <!--CADA JUEGO DE LA LISTA--> */}
            <Col
              xs={12}
              lg={5}
              className="m-2 p-2 columna-lista-juegos rounded"
            >
              <Row className="juego-lista">
                <Col xs={3}>
                  <img src={juego} className="imagen-juego-lista" alt="" />
                </Col>
                <Col xs={9}>
                  <p>
                    <a href="/">The Witcher 3: Wild Hunt</a>
                  </p>
                  <p className="text-muted">
                    Publicado: <span>29/10/2016</span>
                  </p>
                  <p>
                    Plataformas:{" "}
                    <span className="celeste">Xbox One/PS4/PC</span>
                  </p>
                  <p>
                    Puntuacion: <span className="text-warning">94/100</span>
                  </p>
                </Col>
              </Row>
            </Col>

            <Col
              xs={12}
              lg={5}
              className="m-2 p-2 columna-lista-juegos rounded"
            >
              <Row className="juego-lista">
                <Col xs={3}>
                  <img src={juego} className="imagen-juego-lista" alt="" />
                </Col>
                <Col xs={9}>
                  <p>
                    <a href="/">The Witcher 3: Wild Hunt</a>
                  </p>
                  <p className="text-muted">
                    Publicado: <span>29/10/2016</span>
                  </p>
                  <p>
                    Plataformas:{" "}
                    <span className="celeste">Xbox One/PS4/PC</span>
                  </p>
                  <p>
                    Puntuacion: <span className="text-warning">94/100</span>
                  </p>
                </Col>
              </Row>
            </Col>

            <Col
              xs={12}
              lg={5}
              className="m-2 p-2 columna-lista-juegos rounded"
            >
              <Row className="juego-lista">
                <Col xs={3}>
                  <img src={juego} className="imagen-juego-lista" alt="" />
                </Col>
                <Col xs={9}>
                  <p>
                    <a href="/">The Witcher 3: Wild Hunt</a>
                  </p>
                  <p className="text-muted">
                    Publicado: <span>29/10/2016</span>
                  </p>
                  <p>
                    Plataformas:{" "}
                    <span className="celeste">Xbox One/PS4/PC</span>
                  </p>
                  <p>
                    Puntuacion: <span className="text-warning">94/100</span>
                  </p>
                </Col>
              </Row>
            </Col>

            <Col
              xs={12}
              lg={5}
              className="m-2 p-2 columna-lista-juegos rounded"
            >
              <Row className="juego-lista">
                <Col xs={3}>
                  <img src={juego} className="imagen-juego-lista" alt="" />
                </Col>
                <Col xs={9}>
                  <p>
                    <a href="/">The Witcher 3: Wild Hunt</a>
                  </p>
                  <p className="text-muted">
                    Publicado: <span>29/10/2016</span>
                  </p>
                  <p>
                    Plataformas:{" "}
                    <span className="celeste">Xbox One/PS4/PC</span>
                  </p>
                  <p>
                    Puntuacion: <span className="text-warning">94/100</span>
                  </p>
                </Col>
              </Row>
            </Col>

            <Col
              xs={12}
              lg={5}
              className="m-2 p-2 columna-lista-juegos rounded"
            >
              <Row className="juego-lista">
                <Col xs={3}>
                  <img src={juego} className="imagen-juego-lista" alt="" />
                </Col>
                <Col xs={9}>
                  <p>
                    <a href="/">The Witcher 3: Wild Hunt</a>
                  </p>
                  <p className="text-muted">
                    Publicado: <span>29/10/2016</span>
                  </p>
                  <p>
                    Plataformas:{" "}
                    <span className="celeste">Xbox One/PS4/PC</span>
                  </p>
                  <p>
                    Puntuacion: <span className="text-warning">94/100</span>
                  </p>
                </Col>
              </Row>
            </Col>

            <Col
              xs={12}
              lg={5}
              className="m-2 p-2 columna-lista-juegos rounded"
            >
              <Row className="juego-lista">
                <Col xs={3}>
                  <img src={juego} className="imagen-juego-lista" alt="" />
                </Col>
                <Col xs={9}>
                  <p>
                    <a href="/">The Witcher 3: Wild Hunt</a>
                  </p>
                  <p className="text-muted">
                    Publicado: <span>29/10/2016</span>
                  </p>
                  <p>
                    Plataformas:{" "}
                    <span className="celeste">Xbox One/PS4/PC</span>
                  </p>
                  <p>
                    Puntuacion: <span className="text-warning">94/100</span>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default GamesList;
