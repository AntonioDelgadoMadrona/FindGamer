var mongoose = require('../config/database');
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
    fecha_registro: Date,
    permiso: String

})

module.exports = mongoose.model('usuarios', usuarioSchema);