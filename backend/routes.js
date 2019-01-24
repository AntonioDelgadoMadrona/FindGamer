var app = require('./app');

var UsersController = require('./controllers/users');
var TimelineController = require('./controllers/timeline');
var EventoController = require('./controllers/eventos');

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

// -------------------------------------------------------------------- USUARIOS -------------------------------------------------------------------------

// REGISTRO USUARIO
app.post('/users/register', UsersController.registerUser);

// LOGIN USUARIO
app.post('/users/login', UsersController.loginUser);
 
// CERRAR SESION
app.get('/logout', UsersController.logoutUser);

// -------------------------------------------- TIMELINE --------------------

// CREAR MENSAJE
app.post('/timeline/crear', TimelineController.crearMensaje);

// --------------------------------------- EVENTOS -----------------------------

// CREAR EVENTO
app.post('/eventos/crear', EventoController.crearEvento);

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
