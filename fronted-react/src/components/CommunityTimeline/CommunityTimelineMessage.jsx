import React from "react";
import moment from "moment";

import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import Comment from "../Comment/Comment";

import foto1 from "../../img/foto-perfil3.jpg";

class CommunityTimelineMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLiked: false
    };
  }

  updateLike = () => {
    const newIsLiked = !this.state.isLiked; // declaro el que va a ser mi nuevo estado
    // TODO: Actualizar en base de datos
    if (newIsLiked) {
      // como mi nuevo estado es "like", añado mi like a la base de datos
    } else {
      // como mi nuevo estado es "no like", elimino mi like de la base de datos
    }

    this.setState({ isLiked: newIsLiked }); // CAMBIO LO QUE EL USUARIO VE
  };

  render() {
    let date = moment
      .utc(this.props.m.f_publicacion)
      .format("DD/MM/YYYY, h:mm");
    return (
      <Col xs="12" className="mensaje-timeline">
        <Row className="p-2 mensaje-cuerpo">
          <div className=" d-flex justify-content-around">
            <div>
              <img src={foto1} className="float-left imagen-usuario" alt="" />
              <div className="float-right ml-3 usuario-mensaje">
                <Link to={`/user/${"hola"}`}>
                  <p className="font-weight-bold">{this.props.m.usuario}</p>
                </Link>
                <p className="text-muted">{date}h</p>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <Col>
            <div className="texto-mensaje" id="mensaje-comunidad">
              <p>{this.props.m.mensaje}</p>
            </div>
          </Col>
        </Row>
        <Row className="text-right">
          <Col>
            <FontAwesomeIcon
              icon={faThumbsUp}
              onClick={this.updateLike}
              className={`fa-lg cursor like mr-md-3 ${
                this.state.isLiked ? "text-info" : ""
              }`}
            />
            <small className="text-muted">
              {this.props.m.likes.length + (this.state.isLiked ? 1 : 0)} likes
            </small>
          </Col>
        </Row>
        <Comment />
      </Col>
    );
  }
}

export default CommunityTimelineMessage;
