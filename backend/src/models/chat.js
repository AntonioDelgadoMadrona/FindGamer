const mongoose = require('mongoose');
const { Schema } = mongoose;

var chatSchema = new Schema({
    usuario: String,
    mensaje: String,
    f_mensaje: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('chats', chatSchema);