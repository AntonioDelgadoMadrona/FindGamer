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
        console.log(response.data);
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
            rating = rating.substring(0, 2);

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
                      {e.platforms.map((f, j) => {
                        if (f.name == "PC (Microsoft Windows)") {
                          f.name = f.name.replace(
                            "PC (Microsoft Windows)",
                            "PC"
                          );
                        }
                        if (f.name == "PlayStation 4") {
                          f.name = f.name.replace("PlayStation 4", " - PS4");
                        }
                        if (f.name == "Xbox One") {
                          f.name = f.name.replace("Xbox One", " - XboxOne");
                        }
                        if (f.name == "Nintendo Switch") {
                          f.name = f.name.replace(
                            "Nintendo Switch",
                            " - Switch "
                          );
                        }
                        if (f.name == "Linux") {
                          f.name = f.name.replace("Linux", "");
                        }
                        if (f.name == "Mac") {
                          f.name = f.name.replace("Mac", "");
                        }
                        if (f.name == "SteamOS") {
                          f.name = f.name.replace("SteamOS", "");
                        }
                        if (f.name == "PlayStation 3") {
                          f.name = f.name.replace("PlayStation 3", "PS3");
                        }
                        return <span className="celeste" key={j} >{f.name}</span>;
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
