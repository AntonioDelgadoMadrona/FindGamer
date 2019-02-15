import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import "./HomeExpectedGames.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const url_img = "https://images.igdb.com/igdb/image/upload/";
const size = "t_720p/";
const format = ".jpg";

class HomeExpectedGames extends Component {
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
      .get("http://localhost:3001/hypegames")
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
      if(e.platforms !== "undefined"){
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
                  <Link to={`/games/${e.id}`} className="enlace-juego">
                    <img
                      src={`${url_img}${size}${e.cover.image_id}${format}`}
                      className="imagen-ultimos-juegos"
                      alt={e.name}
                    />
                    <div className="texto-juego">
                      <p>{e.name}</p>
                      <p>
                        {e.platforms.map((f, k) => (
                          <span key={k}>{`${f.name} / `}</span>
                        ))}
                      </p>
                      <p>
                        {/* {e.genres.map((g, l) => (
                          <span key={l}>{`${l.name} / `}</span>
                        ))} */}
                      </p>
                    </div>
                  </Link>
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
                  <Link to={`/games/${e.id}`} className="enlace-juego">
                    <img
                      src={`${url_img}${size}${e.cover.image_id}${format}`}
                      className="w-100 imagen-ultimos-juegos"
                      alt={e.name}
                    />
                    <div className="texto-juego">
                      <p>{e.name}</p>
                      {/* <p>
                        {e.platforms.map((f, k) => (
                          <span key={k}>{`${f.name} / `}</span>
                        ))}
                      </p> */}
                      <p>
                        {/* {e.genres.map((g, l) => (
                          <span key={l}>{`${l.name} / `}</span>
                        ))} */}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
          );
        }
      }
      
    });

    return (
      <Container className="hijo py-0">
        <Row>
          <Col>
            <h4 className="titulo-h4">LOS TITULOS MAS ESPERADOS</h4>
          </Col>
        </Row>
        <Carousel
          className="carrusel"
          indicators={null}
          fade={true}
          activeIndex={index}
          direction={direction}
          interval={7000}
          onSelect={this.handleSelect}
        >
          {items}
        </Carousel>
      </Container>
    );
  }
}

export default HomeExpectedGames;
