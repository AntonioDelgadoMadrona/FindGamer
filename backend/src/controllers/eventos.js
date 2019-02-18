const eventosModel = require("../models/eventos");
const usuarioModel = require("../models/users");

var controller = {
  // CREAR EVENTO
  createEvent: (req, res) => {
    // console.log(req.body);
    let evento = new eventosModel();
    let participantes = new Array();
    participantes.push(req.body.userId);

    evento.creador = req.body.userId;
    evento.juego = req.body.game;
    evento.plataforma = req.body.platform;
    evento.f_inicio = req.body.start_event;
    evento.h_inicio = req.body.h_start_event;
    evento.f_fin = req.body.end_event;
    evento.h_fin = req.body.h_end_event;
    evento.n_jugadores = req.body.n_gamers;
    evento.puntuacion_min = req.body.rating;
    if (req.body.message) {
      evento.mensaje = req.body.message;
    }
    evento.participantes = participantes;
    evento.comentarios = new Array();
    evento.f_creacion = new Date();

    console.log(evento);
    evento.save((err, result) => {
      if (err) {
        return res.send(err);
      } else {
        let evento = {
          id: result._id,
          creador: result.creador,
          juego: result.juego,
          plataforma: result.plataforma,
          f_inicio: result.f_inicio,
          h_inicio: result.h_inicio,
          f_fin: result.f_fin,
          h_fin: result.h_fin,
          n_jugadores: result.jugadores,
          participantes: result.participantes,
          puntuacion_min: result.puntuacion_min,
          mensaje: result.mensaje,
          comentarios: result.comentarios,
          f_creacion: result.f_creacion
        };
        // console.log(evento)
        return res.status(200).send(evento);
      }
    });
  },

  // COMENTAR EVENTO
  addComment: function(req, res) {
    console.log(req.body);
    let userId = req.body._id;
    let update = {
      $push: {
        comentarios: {
          usuario: req.body.usuario,
          comentario: req.body.comentario,
          f_comentario: new Date()
        }
      }
    };

    eventosModel.findByIdAndUpdate(userId, update, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },

  // LIKES EVENTO
  addGamer: function(req, res) {
    console.log(req.body.params);
    let update = {
      $push: {
        participantes: req.body.params.userID
      }
    };

    eventosModel.findByIdAndUpdate(
      req.body.params.eventID,
      update,
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          console.log(result);
          res.status(200).send(result);
        }
      }
    );
  },

  // MOSTRAR TODOS LOS EVENTOS
  getAll: function(req, res) {
    eventosModel.find({}, (err, result) => {
      usuarioModel.populate(result, { path: "creador" }, (err, result) => {
        if (err) {
          res.send(err);
        } else {
          // console.log(result)
          res.status(200).send(result);
        }
      });
    });
  },

  // MOSTRAR LA INFO DE UN DETERMINADO EVENTO(pasarle el ID)
  getInfo: function(req, res) {
    // console.log(req.query)
    eventosModel.find({ _id: req.query.eventID }, (err, result) => {
      usuarioModel.populate(
        result,
        { path: "participantes" },
        (err, result) => {
          usuarioModel.populate(result, { path: "creador" }, (err, result) => {
            if (err) {
              res.send(err);
            } else {
              // console.log(result);
              res.status(200).send(result);
            }
          });
        }
      );
    });
  }
};

module.exports = controller;
