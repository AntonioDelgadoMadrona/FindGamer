import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

import './BestRated.css';

import juego1 from '../../img/juego1.jpg';
import juego2 from '../../img/ultimo2.jpg';
import juego3 from '../../img/ultimo1.jpg';

class BestRated extends Component {
  render() {
    return (
      <Col xs={12} lg={4}>
        <Row>
          <Col>
            <h4 className="titulo-h4">JUEGOS RECOMENDADOS</h4>
          </Col>
        </Row>
        <div id="lista-vertical">
          <Row className="pb-3 juego-recomendacion">
            <div>
              <img
                src={juego1}
                className="float-left imagen-juego-vertical"
                alt=""
              />
              <div className="float-right ml-3">
                <p>
                  <a href="/">
                    <strong className="text-white">Nombre del juego</strong>
                  </a>
                </p>
                <p className="celeste">Xbox One/PS4/PC</p>
                <p className="text-muted">Fecha de publicacion</p>
              </div>
            </div>
          </Row>
          <Row className="bg-dark juego-recomendacion">
            <div>
              <img
                src={juego2}
                className="float-left imagen-juego-vertical"
                alt=""
              />
              <div className="float-right ml-3">
                <p>
                  <a href="/">
                    <strong className="text-white">Nombre del juego</strong>
                  </a>
                </p>
                <p className="celeste">Xbox One/PS4/PC</p>
                <p className="text-muted">Fecha de publicacion</p>
              </div>
            </div>
          </Row>
          <Row className="juego-recomendacion">
            <div>
              <img
                src={juego3}
                className="float-left imagen-juego-vertical"
                alt=""
              />
              <div className="float-right ml-3">
                <p>
                  <a href="/">
                    <strong className="text-white">Nombre del juego</strong>
                  </a>
                </p>
                <p className="celeste">Xbox One/PS4/PC</p>
                <p className="text-muted">Fecha de publicacion</p>
              </div>
            </div>
          </Row>
          <Row className="bg-dark juego-recomendacion">
            <div>
              <img
                src={juego1}
                className="float-left imagen-juego-vertical"
                alt=""
              />
              <div className="float-right ml-3">
                <p>
                  <a href="/">
                    <strong className="text-white">Nombre del juego</strong>
                  </a>
                </p>
                <p className="celeste">Xbox One/PS4/PC</p>
                <p className="text-muted">Fecha de publicacion</p>
              </div>
            </div>
          </Row>
          <Row className="juego-recomendacion">
            <div>
              <img
                src={juego2}
                className="float-left imagen-juego-vertical"
                alt=""
              />
              <div className="float-right ml-3">
                <p>
                  <a href="/">
                    <strong className="text-white">Nombre del juego</strong>
                  </a>
                </p>
                <p className="celeste">Xbox One/PS4/PC</p>
                <p className="text-muted">Fecha de publicacion</p>
              </div>
            </div>
          </Row>
          <Row className="bg-dark juego-recomendacion">
            <div>
              <img
                src={juego3}
                className="float-left imagen-juego-vertical"
                alt=""
              />
              <div className="float-right ml-3">
                <p>
                  <a href="/">
                    <strong className="text-white">Nombre del juego</strong>
                  </a>
                </p>
                <p className="celeste">Xbox One/PS4/PC</p>
                <p className="text-muted">Fecha de publicacion</p>
              </div>
            </div>
          </Row>
        </div>
      </Col>
    );
  }
}

export default BestRated;
