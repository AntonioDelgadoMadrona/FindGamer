import React, { Component } from "react";
import axios from "axios";

import { Carousel, Container } from "react-bootstrap";

import "./HomeCarousel.css";

import fondo1 from "../../img/fondo-1.jpg";
import fondo2 from "../../img/fondo-2.jpg";
import fondo6 from "../../img/fondo-6.jpg";
import fondo8 from "../../img/fondo-8.jpg";
import fondo9 from "../../img/fondo-9.jpg";
import fondo10 from "../../img/fondo-10.jpg";
import fondo11 from "../../img/fondo-11.jpg";
import fondo13 from '../../img/fondo-13.png'


class HomeCarousel extends Component {
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
        <Carousel
          className="carrusel"
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          slide={false}
          interval={7000}
        >
          <Carousel.Item className="carousel-item">
            <img className="imagen-carrusel" src={fondo1} alt="slide1" />
            <Carousel.Caption className="texto-carrusel">
              <h2>HORIZON ZERO DAWN</h2>
              <h5>PONTE EN LA PIEL DE ALOY Y MUEVETE POR UN MUNDO INMENSO</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img className="imagen-carrusel" src={fondo2} alt="slide1" />
            <Carousel.Caption className="texto-carrusel">
              <h2>BATTLEFIELD 5</h2>
              <h5>REVIVE LA GUERRA MAS EPICA</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img className="imagen-carrusel" src={fondo13} alt="slide1" />
            <Carousel.Caption className="texto-carrusel">
              <h2>OVERWATCH SOLDIER 76</h2>
              <h5>PORQUE SE HA HECHO TAN VIRAL...</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img className="imagen-carrusel" src={fondo6} alt="slide1" />
            <Carousel.Caption className="texto-carrusel">
              <h2>GOD OF WAR 3</h2>
              <h5>¿ECHABAS DE MENOS A KRATOS?</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img className="imagen-carrusel" src={fondo8} alt="slide1" />
            <Carousel.Caption className="texto-carrusel">
              <h2>ASSASSINS CREED ODYSSEY</h2>
              <h5>¿PREFIERES ALEXIOS O KASSANDRA?</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img className="imagen-carrusel" src={fondo9} alt="slide1" />
            <Carousel.Caption className="texto-carrusel">
              <h2>ANTHEM</h2>
              <h5>ELIGE ALABARDA Y LANZATE AL VACIO</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img className="imagen-carrusel" src={fondo10} alt="slide1" />
            <Carousel.Caption className="texto-carrusel">
              <h2>RESIDENT EVIL 2: REMAKE</h2>
              <h5>REVIVE RACCOON CITY A UN NIVEL DE DETALLE...</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img className="imagen-carrusel" src={fondo11} alt="slide1" />
            <Carousel.Caption className="texto-carrusel">
              <h2>SPIDERMAN</h2>
              <h5>¿TE ATREVES A SUBIR AL EDIFICIO MAS ALTO DE MANHATTAN?</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default HomeCarousel;
