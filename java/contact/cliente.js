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
    console.log(Math.abs(hoy - fecha) / 1000 / 60 / 60 / 24 / 365)
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
} 


