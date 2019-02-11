import React, { Component } from "react";
import axios from 'axios';

import "./HomeExpectedGames.css";
import { Container, Row, Col } from "react-bootstrap";

import juego1 from "../../img/ultimo1.jpg";
import juego2 from "../../img/ultimo2.jpg";
import juego3 from "../../img/ultimo3.jpg";
import Axios from "axios";

class HomeExpectedGames extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  };

  componentDidMount(){
    axios.get("http://localhost:3001/hypegames").then(response => {
      console.log(response.data)
      this.setState({
        data: response.data
      })
    }).catch(error => {
      console.log(error)
    })
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
          {/* {this.state.data.map((e, i) => (

          ))} */}
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego1}
                    className="imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego2}
                    className="imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego3}
                    className="imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego1}
                    className=" imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego2}
                    className=" imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego3}
                    className="imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego1}
                    className="imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-0 mr-1 ultimo-juego">
              <div className="card-body cuerpo-juego w-100 p-1">
                <a href="/" className="enlace-juego">
                  <img
                    src={juego2}
                    className="imagen-ultimos-juegos"
                    alt=""
                  />
                  <div className="texto-juego">
                    <p>Nombre del juego</p>
                    <p>Plataformas</p>
                    <p>Fecha publicacion</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default HomeExpectedGames;
