import React, { Component } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
import "./HomeLastUsers.css";

import foto1 from "../../img/foto-perfil1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class HomeLastUsers extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      media: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/user/getall")
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
    let suma = 0;
    let media = 0;
    let estrellas = [];
    const jugadores = this.state.data.map((e, i) => {
      suma = 0;
      media = 0;
      estrellas = [];
      e.puntuacion.map((l, i) => {
        return suma = suma + l;
      })
      media = suma / e.puntuacion.length;
      for(let i = 0; i < media; i++){
        estrellas.push(<FontAwesomeIcon key={i} icon={faStar} className="text-warning"/>)
      }
      return (
        <div className="p-0 mr-1 ultimo-jugador" key={i}>
          <div className="enlace-jugador">
            <div className=" cuerpo-jugador">
              <Row className="justify-content-center">
                <img src={foto1} className="imagen-usuario my-1" alt="" />
              </Row>
              <Row className="texto-jugador">
                <Col xs={12}>
                  <a href="/">
                    <p className="text-white">{e.nombre_usuario}</p>
                  </a>
                  <p className="verde" >{estrellas}</p>
                  <p className="text-muted">{e.fecha_registro}</p>
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
          <div className="ultimos-jugadores mx-3">
            {jugadores}
          </div>
        </Row>
      </Container>
    );
  }
}

export default HomeLastUsers;
