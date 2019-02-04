import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./Smartphone.css";
import { faBars, faHome, faUser, faGamepad, faAddressBook, faClipboardList, faNewspaper } from "@fortawesome/free-solid-svg-icons";

class Smartphone extends Component {
  render() {
    return (
      <div>
        {/* BOTON DE MENU EN DISPOSITIVOS MOVILES */}
        <div className="row d-block d-md-none">
          <div className="col-12 d-flex justify-content-center">
            <button type="button" className="btn btn-block" id="btn-menu">
              <FontAwesomeIcon icon={faBars} className="fas fa-bars fa-2x" />
            </button>
          </div>
        </div>

        {/* MENU NAVEGACION PARTE IZQUIERDA SOLO EN MOVILES */}
        <div id="header-movil">
          <div
            className="d-md-none barra-lateral-izquierda"
            id="barra-lateral-izquierda"
          >
            <nav>
              <a href="/">
                <FontAwesomeIcon icon={faHome} /> Inicio
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faUser} />Comunidad
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faGamepad} />Juegos
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faAddressBook} />Eventos
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faClipboardList} />Mi Red
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faNewspaper} />Noticias
              </a>
            </nav>
          </div>
          {/* <a href="/" className="fondo-enlace d-md-none" id="fondo-enlace" ></a> */}
        </div>
      </div>
    );
  }
}

export default Smartphone;

