import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./GameScreenshoots.css";

const url_img = "https://images.igdb.com/igdb/image/upload/";
const size = "t_720p/";
const format = ".jpg";

class HomeLastgames extends Component {
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

  render() {
    const { index, direction } = this.state;
    let columns = [];
    let items = [];
    this.props.screenshots.map((e, i) => {
      if (i !== 0 && i % 4 === 0) {
        items.push(
          <Carousel.Item className="carousel-item" key={i}>
            <Row>{columns}</Row>
          </Carousel.Item>
        );
        columns = [];
        columns.push(
          <Col xs={12} md={6} lg={3} key={i}>
            <div className="ultimos-juegos mx-2" />
            <div className="p-0 mr-1 ultimo-juego" key={i}>
              <div className="card-body cuerpo-juego w-100 p-1">
                  <img
                    src={`${url_img}${size}${e.image_id}${format}`}
                    className="imagen-ultimos-juegos"
                    alt={i}
                  />

              
              </div>
            </div>
          </Col>
        );
      } else {
        columns.push(
          <Col xs={12} md={6} lg={3} key={i}>
            <div className="ultimos-juegos mx-2" />
            <div className="p-0 mr-1 ultimo-juego" key={i}>
              <div className="card-body cuerpo-juego w-100 p-1">
                  <img
                    src={`${url_img}${size}${e.image_id}${format}`}
                    className="w-100 imagen-ultimos-juegos"
                    alt={i}
                  />
              </div>
            </div>
          </Col>
        );
      }

      return({items})
    });

    return (
      <Container className="hijo py-0">
        <Row>
          <Col>
            <h4 className="titulo-h4">IMAGENES DEL JUEGO</h4>
          </Col>
        </Row>
        <Carousel
          className="carrusel"
          indicators={null}
          fade={true}
          activeIndex={index}
          direction={direction}
          interval={8000}
          onSelect={this.handleSelect}
        >
          {items}
        </Carousel>
      </Container>
    );
  }
}

export default HomeLastgames;
