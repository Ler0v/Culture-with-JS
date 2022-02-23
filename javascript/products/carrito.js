 const lista = localStorage.getItem('carrito')

 console.log(lista)

$('#carrito').append(`<section style="background-color: #ffffffff; height: 600px" class="shopping-cart">
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
    <div class="shopping-cart-items shoppingCartItemsContainer">
        
    </div>
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
                <button class="btn btnVaciar btn-danger">Vaciar carrito</button>
            </div>
        <div><h3 class="itemTotal">Total:$</h3></div>
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
</section>`)


const pr = JSON.parse(lista)


const tbody = document.querySelector(".shopping-cart-items")


console.log(pr)

pr.forEach(producto => {
    tbody.innerHTML += `
    <tr>
        <td><p>${producto.nombre}</p></td>
        <td><img src="${producto.img}" style="width: 200px"></td>
        <td><p> Precio: $${producto.precio}</p></td>
    </tr>`
}); 
 

const btnVaciar = document.querySelector('.btnVaciar')

pr.forEach(producto => {
    btnVaciar.addEventListener('click', (e) =>{
        document.querySelector('itemTotal').remove
    })
})


document.querySelector('itemTotal')
let total = 0

pr.forEach(producto)
