class Cliente{
    constructor(nombre, apellido, email, telefono, mensaje) {
        this.nombre = nombre;
        this.apellido   = apellido;
        this.email  = email;
        this.telefono  = telefono
        this.mensaje  = mensaje
    }
    datos(){
        console.log("Los datos del cliente son:", this.nombre, this.apellido, this.email, this.telefono, this.mensaje);
    }
}



function edad () {
    let fecha =  document.getElementById("date").value
    let hoy = new Date()
    fecha = new Date(fecha)
  }


function enviar() {
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const email = document.getElementById("email").value
    const telefono = document.getElementById("telefono").value
    const mensaje = document.getElementById("mensaje").value
    edad()

    const persona1 = new Cliente(nombre, apellido, email, telefono, mensaje);
    persona1.datos();


    const URLGET   = "https://jsonplaceholder.typicode.com/posts"

    const infoPost =  { nombre: nombre, apellido: apellido, email: email, telefono: telefono, mensaje: mensaje }  

    $("#botonFormulario").click(() => { 
        $.post(URLGET, infoPost ,(respuesta, estado) => {
            if(estado === "success"){
                console.log(respuesta)
            }  
        });
    });








} 

$(document).ready(function() {
    const URL_JSON = "data/formulario.json"
    $("botonFormulario").click( () => {
        $.post( URL_JSON, (respuesta) => {
            console.log(respuesta)
        })
    })
})
    



