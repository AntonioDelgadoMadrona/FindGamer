const usuariosModel = require("../models/users");

var bcrypt = require("bcrypt-nodejs");

var controller = {
  registerUser: (req, res) => {
    usuariosModel.find({ email: req.body.email }, (err, result) => {
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
              (usuario.fecha_registro = new Date()),
                (usuario.permiso = req.body.permiso);

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
                    fecha_registro: result.fecha_registro,
                    permiso: result.permiso
                  };
                  return res.status(200).send(usuario);
                }
              });
            });
          });

        } else {
            return res.send('Email ya registrado');
        }
      }
    });
  },

  loginUser: (req, res) => {
    usuariosModel.find({ email: req.body.email }, (err, result) => {
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
    });
  },

  // CERRAR SESION
  logoutUser: function(req, res) {
    if (req.session.user) {
      req.session.destroy();
    } else {
      return res.send("No existe un login de usuario");
    }
  }
};

module.exports = controller;
