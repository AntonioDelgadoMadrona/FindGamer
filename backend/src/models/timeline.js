var mongoose = require('../database/config');
var Schema = mongoose.Schema;

var timelineSchema = Schema({
    usuario: String,
    mensaje: String,
    foto: String,
    f_publicacion: Date,
    comentarios: Array,
    likes: Array

})

module.exports = mongoose.model('timeline', timelineSchema);