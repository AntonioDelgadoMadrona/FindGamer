var mongoose = require('../database/config');
var Schema = mongoose.Schema;

var eventoSchema = Schema({
    creador: String,
    juego: String,
    plataforma: String,
    f_inicio: Date,
    h_inicio: String,
    f_fin: Date,
    h_fin: String,
    n_jugadores: Number,
    puntuacion_min: Number,
    mensaje: String,
    participantes: Array,
    comentarios: Array,
    f_creacion: Date

})

module.exports = mongoose.model('eventos', eventoSchema);