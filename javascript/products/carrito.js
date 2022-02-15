$('#carrito').append(`<section style="background-color: #ffffffff; height: 600px" class="shopping-cart">
<div class="container">
    <h1 class="carrito letraDescripcion" >CARRITO</h1>
    <div class="row">
        <div class="col-6">
            <div class="shopping-cart-header">
                <h6>Producto</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-header">
                <h6 class="text-truncate">Precio</h6>
            </div>
        </div>
        <div class="col-4">
            <div class="shopping-cart-header">
                <h6>Cantidad</h6>
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
                <p class="mb-0">Total</p>
                <p class="ml-4 mb-0 shoppingCartTotal">0$</p>
                <div class="toast ml-auto bg-info" role="alert" aria-live="assertive" aria-atomic="true"
                    data-delay="2000">
                    <div class="toast-header">
                        <span>✅</span>
                        <strong class="mr-auto ml-1 text-secondary">Elemento en el carrito</strong>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="toast-body text-white">
                        Se aumentó correctamente la cantidad
                    </div>
                </div>
                <button class="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal"
                    data-target="#comprarModal">Comprar</button>
            </div>
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