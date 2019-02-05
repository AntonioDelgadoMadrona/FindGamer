import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faGamepad, faUser } from "@fortawesome/free-solid-svg-icons";

// import "./Header.css";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">FindGamer</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Comunidad</Nav.Link>
          <Nav.Link href="#pricing">Juegos</Nav.Link>
          <Nav.Link href="#pricing">Eventos</Nav.Link>
          <Nav.Link href="#pricing">Mi Red</Nav.Link>
          <Nav.Link href="#pricing">Noticias</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/">
            <FontAwesomeIcon icon={faUser} size={"2x"} />
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
