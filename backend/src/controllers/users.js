const usuariosModel = require("../models/users");

var bcrypt = require("bcrypt-nodejs");

var controller = {
  // REGISTRAR USUARIO
  registerUser: (req, res) => {
    // console.log(req.body)
    usuariosModel.find(
      {
        email: req.body.email
      },
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          if (result == "") {
            let password = req.body.password;
            bcrypt.genSalt(10, function(err, salt) {
              bcrypt.hash(password, salt, null, function(err, hash) {
                password = hash;

                let usuario = new usuariosModel();

                usuario.nombre = req.body.nombre;
                usuario.apellidos = req.body.apellidos;
                usuario.nombre_usuario = req.body.nombre_usuario;
                usuario.plataforma_fav = req.body.plataforma_fav;
                usuario.pais = req.body.pais;
                usuario.ciudad = req.body.ciudad;
                usuario.f_nacimiento = req.body.f_nacimiento;
                usuario.email = req.body.email;
                usuario.password = password;
                usuario.imagen_perfil = "";
                usuario.imagen_portada = "";
                usuario.permiso = "usuario";
                usuario.puntuacion = new Array();
                usuario.amigos = new Array();
                usuario.juego_fav = "";
                usuario.j_completados = new Array();
                usuario.j_proximos = new Array();
                usuario.j_jugando = new Array();
                usuario.fecha_registro = new Date();
                let puntuacion = usuario.puntuacion;
                puntuacion.push(2);

                usuario.save((err, result) => {
                  if (err) {
                    return res.send(err);
                  } else {
                    let usuario = {
                      id: result._id,
                      nombre: result.nombre,
                      apellidos: result.apellidos,
                      nombre_usuario: result.nombre_usuario,
                      plataforma_fav: result.plataforma_fav,
                      pais: result.pais,
                      ciudad: result.ciudad,
                      f_nacimiento: result.f_nacimiento,
                      email: result.email,
                      password: result.password,
                      imagen_perfil: result.imagen_perfil,
                      imagen_portada: result.imagen_portada,
                      permiso: result.permiso,
                      puntuacion: result.puntuacion,
                      amigos: result.amigos,
                      juego_fav: result.juego_fav,
                      j_completados: result.j_completados,
                      j_proximos: result.j_proximos,
                      j_jugando: result.j_jugando,
                      fecha_registro: result.fecha_registro

                      // GUARDAR EN LA SESSION EL USUARIO REGISTRADO Y CARGAR INICIO
                    };
                    console.log(usuario);
                    return res.status(200).send(usuario);
                  }
                });
              });
            });
          } else {
            return res.send("Email ya registrado");
          }
        }
      }
    );
  },

  //INICIAR SESION
  loginUser: (req, res) => {
    usuariosModel.find(
      {
        email: req.body.email
      },
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          if (result == "") {
            return res.send("Email no valido");
          } else {
            bcrypt.compare(req.body.password, result[0].password, function(
              err,
              iguales
            ) {
              if (err) {
                return res.send(err);
              } else {
                if (iguales) {
                  req.session.user = {
                    name: result[0].name,
                    email: result[0].email,
                    permiso: result[0].permiso
                  };
                  return res.send(result);
                } else {
                  return res.send("La contraseña no es correcta");
                }
              }
            });
          }
        }
      }
    );
  },

  // CERRAR SESION
  logoutUser: function(req, res) {
    if (req.session.user) {
      req.session.destroy();
    } else {
      return res.send("No existe un login de usuario");
    }
  },

  // SUBIR IMAGEN PERFIL
  addImageUser: function(req, res) {
    console.log(req.file);
    res.send(req);
    //        let userId = req.body._id;
    //
    //        let update = {
    //            imagen_perfil: req.body.img
    //        }
    //
    //        usuariosModel.findByIdAndUpdate(userId, update, (err, result) => {
    //            if (err) {
    //                res.send(err)
    //            } else {
    //                res.status(200).send(result)
    //            }
    //        })
  },

  // AÑADIR AMIGOS
  addFriend: function(req, res) {
    console.log(req.body);
    let userId = req.body.id;
    let update = {
      $push: {
        amigos: req.body.email_friend
      }
    };

    usuariosModel.findByIdAndUpdate(userId, update, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    });
  },

  // JUEGO FAVORITO
  addGameFav: function(req, res) {
    let userId = req.body.id;
    let update = {
      juego_fav: req.body.game
    };
    console.log(update);
    usuariosModel.findByIdAndUpdate(userId, update, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    });
  },

  //AÑADIR JUEGOS COMPLETADOS
  addGameComplete: function(req, res) {
    let userId = req.body.id;
    let update = {
      $push: {
        j_completados: {
          juego: req.body.game,
          valoracion: req.body.valoration,
          f_completado: new Date()
        }
      }
    };

    usuariosModel.findByIdAndUpdate(userId, update, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    });
  },

  // AÑADIR ACTUALMENTE JUGANDO
  addGameNow: function(req, res) {
    let userId = req.body.id;
    let update = {
      $push: {
        j_jugando: req.body.game
      }
    };

    usuariosModel.findByIdAndUpdate(userId, update, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    });
  },

  // AÑADIR PROXIMOS JUEGOS
  addGameNext: function(req, res) {
    let userId = req.body.id;
    let update = {
      $push: {
        j_proximos: req.body.game
      }
    };

    usuariosModel.findByIdAndUpdate(userId, update, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    });
  },

  // MOSTRAR LOS USUARIOS REGISTRADOS
  getAll: function(req, res) {
    usuariosModel.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
          // console.log(result)
        res.status(200).send(result);
        
      }
    });
  },

  // MOSTRAR TODA LA INFO DE MI USUARIO(SEGUN EL CORREO DE LA SESION)
  getInfo: function(req, res) {
    console.log(req.query.email);
    usuariosModel.find(
      {
        email: req.query.email
      },
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          console.log(result);
          res.status(200).send(result);
        }
      }
    );
  }
};

module.exports = controller;
