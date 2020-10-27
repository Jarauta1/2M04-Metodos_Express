function enviar() {
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    let apellido = document.getElementById("apellido").value
    console.log(nombre)
    console.log(apellido)
    console.log(edad)
}

fetch("/add", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(nueva),
})
    .then(function (res) {
        return res.json();
    })
    .then(function (nueva) {
        fetch("/personas")
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                console.log(datos)
                console.log(nueva)
                datos.push(nueva)
                let mensaje = ""

                for (let i = 0; i < datos.length; i++) {
                    mensaje += `
                <h3>${datos[i].nombre} ${datos[i].apellido}, ${datos[i].edad} años</h3>
                `
                }
                document.getElementById("div1").innerHTML = mensaje;
            });
    });