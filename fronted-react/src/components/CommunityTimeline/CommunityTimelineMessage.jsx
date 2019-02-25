import React from "react";
import moment from "moment";
import axios from "axios";

import { Row, Col, Modal, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import Comment from "../Comment/Comment";

class CommunityTimelineMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLiked: false,
      show: false,
      message: null
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  deleteMessage = messageID => {
    axios
      .post("http://localhost:3001/timeline/delete", {messageID})
      .then(response => {
        // console.log(response.data);
        this.setState({
          show: false,
          message: messageID
        })
      })
      .catch(error => {
        console.log(error);
      });
  };

  updateLike = id => {
    let token = localStorage.getItem("token");
    const newIsLiked = !this.state.isLiked; // declaro el que va a ser mi nuevo estado
    // TODO: Actualizar en base de datos
    if (newIsLiked) {
      // como mi nuevo estado es "like", añado mi like a la base de datos
      axios
        .post(
          "http://localhost:3001/timeline/addlike",
          {
            id_message: id
          },
          {
            headers: {
              Authorization: "Bearer " + token
            }
          }
        )
        .then(response => {
          // console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // como mi nuevo estado es "no like", elimino mi like de la base de datos
      let token = localStorage.getItem("token");
      axios
        .post(
          "http://localhost:3001/timeline/deletelike",
          {
            id_message: id
          },
          {
            headers: {
              Authorization: "Bearer " + token
            }
          }
        )
        .then(response2 => {
          // console.log(response2);
        })
        .catch(error => {
          console.log(error);
        });
    }

    this.setState({ isLiked: newIsLiked }); // CAMBIO LO QUE EL USUARIO VE
  };

  render() {
    // console.log(this.props)
    // console.log(this.state.isLiked);
    let eliminado = false;
    let mensaje = this.props.m.mensaje
    if(this.props.m._id === this.state.message){
      mensaje = <Alert variant="danger" >Este mensaje ha sido eliminado por un moderador</Alert>
      eliminado = true;
    }
    let date = moment
      .utc(this.props.m.f_publicacion)
      .format("DD/MM/YYYY, HH:mm");
    let estado = "fa-lg cursor mr-md-3 text-muted";
    let comment = null;
    let like = null;
    if (this.props.estadoLike || this.state.isLiked) {
      estado = "fa-lg cursor mr-md-3 like";
    }
    if (this.props.moreInfo && eliminado == false) {
      comment = <Comment messageID={this.props.m._id} />;
      like = (
        <Col>
          <FontAwesomeIcon
            icon={faThumbsUp}
            onClick={() => this.updateLike(this.props.m._id)}
            className={estado}
          />
          <small>
            {this.props.m.likes.length + (this.state.isLiked ? 1 : 0)} likes
          </small>
        </Col>
      );
    }

    let moderador = null;
    if (this.props.moderador) {
      moderador = (
        <Row className="m-0">
          <Col xs={12} className="text-right">
            <button
              type="button"
              className="btn btn-sm btn-warning"
              onClick={this.handleShow}
            >
              <strong>x</strong>
            </button>
          </Col>
        </Row>
      );
    }

    return (
      <Col xs="12" className="mensaje-timeline">
        {moderador}
        <Row className="p-2 mensaje-cuerpo">
          <div className=" d-flex justify-content-around">
            <div>
              <img
                src={`http://localhost:3001/users/${
                  this.props.m.usuario.imagen_perfil
                }`}
                className="float-left imagen-usuario"
                alt=""
              />
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
              <p>{mensaje}</p>
            </div>
          </Col>
        </Row>
        <Row className="text-right">{like}</Row>
        {/* <Row className="text-right">
          {this.props.m.comentarios.map((e, i) => {
            return <Col xs="10" key={i} >{e.comentario}</Col>;
          })}
        </Row> */}
        {comment}
        {/* ALERT MODAL */}

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            ¿Estas seguro que quieres eliminar este mensaje?
          </Modal.Header>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.handleClose}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => this.deleteMessage(this.props.m._id)}
            >
              Eliminar
            </button>
          </Modal.Footer>
        </Modal>
      </Col>
    );
  }
}

export default CommunityTimelineMessage;
