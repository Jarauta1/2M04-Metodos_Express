const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let personas = require("./array")

app.get("/personas", function (req, res) {
  res.send(personas)
});

app.post("/add", function (req, res) {
  let nombre = req.body.nombre;
  let apellido
  let edad
  let nueva = {nombre: nombre, apellido: apellido, edad: edad}
  console.log(nueva)
  res.send(nueva)
});


app.listen(3000);