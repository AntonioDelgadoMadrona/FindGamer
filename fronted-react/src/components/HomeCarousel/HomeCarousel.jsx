import React, { Component } from "react";
import axios from "axios";

import { Carousel, Container } from "react-bootstrap";

import "./HomeCarousel.css";

const url_img = "https://images.igdb.com/igdb/image/upload/";
const size = "t_1080p/";
const format = ".jpg";

class HomeCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/carouselgames")
      .then(response => {
        console.log(response.data);
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
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
        <Carousel
          className="carrusel"
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          {this.state.data.map((e, i) => (
            <Carousel.Item className="carousel-item" key={i}>
              <img className="imagen-carrusel" src={`${url_img}${size}${e.cover.image_id}${format}`} alt={`${i} slide`} />
              <Carousel.Caption>
                <h3>{e.name}</h3>
                <p>
                  hola
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
  }
}

export default HomeCarousel;
