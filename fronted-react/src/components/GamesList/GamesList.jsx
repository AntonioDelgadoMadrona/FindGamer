import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";

import { Link } from 'react-router-dom';

import GamesForm from "../GamesForm/GamesForm";

import "./GamesList.css";



const url_img = "https://images.igdb.com/igdb/image/upload/";
const small = "t_720p/";
const format = ".jpg";

var array = [
  "PC (Microsoft Windows)",
  "PlayStation 4",
  "Mac",
  "Xbox One",
  "Nintendo Switch",
  "Linux"
];

class GamesList extends Component {
  render() {
    // console.log(this.props.listGames);
    // let platformsString = " ";

    // var juegos = this.props.listGames;
    // console.log(juegos)

    // for (let j = 0; j < juegos.length; j++) {
    //   for (let i = 0; i < juegos[j].platforms.length; i++) {
    //     // Intento recorrer el array de juegos para cambiar el nombre de la plataforma

    //     if (juegos[j].platforms[i].name === "PC (Microsoft Windows)") {
    //       juegos[j].platforms[i].name = juegos[j].platforms[i].name.replace("PC (Microsoft Windows)", "PC");
    //       platformsString += juegos[j].platforms[i].name;
    //     }

    // console.log(platformsString)
    // if (platform[i].name === "PlayStation 4") {
    //   platform[i] = platform[i].replace("PlayStation 4", "PS4");
    //   platformsString += platform[i];
    // }
    // if (platform[i].name === "Mac") {
    //   platform[i] = platform[i].replace("Mac", "");
    //   platformsString += platform[i];
    // }
    // if (platform[i].name === "Nintendo Switch") {
    //   platform[i] = platform[i].replace("Nintendo Switch", "Switch");
    //   platformsString += platform[i];
    // }
    // if (platform[i].name === "Linux") {
    //   platform[i] = platform[i].replace("Linux", "");
    //   platformsString += platform[i];
    // }
    //   }
    // }
    // console.log(platformsString);
    // return (platformsString += platform.[i] + " || ");

    // });

    return (
      <>
        <Container className="hijo">
          <Row className="text-right">
            <Col xs={12} md={5}>
              <form
                action=""
                className="form-group input-group-sm form-inline align-items-center"
              >
                <input
                  type="text"
                  className="form-control mb-1"
                  name=""
                  placeholder="¿Buscas algun juego?"
                />
                <button type="submit" className="btn btn-sm boton-celeste ml-1">
                  Buscar
                </button>
              </form>
            </Col>
            <Col xs={12} md={4}>
              <form action="" className="input-group">
                <select
                  className="custom-select input-pequeño mb-2"
                  id="inputGroupSelect04"
                >
                  <option defaultValue>Ordenar por...</option>
                  <option value="1">Mayor puntuación</option>
                  <option value="2">Menor puntuación</option>
                  <option value="3">A - Z</option>
                  <option value="4">Z - A</option>
                  <option value="5">Los mas recientes</option>
                  <option value="6">Los mas antiguos</option>
                </select>
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="btn h-75 btn-sm boton-celeste"
                  >
                    Filtrar
                  </button>
                </div>
              </form>
            </Col>
          </Row>
          <GamesForm />
        </Container>
        <Container className="hijo">
          <Row className="justify-content-around fila-lista-juegos">
            {this.props.listGames.map((e, i) => {
              // Convierto en string y me quedo con los dos primeros numeros
              let puntuacion = e.rating;
              let rating = "" + puntuacion;
              rating = rating.substring(0, 2);

              if (e.cover && e.platforms && e.release_dates && e.rating) {

                let date = moment
                  .unix(e.release_dates[0].date, "x")
                  .format("DD/MM/YYYY");
                return (
                  <Col
                    xs={12}
                    lg={5}
                    className="m-2 p-2 columna-lista-juegos rounded"
                  >
                    <Row className="juego-lista" key={i}>
                      <Col xs={3}>
                        <img
                          src={`${url_img}${small}${e.cover.image_id}${format}`}
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
                          <span className="celeste">{e.platforms[0].name}</span>
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
