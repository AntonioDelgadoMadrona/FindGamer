import React, { Component } from "react";

import "./HomeNews.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

import juego1 from "../../img/juego1.jpg";
import juego2 from "../../img/juego2.jpg";
import juego3 from "../../img/pubg.jpg";

class HomeNews extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;
    return (
      <Container className="hijo">
        <Row>
          <Col>
            <h4 className="titulo-h4">ULTIMAS NOTICIAS</h4>
          </Col>
        </Row>
        <Carousel
          className="carrusel"
          indicators={null}
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item className="carousel-item">
            <Row>
              <Col xs={12} md={6} lg={3}>
                <div className="ultimas-noticias" />
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
              </Col>
              <Col xs={12} md={6} lg={3} className="d-none d-lg-block">
                <div className="ultimas-noticias" />
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
              </Col>
              <Col xs={12} md={6} lg={3} className="d-none d-lg-block">
                <div className="ultimas-noticias" />
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
              </Col>
              <Col xs={12} md={6} lg={3} className="d-none d-lg-block">
                <div className="ultimas-noticias" />
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
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Row>
              <Col xs={12} md={6} lg={3}>
                <div className="ultimas-noticias" />
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
              </Col>
              <Col xs={12} md={6} lg={3} className="d-none d-lg-block">
                <div className="ultimas-noticias" />
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
              </Col>
              <Col xs={12} md={6} lg={3} className="d-none d-lg-block">
                <div className="ultimas-noticias" />
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
              </Col>
              <Col xs={12} md={6} lg={3} className="d-none d-lg-block">
                <div className="ultimas-noticias" />
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
              </Col>
            </Row>
          </Carousel.Item>
          

         
        </Carousel>
      </Container>
    );
  }
}

export default HomeNews;
