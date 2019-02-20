const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const port = 3001;
const app = express();

// MIDDLEWARES
app.use(bodyParser.json()); // Cuando entra cualquier peticion transforma los datos datos en un JSON
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use(morgan("dev")); // Muestra por consola las peticiones al servidor

// IMAGENES

const usuarioModel = require("../src/models/users");
const fs = require("fs");
const path = require("path");
// app.use(require("/upload"));

app.use(fileUpload({ useTempFiles: true }));
app.put("/upload/:tipo/:id", (req, res) => {
  console.log(req.files);
  let tipo = req.params.tipo;
  let id = req.params.id;

  // Validar tipo
  let tiposValidos = ["users", "messages"];
  if (tiposValidos.indexOf(tipo) < 0) {
    return res
      .status(400)
      .send("Las tipos permitidos son " + tiposValidos.join(", "));
  }

  // Comprobar si llega archivo
  if (!req.files) {
    return res.status(400).send("No hay archivos que subir");
  }

  let archivo = req.files.archivo;
  let nombreCortado = archivo.name.split(".");
  let extension = nombreCortado[nombreCortado.length - 1];

  // Extensiones permitidas
  let extensionesValidas = ["png", "jpg", "gif", "jpeg"];

  if (extensionesValidas.indexOf(extension) < 0) {
    return res
      .status(400)
      .send("Las extensiones permitidas son " + extensionesValidas.join(", "));
  }

  // Cambiar nombre al archivo
  let nombreArchivo = `${id}-${new Date().getMilliseconds()}.${extension}`;

  archivo.mv(`uploads/${tipo}/${nombreArchivo}`, err => {
    if (err) {
      console.log("da error");
      return res.status(500).send(err);
    }

    // Imagen cargada, toca asignarla al usuario
    imagenUsuario(id, res, nombreArchivo);
  });
});

function imagenUsuario(id, res, nombreArchivo) {
  usuarioModel.findById(id, (err, usuarioDB) => {
    if (err) {
      borrarArchivo(nombreArchivo, "users");
      return res.status(500).send(err);
    }

    if (!usuarioDB) {
      borrarArchivo(nombreArchivo, "users");
      return res.status(400).send("Usuario no existe");
    }

    // Si existe una imagen la elimino primero
    borrarArchivo(usuarioDB.imagen_perfil, "users");

    usuarioDB.imagen_perfil = nombreArchivo;
    usuarioDB.save((err, usuarioGuardado) => {
      res.status(200).send(usuarioGuardado);
    });
  });
}

function borrarArchivo(nombreImagen, tipo) {
  let pahtImagen = path.resolve(
    __dirname,
    `../uploads/${tipo}/${nombreImagen}`
  );
  if (fs.existsSync(pahtImagen)) {
    fs.unlinkSync(pahtImagen);
  }
}

// MOSTRAR LA IMAGEN
app.get("/imagen/:tipo/:img", (req, res) => {
  let tipo = req.params.tipo;
  let img = req.params.img;

  let pahtImagen = path.resolve(__dirname, `../uploads/${tipo}/${img}`);

  if (fs.existsSync(pahtImagen)) {
    res.sendfile(pahtImagen);
  } else {
    let noImagePath = path.resolve(__dirname, "../src/assets/icono-perfil.png");
    res.sendfile(noImagePath);
  }
});

// SERVER
app.listen(port, () => {
  console.log("Servidor corriendo correctamente en puerto " + port);
});

module.exports = app;
