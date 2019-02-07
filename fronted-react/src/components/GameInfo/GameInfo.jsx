import React, { Component } from 'react';

import { ProgressBar } from 'react-bootstrap';
import './GameInfo.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faClock, faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";

import imagen from '../../img/fondo-7.jpg';
import fondo from '../../img/fondo-10.jpg';


class GameInfo extends Component {
    render(){
        return(

            <div class="container hijo pt-0">
            <div class="row">
                <img src={fondo} class="imagen-juego-cabecera" alt=""></img>
            </div>
            <div class="row cuerpo-juego-portada">
                <div class="col-12 col-lg-3">
                    <img src={imagen} class="imagen-juego-portada" alt=""></img>
                    <div class="d-flex justify-content-around mt-5">
                        <FontAwesomeIcon icon={faClock} className="fa-2x enlace"></FontAwesomeIcon>
                        <p><FontAwesomeIcon icon={faGamepad} className="fa-2x enlace"></FontAwesomeIcon></p>
                        <p><FontAwesomeIcon icon={faCheckCircle} className="fa-2x enlace"></FontAwesomeIcon></p>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <h3>Red Dead Redemption 2</h3>
                    <h4>Cd Project Red</h4>
                    <h5>Publicado: 16/05/2015</h5>
                    <br/>
                    <p>Genero: <span>RPG, Aventura</span></p>
                    <p>Plataformas: PC/Xbox One/PS4</p>
                    <p>Descripcion:</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum esse fugit laboriosam tenetur voluptas, atque aut, cumque adipisci dolore nam numquam et, voluptatem ut incidunt repellendus corporis dolorum asperiores quo! Itaque nisi rerum nesciunt ratione, architecto assumenda sint soluta similique odio eligendi officia commodi libero, esse. Tempore quod rerum quam!</p>
                </div>
                <div class="col-12 col-lg-3">
                    <h4>Puntuacion:</h4>
                    <ProgressBar variant="success" now="95" label={`${95}/100`} />
                    <h4>Tu valoracion:</h4>
                    <ProgressBar variant="success" now="95" label={`${95}/100`} />
                    <br/>
                    <p>Valora este juego:</p>
                    <p><FontAwesomeIcon icon={faStar} className="fa-lg"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fa-lg"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fa-lg"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fa-lg"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fa-lg"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fa-lg"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fa-lg"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fa-lg"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fa-lg"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fa-lg"></FontAwesomeIcon></p>
                </div>
            </div>
        </div>

        )
    }
};

export default GameInfo;