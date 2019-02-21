import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import "./HomeLastUsers.css";

import foto1 from "../../img/foto-perfil1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class HomeLastUsers extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/user/getall")
      .then(response => {
        // console.log(response.data);
        this.setState({
          data: response.data.reverse()
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // Calculo la media de valoraciones
    let suma = 0;
    let media = 0;
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

      let register_date = moment.utc(e.fecha_registro).format("DD/MM/YYYY");
      return (
        <div className="p-0 mr-1 ultimo-jugador" key={i}>
          <div className="enlace-jugador">
            <div className=" cuerpo-jugador">
              <Row className="justify-content-center">
                <img
                  src={`http://localhost:3001/users/${e.imagen_perfil}`}
                  className="imagen-usuario my-1"
                  alt=""
                />
              </Row>
              <Row className="texto-jugador">
                <Col xs={12}>
                  <Link to={`/user/${e._id}`}>
                    <p className="text-white">{e.nombre_usuario}</p>
                  </Link>
                  <p className="verde">{starsRender}</p>
                  <p className="text-muted">{register_date}</p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      );
    });

    return (
      <Container className="hijo">
        <Row>
          <Col>
            <h4 className="titulo-h4">NUEVOS USUARIOS</h4>
          </Col>
        </Row>
        <Row>
          <div className="ultimos-jugadores mx-3">{jugadores}</div>
        </Row>
      </Container>
    );
  }
}

export default HomeLastUsers;
