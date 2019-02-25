import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";

import { Link } from "react-router-dom";

// import GamesForm from "../GamesForm/GamesForm";
import imageDefault from '../../img/imagen-no-disponible.png';

import "./GamesList.css";

const url_img = "https://images.igdb.com/igdb/image/upload/";
const small = "t_720p/";
const format = ".jpg";

class GamesList extends Component {
  constructor() {
    super();
    this.state = {
      search: null,
      sort: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this)
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
    // this.props.searchName(this.state.search);
  }

  handleClick() {
    console.log(this.state.sort);
    this.props.searchName(this.state.search)
    this.props.selectSort(this.state.sort);
  }

  handleClick2() {
    console.log(this.state.sort);
    this.props.selectSort(this.state.sort);
  }

  render() {
    // console.log(this.props.listGames)
    return (
      <>
        <Container className="hijo">
          <Row className="text-right">
            <Col xs={12} md={5}>
              <form className="form-group input-group-sm form-inline align-items-center">
                <input
                  type="text"
                  className="form-control mb-1"
                  id="search"
                  placeholder="¿Buscas algun juego?"
                  onChange={this.handleChange}
                />
                <button
                  type="button"
                  onClick={this.handleClick}
                  className="btn btn-sm boton-celeste ml-1"
                >
                  Buscar
                </button>
              </form>
            </Col>
            <Col xs={12} md={4}>
              <form action="" className="input-group">
                <select className="custom-select input-pequeño mb-2" id="sort" onChange={this.handleChange}>
                  <option defaultValue>Ordenar por...</option>
                  <option value="rating desc">Mayor puntuación</option>
                  <option value="rating asc">Menor puntuación</option>
                  <option value="popularity desc">Los mas populares</option>
                  <option value="popularity asc">Los menos populares</option>
                  <option value="first_release_date desc">Los mas recientes</option>
                  <option value="first_release_date asc">Los mas antiguos</option>
                </select>
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn h-75 btn-sm boton-celeste"
                    onClick={this.handleClick2}
                  >
                    Filtrar
                  </button>
                </div>
              </form>
            </Col>
          </Row>
          {/* <GamesForm /> */}
        </Container>
        <Container className="hijo">
          <Row className="justify-content-around fila-lista-juegos">
            {this.props.listGames.map((e, i) => {
              // Convierto en string y me quedo con los dos primeros numeros
              let puntuacion = e.rating;
              let rating = "" + puntuacion;
              rating = rating.substring(0, 2);
              let imagen = imageDefault;
              if(e.cover){
                imagen = `${url_img}${small}${e.cover.image_id}${format}`;
              }

              if (e.platforms && e.release_dates && e.rating) {
                let date = moment
                  .unix(e.release_dates[0].date, "x")
                  .format("DD/MM/YYYY");
                return (
                  <Col
                    xs={12}
                    lg={5}
                    className="m-2 p-2 columna-lista-juegos rounded"
                    key={i}
                  >
                    <Row className="juego-lista" key={i}>
                      <Col xs={3}>
                        <img
                          src={imagen}
                          className="imagen-juego-lista"
                          alt={e.name}
                        />
                      </Col>
                      <Col xs={9}>
                        <p>
                          <Link to={`/games/${e.id}`}>{e.name}</Link>
                        </p>
                        <p className="text-muted">
                          Publicado: <span>{date}</span>
                        </p>
                        <p>
                          Plataformas:{" "}
                          {e.platforms.map((f, j) => {
                            switch (f.name) {
                              case "PC (Microsoft Windows)":
                                f.name = "PC";
                                break;
                              case "PlayStation 4":
                                f.name = " - PS4";
                                break;
                              case "Xbox One":
                                f.name = " - XboxOne";
                                break;
                              case "Nintendo Switch":
                                f.name = " - Switch";
                                break;
                                case "PlayStation 3":
                                f.name = " - PS3";
                                break;
                                case "Xbox 360":
                                f.name = " - X360";
                                break;
                              default:
                                f.name = "";
                            }
                            return (
                              <span className="celeste" key={j}>
                                {f.name}
                              </span>
                            );
                          })}
                        </p>
                        <p>
                          Puntuacion:{" "}
                          <span className="text-warning">{rating}/100</span>
                        </p>
                      </Col>
                    </Row>
                  </Col>
                );
              }
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default GamesList;
