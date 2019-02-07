import React, { Component } from 'react';

import { Container, Row } from 'react-bootstrap';

import foto1 from '../../img/foto-perfil2.jpg';

import './ActiveUsers.css';

class ActiveUsers extends Component {
    render(){
        return(
              <div class="col-lg-4 col-xl-3 d-none d-lg-block">
                    <div class="row">
                        <div class="col">
                            <h4 class="titulo-h4">JUGADORES MAS ACTIVOS</h4>
                        </div>
                    </div>
                    <div id="lista-vertical-timeline">
                        <div class="row pb-3 jugador-recomendacion">
                            <div class="d-flex justify-content-around">
                                <div>
                                    <img src={foto1} class="float-left img-fluid rounded-circle imagen-usuario" alt=""></img>
                                    <div class="float-right ml-3">
                                       <a href="/">
                                        <p><strong class="text-white">Nombre de Jugador</strong></p>
                                        </a>
                                        <p><span class="verde">Puntuacion</span></p>
                                        <p class="text-muted">Fecha de registro</p>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        <div class="row pb-3 jugador-recomendacion">
                            <div class="d-flex justify-content-around">
                                <div>
                                    <img src={foto1} class="float-left img-fluid rounded-circle imagen-usuario" alt=""></img>
                                    <div class="float-right ml-3">
                                       <a href="/">
                                        <p><strong class="text-white">Nombre de Jugador</strong></p>
                                        </a>
                                        <p><span class="verde">Puntuacion</span></p>
                                        <p class="text-muted">Fecha de registro</p>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        <div class="row pb-3 jugador-recomendacion">
                            <div class="d-flex justify-content-around">
                                <div>
                                    <img src={foto1} class="float-left img-fluid rounded-circle imagen-usuario" alt=""></img>
                                    <div class="float-right ml-3">
                                       <a href="/">
                                        <p><strong class="text-white">Nombre de Jugador</strong></p>
                                        </a>
                                        <p><span class="verde">Puntuacion</span></p>
                                        <p class="text-muted">Fecha de registro</p>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        <div class="row pb-3 jugador-recomendacion">
                            <div class="d-flex justify-content-around">
                                <div>
                                    <img src={foto1} class="float-left img-fluid rounded-circle imagen-usuario" alt=""></img>
                                    <div class="float-right ml-3">
                                       <a href="/">
                                        <p><strong class="text-white">Nombre de Jugador</strong></p>
                                        </a>
                                        <p><span class="verde">Puntuacion</span></p>
                                        <p class="text-muted">Fecha de registro</p>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        <div class="row pb-3 jugador-recomendacion">
                            <div class="d-flex justify-content-around">
                                <div>
                                    <img src={foto1} class="float-left img-fluid rounded-circle imagen-usuario" alt=""></img>
                                    <div class="float-right ml-3">
                                       <a href="/">
                                        <p><strong class="text-white">Nombre de Jugador</strong></p>
                                        </a>
                                        <p><span class="verde">Puntuacion</span></p>
                                        <p class="text-muted">Fecha de registro</p>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        <div class="row pb-3 jugador-recomendacion">
                            <div class="d-flex justify-content-around">
                                <div>
                                    <img src={foto1} class="float-left img-fluid rounded-circle imagen-usuario" alt=""></img>
                                    <div class="float-right ml-3">
                                       <a href="/">
                                        <p><strong class="text-white">Nombre de Jugador</strong></p>
                                        </a>
                                        <p><span class="verde">Puntuacion</span></p>
                                        <p class="text-muted">Fecha de registro</p>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        <div class="row pb-3 jugador-recomendacion">
                            <div class="d-flex justify-content-around">
                                <div>
                                    <img src={foto1} class="float-left img-fluid rounded-circle imagen-usuario" alt=""></img>
                                    <div class="float-right ml-3">
                                       <a href="/">
                                        <p><strong class="text-white">Nombre de Jugador</strong></p>
                                        </a>
                                        <p><span class="verde">Puntuacion</span></p>
                                        <p class="text-muted">Fecha de registro</p>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
};

export default ActiveUsers;