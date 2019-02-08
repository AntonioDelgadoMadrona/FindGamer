import React, { Component } from "react";
import axios from "axios";

import { ProgressBar, Container, Row, Col } from "react-bootstrap";
import "./GameInfo.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faClock,
  faCheckCircle,
  faStar
} from "@fortawesome/free-solid-svg-icons";

import imagen from "../../img/fondo-7.jpg";
import fondo from "../../img/fondo-10.jpg";


class GameInfo extends Component {
  componentDidMount() {
    axios({
      url: "https://api-v3.igdb.com/games",
      method: 'POST',
      headers: {
          'accept': 'application/json',
          'user-key': "f0f1952d6e1bfdcea5a1bdd0785d2a85"
      },
      data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
    })
      .then(response => {
          console.log(response.data);
      })
      .catch(err => {
          console.error(err);
      });
  }

  render() {
    return (
      <Container className="hijo pt-0">
        <Row>
          <img src={fondo} className="imagen-juego-cabecera" alt="" />
        </Row>
        <Row className="cuerpo-juego-portada">
          <Col xs={12} lg={3}>
            <img src={imagen} className="imagen-juego-portada" alt="" />
            <div className="d-flex justify-content-around mt-5">
              <FontAwesomeIcon icon={faClock} className="fa-2x enlace" />
              <p>
                <FontAwesomeIcon icon={faGamepad} className="fa-2x enlace" />
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="fa-2x enlace"
                />
              </p>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <h3>Red Dead Redemption 2</h3>
            <h4>Cd Project Red</h4>
            <h5>Publicado: 16/05/2015</h5>
            <br />
            <p>
              Genero: <span>RPG, Aventura</span>
            </p>
            <p>Plataformas: PC/Xbox One/PS4</p>
            <p>Descripcion:</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum esse fugit laboriosam tenetur voluptas, atque aut,
              cumque adipisci dolore nam numquam et, voluptatem ut incidunt
              repellendus corporis dolorum asperiores quo! Itaque nisi rerum
              nesciunt ratione, architecto assumenda sint soluta similique odio
              eligendi officia commodi libero, esse. Tempore quod rerum quam!
            </p>
          </Col>
          <Col xs={12} lg={3}>
            <h4>Puntuacion:</h4>
            <ProgressBar variant="success" now="95" label={`${95}/100`} />
            <h4>Tu valoracion:</h4>
            <ProgressBar variant="success" now="95" label={`${95}/100`} />
            <br />
            <p>Valora este juego:</p>
            <p>
              <FontAwesomeIcon icon={faStar} className="fa-lg" />
              <FontAwesomeIcon icon={faStar} className="fa-lg" />
              <FontAwesomeIcon icon={faStar} className="fa-lg" />
              <FontAwesomeIcon icon={faStar} className="fa-lg" />
              <FontAwesomeIcon icon={faStar} className="fa-lg" />
              <FontAwesomeIcon icon={faStar} className="fa-lg" />
              <FontAwesomeIcon icon={faStar} className="fa-lg" />
              <FontAwesomeIcon icon={faStar} className="fa-lg" />
              <FontAwesomeIcon icon={faStar} className="fa-lg" />
              <FontAwesomeIcon icon={faStar} className="fa-lg" />
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GameInfo;
