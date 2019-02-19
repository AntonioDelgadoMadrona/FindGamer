import React, { Component } from "react";

import { ButtonToolbar, Overlay, Popover } from "react-bootstrap";
import { Link } from 'react-router-dom';

import img_perfil from "../../img/foto-perfil1.jpg";

class HeaderUser extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = ({ target }) => {
      this.setState(s => ({ target, show: !s.show }));
    };

    this.state = {
      show: false
    };
  }

  render() {
    return (
      <ButtonToolbar>
        <img
          src={img_perfil}
          className="imagen_perfil_header cursor"
          onClick={this.handleClick}
          alt=""
        />
        <Overlay
          show={this.state.show}
          target={this.state.target}
          placement="bottom"
          container={this}
          containerPadding={20}
        >
          <Popover id="popover-contained" title="Hola" placement="top-start">
            <Link to={`/user/${"hola"}`}>
              <h5 className="text-dark">Mi Perfil</h5>
            </Link>

            <div>
              <p className="text-danger cursor">Cerrar sesion</p>
            </div>
          </Popover>
        </Overlay>
      </ButtonToolbar>
    );
  }
}

export default HeaderUser;
