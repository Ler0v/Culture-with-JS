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


// Armar array escalable de productos
const productos = [
    new Product(1,"The Flex Hoddie", 7500, "El buzo perfecto para la salida perfecta", 'media/buzo1.jpeg'),
    new Product(2, "Serpent", 8500, "Las escamas se apoderaron del estilo de este buzo", 'media/buzo2.jpeg'),
    new Product(3, "The Careless Hoddie", 9500, "The careless hoddie", 'media/buzo3.jpeg')
]


//Array de productos a JSON y de ahi al storage

localStorage.setItem('product', JSON.stringify(producto))


//Carrito con Storage

const carrito = [];

// Inyecta las cards al documento
const container = document.querySelector("#grid")

productos.forEach(producto => {
    container.innerHTML += `<div id="p${producto.id}" class="cardProduct">
    <div class = "imgCentrar">
    <img src=${producto.img} width = 400px></img>
    </div>
    <div class ="info">
    <p>${producto.nombre}</p>
    <span>${producto.precio}</span>
    <p>${producto.descripcion}</p>
    <button class="btn btn-success">Añadir al carrito</button>
    </div>
    </div>`
})


// Agregar event listeners al boton de compra  agrega al carrito en el storage y lo consolea


productos.forEach(producto => {
	const boton = document.querySelector(`#p${producto.id} button`)
	boton.addEventListener('click', () => {
        alert('Compraste ' + producto.nombre) //poner un modal
		localStorage.setItem('product', JSON.stringify(producto))
        carrito.push(producto)
        console.log(carrito)
	})
})


/////////modal con html listener con el modal////////

 

