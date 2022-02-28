 const lista = localStorage.getItem('carrito')

 console.log(lista)




const pr = JSON.parse(lista)


const tbody = document.querySelector(".shopping-cart-items")


console.log(pr)



function generarCarrito () {
    let montoTotal = 0;
    let carrito = `<section style="background-color: #ffffffff; height: 600px" class="shopping-cart">
    <div class="container">
    <h1 class="carrito letraDescripcion" >CARRITO</h1>
    <div class="row">
        <div class="col-6">
            <div class="shopping-cart-header">
                <h6>Producto</h6>
            </div>
        </div>
    </div>
        <!-- cart items -->
        <div class="shopping-cart-items shoppingCartItemsContainer">`
    pr.forEach(producto => {
        carrito += `
        <tr>
            <td><p>${producto.nombre}</p></td>
            <td><img src="${producto.img}" style="width: 200px"></td>
            <td><p> Precio: $${producto.precio}</p></td>
        </tr>`
        montoTotal += producto.precio;

    }); 
    carrito += `</div>
    <!-- finaliza -->

    <!-- total -->
    <div class="row">
        <div class="col-12">
            <div class="shopping-cart-total d-flex align-items-center">
                <div class="toast ml-auto bg-info" role="alert" aria-live="assertive" aria-atomic="true"
                    data-delay="2000">
                </div>
                <button class="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal"
                    data-target="#comprarModal">Comprar</button>
                <button id="btnVaciar" class="btn  btn-danger">Vaciar carrito</button>
            </div>
        <div><h3 class="totalCompra">Total:${montoTotal}$</h3></div>
        </div>
    </div>

    <!-- fin total -->

    <!-- MODAL COMPRA -->
    <div class="modal fade" id="comprarModal" tabindex="-1" aria-labelledby="comprarModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="comprarModalLabel">Gracias por su compra</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Pronto recibirá su pedido</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    <!-- FIN MODAL COMPRA -->
</div>
</section>`
document.getElementById('carrito').innerHTML= carrito
}


function vaciarCarrito () {
        localStorage.removeItem('carrito')
        let montoTotal = 0
        let carritoVacio = `<div class="container">
        <h1 class="carrito letraDescripcion" >CARRITO</h1>
        <div class="row">
            <div class="col-6">
                <div class="shopping-cart-header">
                    <h6>No hay productos</h6>
                </div>
            </div>
        </div>
        <div><h3 class="totalCompra">Total:${montoTotal}$</h3></div>
        </div>`;
        if (document.getElementById('carrito')){
            document.getElementById('carrito').innerHTML= carritoVacio
        }
    }



generarCarrito()

$('#btnVaciar').click(() => {
    vaciarCarrito();
})

