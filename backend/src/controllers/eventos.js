const eventosModel = require("../models/eventos");

var controller = {
  // CREAR EVENTO
  createEvent: (req, res) => {
    console.log(req.body);
    let evento = new eventosModel();
    let participantes = new Array();
    participantes.push(req.body.creador);

    evento.creador = req.body.creador;
    evento.juego = req.body.juego;
    evento.plataforma = req.body.plataforma;
    evento.f_inicio = req.body.f_inicio;
    evento.f_fin = req.body.f_fin;
    evento.n_jugadores = req.body.n_jugadores;
    evento.puntuacion_min = req.body.puntuacion_min;
    if (req.body.mensaje) {
      evento.mensaje = req.body.mensaje;
    }
    evento.participantes = participantes;
    evento.likes = new Array();
    evento.comentarios = new Array();
    evento.f_creacion = new Date();

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
          f_fin: result.f_fin,
          n_jugadores: result.jugadores,
          participantes: result.participantes,
          puntuacion_min: result.puntuacion_min,
          mensaje: result.mensaje,
          likes: result.likes,
          comentarios: result.comentarios,
          f_creacion: result.f_creacion
        };
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
  addLike: function(req, res) {
    console.log(req.body);
    let userId = req.body._id;
    let update = {
      $push: {
        likes: {
          usuario: req.body.usuario,
          f_like: new Date()
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

  // MOSTRAR TODOS LOS EVENTOS
  getAll: function(req, res) {
    eventosModel.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },

  // MOSTRAR LA INFO DE UN DETERMINADO EVENTO(pasarle el ID)
  getInfo: function(req, res) {
    eventosModel.find({ _id: req.body._id }, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(result);
        //console.log(result)
      }
    });
  }
};

module.exports = controller;
