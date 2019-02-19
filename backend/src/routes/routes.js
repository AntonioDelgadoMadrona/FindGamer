var app = require("../app");
const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config.taken');

var UserController = require("../controllers/users");
var TimelineController = require("../controllers/timeline");
var EventController = require("../controllers/eventos");

// MIDDLEWARE TOKEN
const auth = function(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ alert: 'No tienes autorizacion'})
  }
  const token = req.headers.authorization.split(" ")[1]
  const payload = jwt.decode(token, config.TOKEN_SECRET)

  if(payload.exp <= moment().unix()) {
    return res.status(401).send({ message: 'El token ha expirado'})
  }

  req.user = payload.sub
  next()
};

// --------------------------------- USUARIOS ------------------------

// REGISTRO USUARIO
app.post("/user/register", UserController.registerUser);

// LOGIN USUARIO
app.post("/user/login", UserController.loginUser);

// CERRAR SESION
app.get("/user/logout", UserController.logoutUser);

// SUBIR IMAGEN PERFIL
app.post("/user/addimgprofile", (req, res) => {
  console.log(JSON.stringify(req.body));
  res.send(req)
});

// SUBIR IMAGEN PORTADA
// app.post("/user/addcoverprofile", UserController.addCoverUser);

// AÑADIR AMIGOS
app.post("/user/addfriend", auth, UserController.addFriend);

// JUEGO FAVORITO
app.post("/user/addgamefav", auth, UserController.addGameFav);

// AÑADIR JUEGOS COMPLETADOS
app.post("/user/addgamecomplete", auth, UserController.addGameComplete);

// AÑADIR JUEGOS JUGANDO
app.post("/user/addgamenow", auth, UserController.addGameNow);

// AÑADIR JUEGOS PROXIMOS
app.post("/user/addgamenext", auth, UserController.addGameNext);

// MOSTRAR LOS USUARIOS REGISTRADOS
app.get("/user/getall", UserController.getAll);

// MOSTRAR JUGADORES CON MAS PUNTUACION
app.get("/user/getreco", UserController.getRecommended);

// MOSTRAR TODA LA INFO DE MI USUARIO
app.get("/user/getinfo", UserController.getInfo);

// AÑADIR PUNTUACION USUARIO
app.post("/user/addvaloration", auth, UserController.addValoration);

// ------------------------------------ TIMELINE ------------

// CREAR MENSAJE
app.post("/timeline/create", auth, TimelineController.createMessage);

// AÑADIR COMENTARIO
app.post("/timeline/addcomment", auth, TimelineController.addComment);

// AÑADIR LIKE
app.post("/timeline/addlike", auth, TimelineController.addLike);

// ELIMINAR LIKE
app.post("/timeline/deletelike", auth, TimelineController.deleteLike);

// MOSTRAR TODOS LOS MENSAJES
app.get("/timeline/getall", TimelineController.getAll);

// ---------------------------- EVENTOS -----------------

// CREAR EVENTO
app.post("/event/create", auth, EventController.createEvent);

// AÑADIR COMENTARIO
app.post("/event/addcomment", auth, EventController.addComment);

// MOSTRAR TODOS LOS EVENTOS
app.get("/event/getall", EventController.getAll);

// MOSTRAR LA INFO DEL EVENTO
app.get("/event/getinfo", EventController.getInfo);

// AÑADIR GAMER AL EVENTO
app.post("/event/addgamer", auth, EventController.addGamer);


module.exports = app;
