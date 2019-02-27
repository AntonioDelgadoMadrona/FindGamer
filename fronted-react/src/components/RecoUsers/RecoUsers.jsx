import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./RecoUsers.css";

let token = localStorage.getItem("token");

class RecoUsers extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      user: {}
    };
  }

  componentDidMount() {
    if (token) {
      axios
        .get("http://localhost:3001/user/getmyuser", {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response2 => {
          // console.log(response.data);
          this.setState({ user: response2.data });
        })
        .catch(err => {
          console.log(err);
        });
    }
    axios
      .get("http://localhost:3001/user/getreco")
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    // Calculo la media de valoraciones
    let suma = 0;
    let media = 0;
    var plataforma_favorita = "RECOMENDADOS";
    const jugadores = this.state.data.map((e, i) => {
      suma = 0;
      media = 0;
      e.puntuacion.map((l, i) => {
        return (suma = suma + l);
      });
      media = suma / e.puntuacion.length;

      // Creo un array donde meto cada estrella en funcion de la media
      let starsRender = [];
      for (let i = 0; i < 5; i++) {
        starsRender.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className={`text-${i < media ? "warning" : "muted"} `}
          />
        );
      }
      
      if (this.state.user) {
        if (e.plataforma_fav === this.state.user.plataforma_fav) {
          plataforma_favorita =
          "DE " + this.state.user.plataforma_fav.toUpperCase();
          return (
            <Row className="pb-3 jugador-recomendacion" key={i}>
              <div className="d-flex justify-content-around">
                <img
                  src={`http://localhost:3001/users/${e.imagen_perfil}`}
                  className="float-left img-fluid rounded-circle imagen-usuario"
                  alt=""
                />
                <div className="float-right ml-3">
                  <p>
                    <Link to={`/user/${e._id}`}>
                      <strong className="text-white">{e.nombre_usuario}</strong>
                    </Link>
                  </p>
                  <p>
                    <span className="verde">{starsRender}</span>
                  </p>
                  <p className="text-muted">{e.plataforma_fav}</p>
                </div>
              </div>
            </Row>
          );
        }
      } else {
        return (
          <Row className="pb-3 jugador-recomendacion" key={i}>
            <div className="d-flex justify-content-around">
              <img
                src={`http://localhost:3001/users/${e.imagen_perfil}`}
                className="float-left img-fluid rounded-circle imagen-usuario"
                alt=""
              />
              <div className="float-right ml-3">
                <p>
                  <Link to={`/user/${e._id}`}>
                    <strong className="text-white">{e.nombre_usuario}</strong>
                  </Link>
                </p>
                <p>
                  <span className="verde">{starsRender}</span>
                </p>
                <p className="text-muted">{e.plataforma_fav}</p>
              </div>
            </div>
          </Row>
        );
      }
    });

    return (
      <Col xs={12} lg={4}>
        <Row>
          <Col>
            <h4 className="titulo-h4">JUGADORES {plataforma_favorita}</h4>
          </Col>
        </Row>
        <div id="lista-vertical">{jugadores}</div>
      </Col>
    );
  }
}

export default RecoUsers;
