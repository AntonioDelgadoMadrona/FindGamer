const service = require("../takens");
const jwt = require('jwt-simple');
const config = require('../config.taken');

const timelineModel = require("../models/timeline");
const usuarioModel = require("../models/users");

var controller = {
  // CREAR UN MENSAJE
  createMessage: (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.decode(token, config.TOKEN_SECRET);
    let userID = payload.sub;
    // console.log(req.body);
    let timeline = new timelineModel();

    timeline.usuario = userID;
    timeline.mensaje = req.body.message;
    if (req.body.foto) {
      timeline.foto = req.body.image;
    }
    timeline.comentarios = new Array();
    timeline.likes = new Array();
    timeline.f_publicacion = new Date();

    timeline.save((err, result) => {
      if (err) {
        return res.send(err);
      } else {
        let timeline = [
          {
            id: result._id,
            usuario: result.usuario,
            mensaje: result.mensaje,
            foto: result.foto,
            comentarios: result.comentarios,
            likes: result.likes,
            f_publicacion: result.f_publicacion
          }
        ];
        console.log(result);
        return res.status(200).send(timeline);
      }
    });
  },

  //COMENTAR MENSAJE
  addComment: function(req, res) {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.decode(token, config.TOKEN_SECRET);
    let userID = payload.sub;
    let messageID = req.body.messageID;
    let update = {
      $push: {
        comentarios: {
          usuario: userID,
          comentario: req.body.comment,
          f_comentario: new Date()
        }
      }
    };

    timelineModel.findByIdAndUpdate(messageID, update, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },

  // LIKES MENSAJE
  addLike: function(req, res) {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.decode(token, config.TOKEN_SECRET);
    let userID = payload.sub;
    let update = {
      $push: {
        likes: {
          usuario: userID,
          f_like: new Date()
        }
      }
    };
    timelineModel.findByIdAndUpdate(
      req.body.id_message,
      update,
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.status(200).send(result);
        }
      }
    );
  },

  // DELETE LIKE
  deleteLike: function(req, res) {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.decode(token, config.TOKEN_SECRET);
    let userID = payload.sub;
    console.log(req.body);
    let update = {
      $unset: {
        likes: {
          usuario: userID
          // f_like: new Date()
        }
      }
    };
    console.log(update);
    timelineModel.findByIdAndDelete(
      req.body.id_message,
      update,
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.status(200).send(result);
        }
      }
    );
  },

  // MOSTRAR TODOS LOS MENSAJES
  getAll: function(req, res) {
    //   console.log(req.body)
    timelineModel.find({}, (err, result) => {
      usuarioModel.populate(result, { path: "usuario" }, (err, result) => {
        if (err) {
          res.send(err);
        } else {
          // console.log(result);
          res.status(200).send(result);
        }
      });
    });
  }
};

module.exports = controller;
