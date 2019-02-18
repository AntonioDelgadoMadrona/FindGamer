import React, { Component } from "react";
import axios from "axios";
import moment from 'moment';

import "./HomeNews.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

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
      .get("http://localhost:3001/news")
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
    let columns = [];
    let items = [];
    this.state.data.map((e, i) => {

      let date = moment.utc(e.updated_at).format("DD/MM/YYYY");
      if (e.image) {
        if (i !== 0 && i % 4 === 0) {
          items.push(
            <Carousel.Item className="carousel-item" key={i}>
              <Row>{columns}</Row>
            </Carousel.Item>
          );
          columns = [];
          columns.push(
            <Col xs={12} md={6} lg={3} key={i}>
              <div className="ultimas-noticias" />
              <div className="ultima-noticia p-1">
                <a href={e.website.url}>
                  <div className="noticia">
                    <img
                      src={e.image}
                      className="card-img-top imagen-noticia"
                      alt={e.title}
                    />
                    <div className="overlay">
                      <small>{e.title}</small>
                      <div className="d-flex justify-content-end">
                        <small className="text-muted texto-noticia">{date}</small>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </Col>
          );
        } else {
          columns.push(
            <Col xs={12} md={6} lg={3} key={i}>
              <div className="ultimas-noticias" />
              <div className="ultima-noticia p-1">
                <a href={e.website.url}>
                  <div className=" noticia">
                    <img
                      src={e.image}
                      className="card-img-top imagen-noticia"
                      alt={e.title}
                    />
                    <div className="overlay">
                      <small className="text">{e.title}</small>
                      <div className="d-flex justify-content-end">
                        <small className="text-muted texto-noticia">{date}</small>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </Col>
          );
        }
      }
      return({items})
    });

    items.push(
      <Carousel.Item className="carousel-item" key="carousel">
        <Row>{columns}</Row>
      </Carousel.Item>
    );

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
          fade={true}
          activeIndex={index}
          interval={7000}
          direction={direction}
          onSelect={this.handleSelect}
        >
          {items}
        </Carousel>
      </Container>
    );
  }
}

export default HomeNews;
