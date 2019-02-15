import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Col, Row } from "react-bootstrap";

import "./BestRated.css";

const url_img = "https://images.igdb.com/igdb/image/upload/";
const size = "t_thumb/";
const format = ".jpg";

class BestRated extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
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
    return (
      <Col xs={12} lg={4}>
        <Row>
          <Col>
            <h4 className="titulo-h4">TOP 10 MEJOR VALORADOS</h4>
          </Col>
        </Row>
        <div id="lista-vertical">
          {this.state.data.map((e, i) => {
            // Convierto en string y me quedo con los dos primeros numeros
            let puntuacion = e.rating;
            let rating = "" + puntuacion;
            rating = rating.substring(0, 4);

            return (
              <Row className="pb-3 juego-recomendacion" key={i}>
                <div>
                  <img
                    src={`${url_img}${size}${e.cover.image_id}${format}`}
                    className="float-left imagen-juego-vertical"
                    alt=""
                  />
                  <div className="float-right ml-3">
                    <p>
                      <Link to={`/games/${e.id}`}>
                        <strong className="text-white">{e.name}</strong>
                      </Link>
                    </p>
                    <p>
                      {e.genres.map((f, j) => {
                        switch(f.name) {
                          case "Role-playing (RPG)":
                            f.name = " / RPG";
                            break;
                          case "Adventure":
                            f.name = " / Adventura";
                            break;
                          case "Strategy":
                            f.name = " / Estrategia";
                            break;
                          case "Shooter":
                            f.name = " / Shooter";
                            break;
                            case "Racing":
                            f.name = " / Carreras";
                            break;
                            case "Sport":
                            f.name = " / Deporte";
                            break;
                          default:
                            f.name = "";
                        }
                        return <span className="text-muted" key={j}>{f.name}</span>;
                      })}
                    </p>
                    <p className="text-warning font-weight-bold">
                      {rating} / 100
                    </p>
                  </div>
                </div>
              </Row>
            );
          })}
        </div>
      </Col>
    );
  }
}

export default BestRated;
