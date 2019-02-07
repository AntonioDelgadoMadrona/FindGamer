import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";

//import img_perfil from '../../img/foto-perfil1.jpg';

class Header extends Component {
  render() {
    return (
      <header>
        <Container fluid>
          <Row>
            {/* COLUMNA DEL LOGOTIPO  */}
            <Col xs={10} md={2} className="d-flex justify-content-center align-items-center">
              FindGamer
            </Col>
            {/* COLUMNA DE MENU NAVEGACION */}
            <Col md={9} className="d-none d-md-block">
              <Nav className="justify-content-center align-items-center">
                <NavLink href="inicio.html" className="mr-xl-5">Inicio</NavLink>
                <Nav.Link href="comunidad.html" className="mr-xl-5">Comunidad</Nav.Link>
                <NavLink href="juegos.html" className="mr-xl-5">Juegos</NavLink>
                <NavLink href="eventos.html" className="mr-xl-5">Eventos</NavLink>
                <NavLink href="mired.html" className="mr-xl-5">Mi Red</NavLink>
                <NavLink href="/" className="mr-xl-5">Noticias</NavLink>
              </Nav>
            </Col>

            {/* COLUMNA DEL MENU DE NAVEGACION DERECHO */}
            <Col xs={2} md={1} className="d-flex menu align-items-center">
              <NavLink href="/">
                <FontAwesomeIcon icon={faUser} size={"lg"} className=""/>
              </NavLink>

              {/*<NavLink href="#" className="imagen">
                <img src={img_perfil} className="imagen_perfil_header" alt=""></img>
              </NavLink>*/}
      </Col>
          </Row>
        </Container>

        {/* <FormModal /> */}
      </header>
    );
  }
}

export default Header;
