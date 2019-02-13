import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import { Container, Row, Col } from "react-bootstrap";
import "./HomeLastGames.css";

const url_img = "https://images.igdb.com/igdb/image/upload/";
const size = "t_720p/";
const format = ".jpg";

class HomeLastgames extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/lastgames")
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
    return (
      <Container className="hijo">
        <Row>
          <Col>
            <h4 className="titulo-h4">ULTIMOS JUEGOS PUBLICADOS</h4>
          </Col>
        </Row>
        <Row>
          <div className="ultimos-juegos mx-2">
            {this.state.data.map((e, i) => (
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
                      <p>{e.platforms.map((f, k) => (
                        <span key={k}>{`${f.name} / `}</span>
                      ))}</p>
                      <p>{e.genres.map((g, l) => (
                        <span key={l}>{`${l.name} / `}</span>
                      ))}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    );
  }
}

export default HomeLastgames;
