import React, { Component } from "react";

import "./News.css";
import { Container, Row, Col } from "react-bootstrap";

import juego1 from '../../img/juego1.jpg';
import juego2 from '../../img/juego2.jpg';
import juego3 from '../../img/pubg.jpg';

class Noticias extends Component {
  render() {
    return (
      <Container className="hijo">
        <Row>
          <Col>
            <h4 className="titulo-h4">ULTIMAS NOTICIAS</h4>
          </Col>
        </Row>
        <div className="ultimas-noticias">
          <div className="ultima-noticia p-1">
            <a href="/">
              <div className=" noticia">
                <img
                  src={juego1}
                  className="card-img-top imagen-noticia"
                  alt=""
                />
                <div className="card-body">
                  <h4>Titulo de la noticia</h4>
                  <div className="d-flex justify-content-end">
                    <small className="text-muted ">9 min</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="ultima-noticia p-1">
            <a href="/">
              <div className=" noticia">
                <img
                  src={juego2}
                  className="card-img-top imagen-noticia"
                  alt=""
                />
                <div className="card-body">
                  <h4>Titulo de la noticia</h4>
                  <div className="d-flex justify-content-end">
                    <small className="text-muted ">9 min</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="ultima-noticia p-1">
            <a href="/">
              <div className="noticia">
                <img
                  src={juego3}
                  className="card-img-top imagen-noticia"
                  alt=""
                />
                <div className="card-body">
                  <h4>Titulo de la noticia</h4>
                  <div className="d-flex justify-content-end">
                    <small className="text-muted ">9 min</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="ultima-noticia p-1">
            <a href="/">
              <div className=" noticia">
                <img
                  src={juego1}
                  className="card-img-top imagen-noticia"
                  alt=""
                />
                <div className="card-body">
                  <h4>Titulo de la noticia</h4>
                  <div className="d-flex justify-content-end">
                    <small className="text-muted ">9 min</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="ultima-noticia p-1">
            <a href="/">
              <div className=" noticia">
                <img
                  src={juego2}
                  className="card-img-top imagen-noticia"
                  alt=""
                />
                <div className="card-body">
                  <h4>Titulo de la noticia</h4>
                  <div className="d-flex justify-content-end">
                    <small className="text-muted ">9 min</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="ultima-noticia p-1">
            <a href="/">
              <div className=" noticia">
                <img
                  src={juego3}
                  className="card-img-top imagen-noticia"
                  alt=""
                />
                <div className="card-body">
                  <h4>Titulo de la noticia</h4>
                  <div className="d-flex justify-content-end">
                    <small className="text-muted ">9 min</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="ultima-noticia p-1">
            <a href="/">
              <div className=" noticia">
                <img
                  src={juego1}
                  className="card-img-top imagen-noticia"
                  alt=""
                />
                <div className="card-body">
                  <h4>Titulo de la noticia</h4>
                  <div className="d-flex justify-content-end">
                    <small className="text-muted ">9 min</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Container>
    );
  }
}

export default Noticias;
