var mongoose = require('../config/database');
var Schema = mongoose.Schema;

var m_timelineSchema = Schema({
    remitente: String,
    mensaje: String,
    foto: String,
    f_publicacion: Date,
    comentarios: [
        {
            user_id: String,
            mensaje: String,
            f_comentario: Date
        }
    ],
    likes: Number

})

module.exports = mongoose.model('m_timeline', m_timelineSchema);