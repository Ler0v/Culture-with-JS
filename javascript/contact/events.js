$("#botonFormulario").on("click", function () {
    console.log("El formulario ha sido enviado correctamente")
})

$(document).ready(function () {
    const JSON_URL = "data/formulario.json" 

    $("body").prepend('<button id="btn1">ENVIAR API</button>')
    $("#btn1").click( () => {
        $.getJSON( JSON_URL, (respuesta) => {
            console.log(respuesta)
        });
    });
});



