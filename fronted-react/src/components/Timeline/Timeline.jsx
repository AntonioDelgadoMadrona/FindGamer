import React, { Component } from 'react';

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";


import FormTimeline from '../FormTimeline/FormTimeline';
import Comment from '../Comment/Comment';

import './Timeline.css';

import foto1 from '../../img/foto-perfil3.jpg';
import imagen1 from '../../img/fondo-1.jpg';

class Timeline extends Component {
    render(){
        return(
              <Col xs={12} lg={8} xl={9}>
                <Row>
                    <Col>
                        <h4 className="titulo-h4">MENSAJES DE LA COMUNIDAD</h4>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                  
                   <FormTimeline />
                   
                    <Container className="timeline">
                        
                         {/* MENSAJE TEXTO */}
                        <Col xs={12} className="mensaje-timeline">
                            <Row className="p-2 mensaje-cuerpo">
                                <div className=" d-flex justify-content-around">
                                    <div>
                                        <img src={foto1} className="float-left imagen-usuario" alt=""></img>
                                        <div className="float-right ml-3 usuario-mensaje">
                                           <a href="">
                                            <p className="font-weight-bold">Nombre de Jugador</p>
                                            </a>
                                            <p className="text-muted">17/12/1960 - 15:45h</p>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="texto-mensaje" id="mensaje-comunidad">
                                        <p>Hola chicos, mi nombre es Roberto y estoy buscanco a compañeros para poder jugar que estoy mas solo que la una macho... asi que por favor contad conmigo para jugar al juego que sea, tengo fortnite, Fortnite, FORTNITE y el fornait ese que esta muy chulo la verdad el mejor de la lista</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="text-right">
                                <Col>
                                    <FontAwesomeIcon icon={faThumbsUp} className="fa-lg cursor like mr-md-3"></FontAwesomeIcon><small className="text-muted">15 likes</small>
                                </Col>
                            </Row>
                            <Comment />
                            
                        </Col>

                        {/* MENSAJE IMAGENES */}
                        <Col xs={12} className="mensaje-timeline">
                            <Row className="p-2 mensaje-cuerpo">
                                <div className=" d-flex justify-content-around">
                                    <div>
                                        <img src={foto1} className="float-left imagen-usuario" alt=""></img>
                                        <div className="float-right ml-3 usuario-mensaje">
                                           <a href="">
                                            <p className="font-weight-bold">Nombre de Jugador</p>
                                            </a>
                                            <p className="text-muted">17/12/1960 - 15:45h</p>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            <Row class="my-1">
                                <Col>
                                    <img src={imagen1} class="imagen-mensaje-timeline rounded" alt=""></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="texto-mensaje" id="mensaje-comunidad">
                                        <p>Hola chicos, mi nombre es Roberto y estoy buscanco a compañeros para poder jugar que estoy mas solo que la una macho... asi que por favor contad conmigo para jugar al juego que sea, tengo fortnite, Fortnite, FORTNITE y el fornait ese que esta muy chulo la verdad el mejor de la lista</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="text-right">
                                <Col>
                                    <FontAwesomeIcon icon={faThumbsUp} className="fa-lg cursor like mr-md-3"></FontAwesomeIcon><small className="text-muted">15 likes</small>
                                </Col>
                            </Row>
                            <Comment />
                            
                        </Col>
                        
                    </Container>
                </Row>
            </Col>
        )
    }
};

export default Timeline;