var app = require("../app");

var UserController = require("../controllers/users");
var TimelineController = require("../controllers/timeline");
var EventController = require("../controllers/eventos");

// var auth = function(req, res, next) {
//   if (req.session.user) return next();
//   else return res.sendStatus(404);
// };

// --------------------------------- USUARIOS ------------------------

// REGISTRO USUARIO
app.post("/user/register", UserController.registerUser);

// LOGIN USUARIO
app.post("/user/login", UserController.loginUser);

// CERRAR SESION
app.get("/user/logout", UserController.logoutUser);

// VALIDACION USUARIO
// app.get("/home", auth, function(req, res) {
//   res.render("home", {
//     email: req.session.user.email
//   });
// });

// SUBIR IMAGEN PERFIL
app.post("/user/addimgprofile", (req, res) => {
  console.log(JSON.stringify(req.body));
  res.send(req)
});

// SUBIR IMAGEN PORTADA
// app.post("/user/addcoverprofile", UserController.addCoverUser);

// AÑADIR AMIGOS
app.post("/user/addfriend", UserController.addFriend);

// JUEGO FAVORITO
app.post("/user/addgamefav", UserController.addGameFav);

// AÑADIR JUEGOS COMPLETADOS
app.post("/user/addgamecomplete", UserController.addGameComplete);

// AÑADIR JUEGOS JUGANDO
app.post("/user/addgamenow", UserController.addGameNow);

// AÑADIR JUEGOS PROXIMOS
app.post("/user/addgamenext", UserController.addGameNext);

// MOSTRAR LOS USUARIOS REGISTRADOS
app.get("/user/getall", UserController.getAll);

// MOSTRAR JUGADORES CON MAS PUNTUACION
app.get("/user/getreco", UserController.getRecommended);

// MOSTRAR TODA LA INFO DE MI USUARIO
app.get("/user/getinfo", UserController.getInfo);

// AÑADIR PUNTUACION USUARIO
app.post("/user/addvaloration", UserController.addValoration);

// ------------------------------------ TIMELINE ------------

// CREAR MENSAJE
app.post("/timeline/create", TimelineController.createMessage);

// AÑADIR COMENTARIO
app.post("/timeline/addcomment", TimelineController.addComment);

// AÑADIR LIKE
app.post("/timeline/addlike", TimelineController.addLike);

// ELIMINAR LIKE
app.post("/timeline/deletelike", TimelineController.deleteLike);

// MOSTRAR TODOS LOS MENSAJES
app.get("/timeline/getall", TimelineController.getAll);

// ---------------------------- EVENTOS -----------------

// CREAR EVENTO
app.post("/event/create", EventController.createEvent);

// AÑADIR COMENTARIO
app.post("/event/addcomment", EventController.addComment);

// MOSTRAR TODOS LOS EVENTOS
app.get("/event/getall", EventController.getAll);

// MOSTRAR LA INFO DEL EVENTO
app.get("/event/getinfo", EventController.getInfo);

// AÑADIR GAMER AL EVENTO
app.post("/event/addgamer", EventController.addGamer);

// // CUANDO EL USUARIO ESTA LOGEADO (VUELVO A COMPROBAR SI EN LA SESION ESTA EL PERMISO ADECUADO)
// app.get('/invitado', auth, function (req, res) {
//     if (req.session.user.permiso == 'invitado') {
//         res.render('invitado', {
//             email: req.session.user.email,
//             name: req.session.user.name,
//             permiso: req.session.user.permiso
//         });
//     }
// })

// app.get('/administrador', auth, function (req, res) {
//     if (req.session.user.permiso == 'administrador') {
//         res.render('administrador', {
//             email: req.session.user.email,
//             name: req.session.user.name,
//             permiso: req.session.user.permiso
//         });
//     }
// });

// app.get('/super', auth, function (req, res) {
//     if (req.session.user.permiso == 'superAdmin') {
//         res.render('super', {
//             email: req.session.user.email,
//             name: req.session.user.name,
//             permiso: req.session.user.permiso
//         });
//     }
// })

module.exports = app;
