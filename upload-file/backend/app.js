const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();

app.use(cors());

// manejar la direccion como una carpeta y no como una ruta
app.use(express.static("./public"));

const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
  filename: function (res, file, cb) {
    // capturar la extencion del archivo, metodo pop captura la ultima posicion del array
    const ext = file.originalname.split(".").pop(); //TODO pdf, jpeg, mp3
    const fileName = Date.now(); //TODO 1234567
    cb(null, `${fileName}.${ext}`); //TODO 1234567.pdf
  },
  destination: function (res, file, cb) {
    cb(null, "./public");
  },
});

const upload = multer({
  storage: storage,
});

app.post("/upload", upload.single("myFile"), (req, res) => {
  const file = req.file.filename;
  console.log(file);
  res.send({ data: "ok", url: `http://localhost:3000/${file}` });
});

app.listen(port, () => {
  console.log("Listo por el puerto:", port);
});
