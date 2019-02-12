import React, { Component } from "react";
import axios from "axios";

import "./HomeExpectedGames.css";
import { Container, Row, Col } from "react-bootstrap";

const url_img = "https://images.igdb.com/igdb/image/upload/";
const size = "t_720p/";
const format = ".jpg";

class HomeExpectedGames extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
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
    return (
      <Container className="hijo">
        <Row>
          <Col>
            <h4 className="titulo-h4">LOS TITULOS MAS ESPERADOS</h4>
          </Col>
        </Row>
        <Row>
          <div className="ultimos-juegos mx-2">
            {this.state.data.map((e, i) => (
              <div className="p-0 mr-1 ultimo-juego" key={i}>
                <div className="card-body cuerpo-juego w-100 p-1">
                  <a href="/" className="enlace-juego">
                    <img
                      src={`${url_img}${size}${e.cover.image_id}${format}`}
                      className="imagen-ultimos-juegos"
                      alt=""
                    />
                    <div className="texto-juego">
                      <p>{e.name}</p>
                      {/* <p>
                        {e.platforms.map((m, j) => (
                          <span className="celeste" key={j}>
                            {`${m.name} `}
                          </span>
                        ))}
                      </p> */}
                      <p>Fecha publicacion</p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    );
  }
}

export default HomeExpectedGames;
