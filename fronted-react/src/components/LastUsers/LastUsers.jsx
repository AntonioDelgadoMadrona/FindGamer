import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './LastUsers.css';

import foto1 from '../../img/foto-perfil1.jpg';
import foto2 from '../../img/foto-perfil2.jpg';
import foto3 from '../../img/foto-perfil3.jpg';

class LastUsers extends Component {
    render(){
        return(
            <Container className="hijo">
                <Row>
                    <Col>
                        <h4 className="titulo-h4">NUEVOS USUARIOS</h4>
                    </Col>
                </Row>
                <Row>
                    <div className="ultimos-jugadores mx-3">
                        <div className="p-0 mr-1 ultimo-jugador">
                            <div className="enlace-jugador">
                                <div className=" cuerpo-jugador">
                                    <Row className="justify-content-center">
                                        <img src={foto1} className="imagen-usuario my-1" alt="" />
                                    </Row>
                                    <Row className="texto-jugador">
                                        <Col xs={12}>
                                           <a href="/">
                                               <p className="text-white">Nombre jugador</p>
                                           </a>
                                            <p className="verde">Puntuacion</p>
                                            <p className="text-muted">Fecha registro</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <div className="p-0 mr-1 ultimo-jugador">
                            <div className="enlace-jugador">
                                <div className=" cuerpo-jugador">
                                    <Row className="justify-content-center">
                                        <img src={foto2} className="imagen-usuario my-1" alt="" />
                                    </Row>
                                    <Row className="texto-jugador">
                                        <Col xs={12}>
                                           <a href="/">
                                               <p className="text-white">Nombre jugador</p>
                                           </a>
                                            <p className="verde">Puntuacion</p>
                                            <p className="text-muted">Fecha registro</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <div className="p-0 mr-1 ultimo-jugador">
                            <div className="enlace-jugador">
                                <div className=" cuerpo-jugador">
                                    <Row className="justify-content-center">
                                        <img src={foto3} className="imagen-usuario my-1" alt="" />
                                    </Row>
                                    <Row className="texto-jugador">
                                        <Col xs={12}>
                                           <a href="/">
                                               <p className="text-white">Nombre jugador</p>
                                           </a>
                                            <p className="verde">Puntuacion</p>
                                            <p className="text-muted">Fecha registro</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <div className="p-0 mr-1 ultimo-jugador">
                            <div className="enlace-jugador">
                                <div className=" cuerpo-jugador">
                                    <Row className="justify-content-center">
                                        <img src={foto1} className="imagen-usuario my-1" alt="" />
                                    </Row>
                                    <Row className="texto-jugador">
                                        <Col xs={12}>
                                           <a href="/">
                                               <p className="text-white">Nombre jugador</p>
                                           </a>
                                            <p className="verde">Puntuacion</p>
                                            <p className="text-muted">Fecha registro</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <div className="p-0 mr-1 ultimo-jugador">
                            <div className="enlace-jugador">
                                <div className=" cuerpo-jugador">
                                    <Row className="justify-content-center">
                                        <img src={foto2} className="imagen-usuario my-1" alt="" />
                                    </Row>
                                    <Row className="texto-jugador">
                                        <Col xs={12}>
                                           <a href="/">
                                               <p className="text-white">Nombre jugador</p>
                                           </a>
                                            <p className="verde">Puntuacion</p>
                                            <p className="text-muted">Fecha registro</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <div className="p-0 mr-1 ultimo-jugador">
                            <div className="enlace-jugador">
                                <div className=" cuerpo-jugador">
                                    <Row className="justify-content-center">
                                        <img src={foto3} className="imagen-usuario my-1" alt="" />
                                    </Row>
                                    <Row className="texto-jugador">
                                        <Col xs={12}>
                                           <a href="/">
                                               <p className="text-white">Nombre jugador</p>
                                           </a>
                                            <p className="verde">Puntuacion</p>
                                            <p className="text-muted">Fecha registro</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                       
                  
                    </div>
                </Row>
            </Container>
        )
    }
};

export default LastUsers;