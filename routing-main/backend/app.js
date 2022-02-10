require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();

const userRouter = require("./api/users/user.router");
const uploadRouter = require("./api/upload/upload.router");

// manejar la direccion como una carpeta y no como una ruta
app.use(express.static("./public"));

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/uploads", uploadRouter);

// cargar archivos a la carpeta public
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
  res.send({ data: "ok", url: `http://localhost:4000/${file}` });
});

app.listen(port, () => {
  console.log("server up and running on PORT:", port);
});
