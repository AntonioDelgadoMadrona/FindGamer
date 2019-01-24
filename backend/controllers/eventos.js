const eventosModel = require("../models/eventos");

var controller = {
  crearEvento: (req, res) => {
    console.log(req.body)
    let evento = new eventosModel();

    evento.creador = req.body.creador;
    evento.juego = req.body.juego;
    evento.plataforma = req.body.plataforma;
    evento.f_inicio = req.body.f_inicio;
    evento.f_fin = req.body.f_fin;
    evento.jugadores = req.body.jugadores;
    evento.participantes = req.body.participantes;
    evento.puntuacion_min = req.body.puntuacion_min;
    evento.mensaje = req.body.mensaje;
    evento.likes = req.body.likes;
    evento.comentarios = req.body.comentarios;
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
          jugadores: result.jugadores,
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
  }
};

module.exports = controller;
