var mongoose = require('../config/database');
var Schema = mongoose.Schema;

var eventoSchema = Schema({
    creador: String,
    juego: String,
    plataforma: String,
    f_inicio: String,
    f_fin: String,
    jugadores: Number,
    participantes: Array,
    puntuacion_min: Number,
    mensaje: String,
    likes: Number,
    comentarios: Array,
    f_creacion: Date

})

module.exports = mongoose.model('eventos', eventoSchema);