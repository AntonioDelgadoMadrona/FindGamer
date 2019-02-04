const Chat = require('../models/chat');

// SOCKETS EN EL LADO DEL SERVIDOR
module.exports = function (io) {

    let users = [];

    io.on('connection', async socket => {
        console.log('Nuevo usuario conectado');
        
        let messages = await Chat.find({});  // Pedimos todos los mensajes a la base de datos
        socket.emit('todos los mensajes', messages) // Y los mandamos al cliente

        socket.on('nuevo usuario', (data, cb) => {
            //            console.log(data);
            if (users.indexOf(data) != -1) { // Comprobamos si ya esta en el array
                cb(false);
            } else {
                cb(true);
                socket.nickname = data;
                users.push(socket.nickname); // Añadimos el nuevo usuario al array
                io.sockets.emit('usuarios', users); // Enviamos al cliente los usuarios
                console.log(users);
            }
        })

        socket.on('mensaje', async data => { // Recibimos el mensaje
            var newMsg = new Chat({ // Creamos la estructura
                msg: data,
                nick: socket.nickname
            });
            await newMsg.save() // Lo guardamos en la base de datos
            io.sockets.emit('nuevo mensaje', {   // Y lo devolvemos al cliente(mensaje y usuario data)
                msg: data,
                nick: socket.nickname
            });
        });

        socket.on('desconectado', data => {
            if (!socket.nickname) { // Si no existe en el array, omitimos la peticion
                return;
            } else { // Si no, eliminamos el usuario del array
                users.splice(users.indexOf(socket.nickname), 1);
                io.sockets.emit('usuarios', users); // Mandamos los usuarios actuales
            }
        })

    })

}


// ------------------------------------------- FRONT-ED -----------------------------------------------------------

// SOCKETS EN EL LADO DEL CLIENTE
// $(function () {

//     // LOS MENSAJES

//     const socket = io();

//     // Capturar los elementos del DOM
//     const messageForm = $('#message-form');
//     const messageBox = $('#message');
//     const chat = $('#chat');

//     // Mandamos al servidor los mensajes
//     messageForm.submit(e => {
//         e.preventDefault();
//         socket.emit('mensaje', messageBox.val());
//         messageBox.val('');
//     });

//     // Recogemos del servidor los mensajes y su usuario
//     socket.on('nuevo mensaje', function (data) {
//         chat.append('<b>' + data.nick + '</b>: ' + data.msg + '<br/>')
//     })

//     // Recogemos todos los mensajes de la base de datos
//     socket.on('todos los mensajes', msgs => {
//         console.log(msgs);
//         for (let i = 0; i < msgs.length; i++) {
//             chat.append('<b>' + msgs[i].nick + '</b>: ' + msgs[i].msg + '<br/>');
//         }
//     })


//     // LOS USUARIOS

//     const nickForm = $('#nickForm');
//     const nickName = $('#nickName');
//     const nickError = $('#nickError');

//     const users = $('#usernames');

//     nickForm.submit(e => {  // Registramos un nuevo usuario
//         e.preventDefault();
//         socket.emit('nuevo usuario', nickName.val(), data => {
//             if (data) {
//                 $('#nickWrap').hide();
//                 $('#contentWrap').show();
//             } else {
//                 nickError.html(`
//                     <div class="alert alert-danger">
//                         Ese usuario ya existe
//                     <div>
//                 `);
//             }
//             nickName.val('');
//         });
//     });
//     // Recorremos el array de usuarios almacenados y los mostramos
//     socket.on('usuarios', data => {
//         let html = '';
//         for (let i = 0; i < data.length; i++) {
//             html += `<p><i class="fas fa-user"></i> ${data[i]}</p>`
//         }
//         users.html(html);
//     })

// })
