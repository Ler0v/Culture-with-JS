window.addEventListener("click", function(e){
    console.log(e.target)
})


// Clase plantilla para los productos

class Product {
    constructor(id, nombre, precio, descripcion, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
    }
}

const productos = [];
const carrito = []

const JSON_URL = "data/formulario.json" 

$.getJSON( JSON_URL, (respuesta) => {
    console.log(respuesta)
    respuesta.forEach(element => {
    productos.push(new Product(element.id, element.nombre, element.precio, element.descripcion, element.img))
    });
    console.log(productos)
    productos.forEach(producto => {
        container.innerHTML += `<div id="p${producto.id}" class="cardProduct">
        <div class = "imgCentrar">
        <img id="item-image" src=${producto.img} width = 400px></img>
        </div>
        <div class ="info">
        <p id= "item-title">${producto.nombre}</p>
        <span id="item-price">${producto.precio}</span>
        <p>${producto.descripcion}</p>
        <button class="cta btn btn-success ">Añadir al carrito</button>
        </div>
        </div>`
    })




    const cerrar = document.querySelector(".close")
    const abrir = document.querySelector(".cta")
    const modal = document.querySelector(".modal")
    const modalC =document.querySelector(".modal-container")






    productos.forEach(producto => {
        const boton = document.querySelector(`#p${producto.id} button`)
        boton.addEventListener('click', (e) => {
            e.preventDefault()
            modalC.style.opacity = "1"
            modalC.style.visibility = "visible"
            modal.classList.toggle("modal-close")
            carrito.push(producto)
            //poner un modal
            localStorage.setItem('carrito', JSON.stringify(carrito))
            console.log(carrito)
        })
        
    })

    
});







// Inyecta las cards al documento
const container = document.querySelector("#grid")


cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close")
    setTimeout(function(){
        modalC.style.opacity = "0"
        modalC.style.visibility = "hidden"
    })
},1000)







