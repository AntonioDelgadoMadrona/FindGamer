const timelineModel = require("../models/timeline");


var controller = {
    // CREAR UN MENSAJE
  createMessage: (req, res) => {
     console.log(req.body)
    let timeline = new timelineModel();
      
    timeline.usuario = req.body.username;
    timeline.mensaje = req.body.message;
    if(req.body.foto){
        timeline.foto = req.body.image;
    }
    timeline.comentarios = new Array();
    timeline.likes = new Array();
    timeline.f_publicacion = new Date();

    timeline.save((err, result) => {
      if (err) {
        return res.send(err);
      } else {
        let timeline = [{
          id: result._id,
          usuario: result.usuario,
          mensaje: result.mensaje,
          foto: result.foto,
          comentarios: result.comentarios,
          likes: result.likes,
          f_publicacion: result.f_publicacion
        }];
        return res.status(200).send(timeline);
      }
    });
  },
    
    //COMENTAR MENSAJE
    addComment: function (req, res) {
        let userId = req.body.id;
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
        console.log(req.body)
        let userId = req.body.id_message;
        let update = {
            $push: {
                likes:{
                    usuario: req.body.user,
                    f_like: new Date()
                } 
                
            }
        }
        timelineModel.findByIdAndUpdate(req.body.id_message, update, (err, result) => {
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
