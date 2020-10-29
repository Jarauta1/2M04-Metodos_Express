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
  let apellido = req.body.apellido;
  let edad = req.body.edad;
  let nueva = {nombre: nombre, apellido: apellido, edad: edad}
  personas.push(nueva)
  res.send(personas)
  
});

app.put("/modificar", function (req, res) {
  let nombreCambiar = req.body.nombreCambiar
  let nombre = req.body.nombre;
  let apellido = req.body.apellido;
  let edad = req.body.edad;
  for (let i = 0; i < personas.length; i++) {
    if (nombreCambiar == personas[i].nombre) {
      personas[i].nombre = nombre;
      personas[i].apellido = apellido;
      personas[i].edad = edad;
    }
  }
  console.log(nombreCambiar)
  res.send(personas)
})

app.get("/modificarInput", function (req,res) {
  let nombreCambiar = req.body.nombreCambiar
  console.log(nombreCambiar)
  let personaCambiar
  for (let i = 0; i < personas.length; i++) {
    if (nombreCambiar == personas[i].nombre) {
      personaCambiar = {nombre: personas[i].nombre, apellido: personas[i].apellido, edad: personas[i].edad}
    }
  }
  console.log(personaCambiar)
  res.send(personaCambiar)
})

app.delete("/borrar", function (req, res) {

  let nombre = req.body.nombre;
  for (let i = 0; i < personas.length; i++) {
    if (nombre == personas[i].nombre) {
      personas.splice(i,1)
    }
  }
  res.send(personas)
})

app.listen(3000);