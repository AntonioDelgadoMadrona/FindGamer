const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;
const app = express();
const session = require('express-session');

// Configuracion de archivos
// app.use(express.static(__dirname + '/public')); // Indicamos donde se van alojar los estaticos (html, js, css)
// app.set('views', __dirname + '/public/views');  // Indicamos donde se van a alojar las vistas, html en este caso
// app.engine('ejs', require('ejs').renderFile);  // Quien se va a encargar de renderizar la vista
// app.set('view engine', 'ejs');        // El motor de las vistas que vamos a utilizar, en este caso es html

// Middleware
app.use(bodyParser.urlencoded({extended:false}));   // Cuando entra cualquier peticion transforma los datos datos en un JSOn
app.use(bodyParser.json());
app.use(session({
    secret:'cadena aleatoria',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 }    // Tiempo duracion de la cookie en ms(1 semana)
}));

// Creacion del servidor
app.listen(port, () =>{    // Lo conectamos al servidor en el port especificado arriba
    console.log('Servidor corriendo correctamente');
});

module.exports = app;