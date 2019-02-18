import React from "react";
import moment from "moment";
import axios from "axios";

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
      isLiked: false,
      userID: "5c6499b7492bf012dc9826ac"
    };
  }

  updateLike = id => {
    console.log(id);
    let username = this.state.username;
    const newIsLiked = !this.state.isLiked; // declaro el que va a ser mi nuevo estado
    // TODO: Actualizar en base de datos
    if (newIsLiked) {
      // como mi nuevo estado es "like", añado mi like a la base de datos
      axios
        .post("http://localhost:3001/timeline/addlike", {
          user: username,
          id_message: id
          // token: localStorage.getItem('token')
        })
        .then(response => {
          // this.state.data.map((comentario, index) => {
          //   if (comentario._id === id) {
          //     this.setState(prevState => ({
          //       ...prevState,
          //       "data[index].likes": prevState.data[index].likes.push({
          //         usuario: username,
          //         f_like: new Date()
          //       })
          //     }));
          //   }
          // });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // como mi nuevo estado es "no like", elimino mi like de la base de datos
      axios
        .post("http://localhost:3001/timeline/deletelike", {
          user: username,
          id_message: id
          // token: localStorage.getItem('token')
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }

    this.setState({ isLiked: newIsLiked }); // CAMBIO LO QUE EL USUARIO VE
  };

  render() {
    console.log(this.props.m.usuario);
    let date = moment
      .utc(this.props.m.f_publicacion)
      .format("DD/MM/YYYY, HH:mm");
    return (
      <Col xs="12" className="mensaje-timeline">
        <Row className="p-2 mensaje-cuerpo">
          <div className=" d-flex justify-content-around">
            <div>
              <img src={foto1} className="float-left imagen-usuario" alt="" />
              <div className="float-right ml-3 usuario-mensaje">
                <Link to={`/user/${this.props.m.usuario._id}`}>
                  <p className="font-weight-bold">
                    {this.props.m.usuario.nombre_usuario}
                  </p>
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
              onClick={() => this.updateLike(this.props.m._id)}
              className={`fa-lg cursor mr-md-3 ${
                this.state.isLiked ? "like" : "text-muted"
              }`}
            />
            <small>
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
