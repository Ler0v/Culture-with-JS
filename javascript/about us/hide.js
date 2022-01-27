$("#boton").append(`<div>
<button style="width: 100%;" class="btn btn-success">APRETAME</button>
</div>`)

$("#sobreNosotros").hide()


$("#boton").click(() => {
    $("#sobreNosotros").slideToggle("10000");
});








