import React, { Component } from "react";
import axios from "axios";

import "./HomeNews.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const url_img = "https://images.igdb.com/igdb/image/upload/";
const size = "t_thumb/";
const format = ".jpg";

class HomeNews extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      data: []
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/ratedgames")
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
          {this.state.data.map((e, i) => (
            <Carousel.Item className="carousel-item">
              <Row>
                <Col xs={12} md={6} lg={3} key={i}>
                  <div className="ultimas-noticias" />
                  <div className="ultima-noticia p-1">
                    <a href="/">
                      <div className=" noticia">
                        <img
                          src={`${url_img}${size}${e.cover.image_id}${format}`}
                          className="card-img-top imagen-noticia"
                          alt=""
                        />
                        <div>
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
                          src={`${url_img}${size}${e.cover.image_id}${format}`}
                          className="card-img-top imagen-noticia"
                          alt=""
                        />
                        <div>
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
                          src={`${url_img}${size}${e.cover.image_id}${format}`}
                          className="card-img-top imagen-noticia"
                          alt=""
                        />
                        <div>
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
                          src={`${url_img}${size}${e.cover.image_id}${format}`}
                          className="card-img-top imagen-noticia"
                          alt=""
                        />
                        <div>
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
          ))}
        </Carousel>
      </Container>
    );
  }
}

export default HomeNews;
