$("#botonFormulario").on("click", function () {
    console.log("El formulario ha sido enviado correctamente")
})

$(document).ready(function () {
    const JSON_URL = "data/formulario.json" 

    $("#btn1").click( () => {
        $.getJSON( JSON_URL, (respuesta) => {
            console.log(respuesta)
        });
    });
});



