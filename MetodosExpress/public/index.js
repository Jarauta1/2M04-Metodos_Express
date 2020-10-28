function enviar() {
    let nombre = document.getElementById("nombre").value
    let edad = parseInt(document.getElementById("edad").value)
    let apellido = document.getElementById("apellido").value
    let persona = { nombre: nombre, apellido: apellido, edad: edad }

    fetch("/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(persona),
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            let mensaje = ""

            for (let i = 0; i < datos.length; i++) {
                mensaje += `
            <h3>${datos[i].nombre} ${datos[i].apellido}, ${datos[i].edad} años</h3>
            `
            }
            document.getElementById("div1").innerHTML = mensaje;
            document.getElementById("nombre").value = ""
            document.getElementById("edad").value = ""
            document.getElementById("apellido").value = ""

        });

}

let nombreSelect

function eleccion() {
    nombreSelect = document.getElementById("nombreEleccion").value
}

function modificar() {
    let nombre = nombreSelect
    let edad = parseInt(document.getElementById("edadCambio").value)
    let apellido = document.getElementById("apellidoCambio").value
    let persona = { nombre: nombre, apellido: apellido, edad: edad }

    fetch("/modificar", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(persona),
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (datos) {
            let mensaje = ""

            for (let i = 0; i < datos.length; i++) {
                mensaje += `
            <h3>${datos[i].nombre} ${datos[i].apellido}, ${datos[i].edad} años</h3>
            `
            }
            document.getElementById("div1").innerHTML = mensaje;
            document.getElementById("nombre").value = ""
            document.getElementById("edad").value = ""
            document.getElementById("apellido").value = ""
        });

}

fetch("/personas")
    .then(function (res) {
        return res.json();
    })
    .then(function (nueva) {
        fetch("/personas")
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                let mensaje = ""

                for (let i = 0; i < datos.length; i++) {
                    mensaje += `
                <h3>${datos[i].nombre} ${datos[i].apellido}, ${datos[i].edad} años</h3>
                `
                }
                document.getElementById("div1").innerHTML = mensaje;

                let mensajeSelect = ""
                for (let i = 0; i< datos.length; i++) {
                    mensajeSelect += `
                    <option value="${datos[i].nombre}">${datos[i].nombre}</option>
                    `
                }
                document.getElementById("select").innerHTML = `
                <select id="nombreEleccion" name="select" onchange="eleccion()">
                ${mensajeSelect}
                </select>
                `
            });
    });