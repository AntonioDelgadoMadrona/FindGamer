import React, { Component } from "react";
import { Link } from "react-router-dom";

import Modal from "../Modal/Modal";

import "./Header.css";
import { Container, Row, Col, Nav } from "react-bootstrap";

import logo from "../../img/findgamer2.png";
//import img_perfil from '../../img/foto-perfil1.jpg';

class Header extends Component {
  render() {
    return (
      <header>
        <Container fluid>
          <Row>
            {/* COLUMNA DEL LOGOTIPO  */}
            <Col
              xs={10}
              md={2}
              className="d-flex justify-content-center align-items-center"
            >
              <Link to="/home">
                <img src={logo} alt="" />
              </Link>
            </Col>
            {/* COLUMNA DE MENU NAVEGACION */}
            <Col md={7} className="d-none d-md-block offset-1">
              <Nav className="justify-content-around align-items-end">
                <Link to="/home" className="route">
                  Inicio
                </Link>
                <Link to="/community" className="route">
                  Comunidad
                </Link>
                <Link to="/games" className="route">
                  Juegos
                </Link>
                <Link to="/events" className="route">
                  Eventos
                </Link>
                <Link to="/user" className="route">
                  Mi Perfil
                </Link>
                <Link to="/home" className="route">
                  Administrador
                </Link>
              </Nav>
            </Col>

            {/* COLUMNA DEL MENU DE NAVEGACION DERECHO */}
            <Col
              xs={2}
              md={1}
              className="d-flex menu offset-1 align-items-center"
            >
              <Modal />
              {/*<NavLink href="#" className="imagen">
                <img src={img_perfil} className="imagen_perfil_header" alt=""></img>
              </NavLink>*/}
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
