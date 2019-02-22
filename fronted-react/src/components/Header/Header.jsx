import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import Modal from "../Modal/Modal";
import HeaderUser from "../HeaderUser/HeaderUser";

import "./Header.css";
import { Container, Row, Col, Nav } from "react-bootstrap";

import logo from "../../img/findgamer2.png";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      data: null
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3001/user/getmyuser", {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          // console.log(response.data);
          this.setState({ data: response.data });
        })
        .catch(err => {
          console.log(err);
        });

      this.setState({
        token: token
      });
    }
  }

  componentWillUpdate() {
    let oldToken = this.state.token;
    let token = localStorage.getItem("token");
    if (oldToken !== token) {
      if (token) {
        axios
          .get("http://localhost:3001/user/getmyuser", {
            headers: {
              Authorization: "Bearer " + token
            }
          })
          .then(response => {
            // console.log(response.data);
            this.setState({ data: response.data });
          })
          .catch(err => {
            console.log(err);
          });
      }

      this.setState({
        token: token
      });
    }
  }

  render() {
    let modal = <Modal />;
    let myProfile = null;
    if (this.state.token && this.state.data) {
      modal = <HeaderUser infoUser={this.state.data} />;
      myProfile = (
        <Link to={`/user/${this.state.data._id}`} className="route">
          Mi Perfil
        </Link>
      );
    }

   
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
                  {myProfile}
                  {/* <Link to="/home" className="route">
                  Admin (proximamente)
                </Link> */}
                </Nav>
              </Col>

              {/* COLUMNA DEL MENU DE NAVEGACION DERECHO */}
              <Col
                xs={2}
                md={1}
                className="d-flex menu offset-1 align-items-center"
              >
                {modal}
              </Col>
            </Row>
          </Container>
        </header>
      );
  }
}

export default Header;
