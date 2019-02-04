const timelineModel = require("../models/timeline");


var controller = {
    // CREAR UN MENSAJE
  crearMensaje: (req, res) => {
//      console.log(req.body)
    let timeline = new timelineModel();
      
    timeline.usuario = req.body.usuario;
    timeline.mensaje = req.body.mensaje;
    if(req.body.foto){
        timeline.foto = req.body.foto;
    }
    timeline.comentarios = new Array();
    timeline.likes = new Array();
    timeline.f_publicacion = new Date();

    timeline.save((err, result) => {
      if (err) {
        return res.send(err);
      } else {
        let timeline = {
          id: result._id,
          usuario: result.usuario,
          mensaje: result.mensaje,
          foto: result.foto,
          comentarios: result.comentarios,
          likes: result.likes,
          f_publicacion: result.f_publicacion
        };
        return res.status(200).send(timeline);
      }
    });
  },
    
    //COMENTAR MENSAJE
    addComment: function (req, res) {
        let userId = req.body._id;
        let update = {
            $push: {
                comentarios:{
                    usuario: req.body.usuario,
                    comentario: req.body.comentario,
                    f_comentario: new Date()
                } 
                
            }
        }

        timelineModel.findByIdAndUpdate(userId, update, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result)
            }
        })
    },
    
    // LIKES MENSAJE
    addLike: function (req, res) {
        let userId = req.body._id;
        let update = {
            $push: {
                likes:{
                    usuario: req.body.usuario,
                    f_like: new Date()
                } 
                
            }
        }

        timelineModel.findByIdAndUpdate(userId, update, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result)
            }
        })
    },
    
    // MOSTRAR TODOS LOS MENSAJES
    getAll: function (req, res) {
//        console.log(req.headers)
        timelineModel.find({}, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result);
            }

        })
    }, 
    
};

module.exports = controller;
