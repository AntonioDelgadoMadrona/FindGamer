import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Col, Row } from "react-bootstrap";

import "./RecoGames.css";

const url_img = "https://images.igdb.com/igdb/image/upload/";
const size = "t_thumb/";
const format = ".jpg";

class RecoGames extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/popularitygames")
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
            <h4 className="titulo-h4">TOP 10 MAS POPULARES</h4>
          </Col>
        </Row>
        <div id="lista-vertical">
          {this.state.data.map((e, i) => (
            <Row className="juego-recomendacion" key={i}>
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
                        f.name = f.name.replace("Nintendo Switch", " - Switch ");
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
                      return <span className="celeste">{f.name}</span>;
                    })}
                  </p>
                  <p className="text-muted">
                    {e.involved_companies[0].company.name}
                  </p>
                </div>
              </div>
            </Row>
          ))}
        </div>
      </Col>
    );
  }
}

export default RecoGames;
