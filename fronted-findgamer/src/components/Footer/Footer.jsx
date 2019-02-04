import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid text-center">
          <div className="row cuerpo-footer">
            <div className="col-12 col-sm-6 col-md-4 mx-auto">
              <ul className="list-unstyled">
                <li>
                  <a href="/">Quienes somos</a>
                </li>
                <li>
                  <a href="/">Trabaja con nosotros</a>
                </li>
                <li>
                  <a href="/">Contacto</a>
                </li>
                <li>
                  <a href="/">Ayuda</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mx-auto">
              <ul className="list-unstyled">
                <li>
                  <a href="/">Politica de privacidad</a>
                </li>
                <li>
                  <a href="/">Condiciones de compra</a>
                </li>
                <li>
                  <a href="/">Politica de cookies</a>
                </li>
                <li>
                  <a href="/">Condiciones de uso</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 mx-auto d-inline d-md-block">
              <ul className="list-unstyled">
                <li>
                  <a href="/">Comunidad</a>
                </li>
                <li>
                  <a href="/">Juegos</a>
                </li>
                <li>
                  <a href="/">Eventos</a>
                </li>
                <li>
                  <a href="/">Noticias</a>
                </li>
              </ul>
            </div>
          </div>
          <span className="linea-footer" />
          <div className="row">
            <div className="col mx-auto redes-sociales">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="/">
                    <FontAwesomeIcon icon={faFacebookSquare} size={"2x"}/>
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <FontAwesomeIcon icon={faInstagram} size={"2x"} />
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <FontAwesomeIcon icon={faTwitter} size={"2x"} />
                    <span>Twitter</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                    <span>Linkedin</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
