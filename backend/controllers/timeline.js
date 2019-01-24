const m_timelineModel = require("../models/timeline");


var controller = {
  crearMensaje: (req, res) => {
    let m_timeline = new m_timelineModel();

    m_timeline.remitente = req.body.remitente;
    m_timeline.mensaje = req.body.mensaje;
    m_timeline.foto = req.body.foto;
    m_timeline.comentarios = req.body.comentarios;
    m_timeline.likes = req.body.likes;
    m_timeline.f_publicacion = new Date();

    m_timeline.save((err, result) => {
      if (err) {
        return res.send(err);
      } else {
        let m_timeline = {
          id: result._id,
          remitente: result.remitente,
          mensaje: result.mensaje,
          foto: result.foto,
          comentarios: result.comentarios,
          likes: result.likes,
          f_publicaion: result.f_publicacion
        };
        return res.status(200).send(m_timeline);
      }
    });
  }
};

module.exports = controller;
