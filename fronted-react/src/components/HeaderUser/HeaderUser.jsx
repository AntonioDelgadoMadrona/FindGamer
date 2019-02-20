import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { ButtonToolbar, Overlay, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";

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

    this.deleteSession = this.deleteSession.bind(this);
  }

  deleteSession() {
    localStorage.removeItem("token");
    this.setState({
      show: false
    });
    this.props.history.push("/home");
  }

  render() {
    console.log(this.props.infoUser);
    return (
      <ButtonToolbar>
        <img
          src={`http://localhost:3001/users/${
            this.props.infoUser.imagen_perfil
          }`}
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
            <Link
              to={`/user/${this.props.infoUser._id}`}
              onClick={this.handleClick}
            >
              <h5 className="text-dark">Mi Perfil</h5>
            </Link>

            <div onClick={this.deleteSession}>
              <p className="text-danger cursor">Cerrar sesion</p>
            </div>
          </Popover>
        </Overlay>
      </ButtonToolbar>
    );
  }
}

export default withRouter(HeaderUser);
