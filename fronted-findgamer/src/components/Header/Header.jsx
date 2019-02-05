import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faGamepad, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="row">
            {/* COLUMNA DEL LOGOTIPO  */}
            <div className="col-10 col-md-2 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faCloud} />
              <FontAwesomeIcon icon={faGamepad} />
            </div>
            {/* COLUMNA DE MENU NAVEGACION */}
            <div className="d-none d-md-block col-md-9">
              <nav className="nav justify-content-center align-items-center">
                <a href="inicio.html" className="nav-link mr-lg-3">
                  Inicio
                </a>
                <a href="comunidad.html" className="nav-link mr-lg-3">
                  Comunidad
                </a>
                <a href="juegos.html" className="nav-link mr-lg-3">
                  Juegos
                </a>
                <a href="eventos.html" className="nav-link mr-lg-3">
                  Eventos
                </a>
                <a href="mired.html" className="nav-link mr-lg-3">
                  Mi Red
                </a>
                <a href="7" className="nav-link ">
                  Noticias
                </a>
              </nav>
            </div>

            {/* COLUMNA DEL MENU DE NAVEGACION DERECHO */}
            <div className="col-2 col-md-1 d-flex menu align-items-center">
              <a href="/">
                <FontAwesomeIcon
                  icon={faUser}
                  size={"2x"}
                  className="mr-2 mr-md-0"
                />
              </a>
              {/* <a href="#" className="imagen"><img src="http://lorempixel.com/80/80" className="img-fluid w-100" width="40" height="40" alt=""></a> */}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
