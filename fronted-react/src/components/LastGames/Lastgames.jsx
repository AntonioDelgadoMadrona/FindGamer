import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap';
import './Lastgames.css';

import juego1 from '../../img/ultimo1.jpg';
import juego2 from '../../img/ultimo2.jpg';
import juego3 from '../../img/ultimo3.jpg';

class Lastgames extends Component {
  render() {
    return (
        <Container className="hijo">
        <Row>
          <Col>
            <h4 className="titulo-h4">ULTIMOS JUEGOS PUBLICADOS</h4>
          </Col>
        </Row>
        <Row>
          <div className="ultimos-juegos mx-2">
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego1}
                    className="w-100 imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego2}
                    className="w-100 imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego3}
                    className="w-100 imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego1}
                    className="w-100 imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego2}
                    className="w-100 imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego3}
                    className="w-100 imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego1}
                    className="w-100 imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego2}
                    className="w-100 imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    )
  }
};

export default Lastgames;
