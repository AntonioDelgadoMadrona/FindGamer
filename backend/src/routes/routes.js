var app = require('../app');

var UsersController = require('../controllers/users');
var TimelineController = require('../controllers/timeline');
var EventoController = require('../controllers/eventos');

// RUTA INICIO
// app.get('/', function (req, res) {
//     res.render('index');
// });

var auth = function (req, res, next) {
    if (req.session.user)
        return next();
    else
        return res.sendStatus(404);
};



// --------------------------------- USUARIOS ------------------------

// REGISTRO USUARIO
app.post('/users/register', UsersController.registerUser);

// LOGIN USUARIO
app.post('/users/login', UsersController.loginUser);

// CERRAR SESION
app.get('/logout', UsersController.logoutUser);

// VALIDACION USUARIO
app.get('/home', auth, function (req, res) {
    res.render('home', {
        email: req.session.user.email
    });
});

// SUBIR IMAGEN PERFIL
app.post('/users/imgperfil', UsersController.addImageUser);

// AÑADIR AMIGOS
app.post('/users/addfriend', UsersController.addFriend);

// JUEGO FAVORITO
app.post('/users/addgamefav', UsersController.addGameFav);

// AÑADIR JUEGOS COMPLETADOS
app.post('/users/addgamecomplete', UsersController.addGameComplete);

// AÑADIR JUEGOS JUGANDO
app.post('/users/addgamenow', UsersController.addGameNow);

// AÑADIR JUEGOS PROXIMOS
app.post('/users/addgamenext', UsersController.addGameNext);

// MOSTRAR LOS USUARIOS REGISTRADOS
app.get('/users/all', UsersController.getUsers);

// MOSTRAR TODA LA INFO DE MI USUARIO
app.get('/users/getallinfo', UsersController.getAllInfo);

// ------------------------------------ TIMELINE ------------

// CREAR MENSAJE
app.post('/timeline/crear', TimelineController.crearMensaje);

// AÑADIR COMENTARIO
app.post('/timeline/addcomment', TimelineController.addComment);

// LIKES MENSAJE
app.post('/timeline/addlike', TimelineController.addLike);

// MOSTRAR TODOS LOS MENSAJES
app.get('/timeline/all', TimelineController.getAll);

// ---------------------------- EVENTOS -----------------

// CREAR EVENTO
app.post('/eventos/crear', EventoController.crearEvento);

// AÑADIR COMENTARIO
app.post('/eventos/addcomment', EventoController.addComment);

// LIKES MENSAJE
app.post('/eventos/addlike', EventoController.addLike);

// MOSTRAR TODOS LOS EVENTOS
app.get('/eventos/getall', EventoController.getAllEvents);

// MOSTRAR LA INFO DEL EVENTO
app.get('/eventos/getinfo', EventoController.getInfoEvent);










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
