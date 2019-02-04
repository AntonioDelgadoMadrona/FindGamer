const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const path = require('path');
const multer = require('multer'); // Subir imagenes
const uuid = require('uuid/v4'); // Nombre imagenes

const port = 3001;
const app = express();

// Sockets
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio.listen(server);
require('./routes/sockets')(io);

// MIDDLEWARES
app.use(bodyParser.urlencoded({
    extended: false
})); 
app.use(bodyParser.json()); // Cuando entra cualquier peticion transforma los datos datos en un JSON

app.use(morgan('dev')); // Muestra por consola las peticiones al servidor

app.use(session({   // Guarda en la session
    secret: 'cadena aleatoria',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 365 * 24 * 60 * 60 * 1000 } // Tiempo duracion de la cookie en ms(1 año)
}));

// Aqui definimos el nombre al guardar
const storage = multer.diskStorage({
    destination: path.join(__dirname, '/public/uploads'),
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});

// Donde va a almacenar los archivos
app.use(multer({
    storage,
    dest: path.join(__dirname, '/public/uploads'),
    limits: {
        fileSize: 1000000
    }, // Peso maximo en bytes
    fileFilter: (req, file, cb) => { // Comprobamos la extendion del archivo
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb('Error: El archivo no tiene extension jpeg, jpg, png o gif')

    }
}).single('image'));

// SERVER
app.listen(port, () => {
    console.log('Servidor corriendo correctamente en puerto ' + port);
});

module.exports = app;
