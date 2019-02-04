var mongoose = require('../database/config');
var Schema = mongoose.Schema;

var usuarioSchema = Schema({
    nombre: String,
    apellidos: String,
    nombre_usuario: String,
    plataforma_fav: String,
    pais: String,
    ciudad: String,
    f_nacimineto: Date,
    email: String,
    password: String,
    imagen_perfil: String,
    imagen_portada: String,
    fecha_registro: Date,
    permiso: String,
    puntuacion: Number,
    amigos: Array,
    juego_fav: String,
    j_completados: Array,
    j_proximos: Array,
    j_jugando: Array

})

module.exports = mongoose.model('usuarios', usuarioSchema);