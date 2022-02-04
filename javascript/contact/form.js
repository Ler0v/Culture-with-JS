$("#form").append(`<div>
<form onsubmit="enviar();return false" id="formulario" class="letraDescripcion">
  <div class="form-group">
    <label for="nombre">Nombre</label>
    <input type="text" class="form-control inp1" id="nombre" placeholder="Nombre">
</div>
    <div class="form-group">
        <label for="apellido">Apellido</label>
        <input type="text" class="form-control inp2" id="apellido" placeholder="Apellido">
    </div>
    
    <div class="form-group">
        <label for="date">Fecha de nacimiento</label>
        <input type="date" class="form-control" id="date" placeholder="date">
    </div>
    
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Email">
    </div>  
    <div class="form-group">
        <label for="telefono">Telefono</label>
        <input type="phone" class="form-control" id="telefono" placeholder="Telefono">
    </div>
    <div class="form-group">
            <label for="exampleFormControlSelect1">Genero</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Femenino</option>
              <option>Masculino</option>
            </select>
    </div>
    <div class="form-group">
        <label for="mensaje">Mensaje</label>
        <textarea class="form-control inp3" id="mensaje" rows="3"></textarea>
    </div>
<button id="botonFormulario" type="submit" class="btn btn-success btn-lg btn-block button">Enviar</button>
</form>
</div>
<div>	
<div class="card letraDescripcion">
  <div class="card-body">
    <h2 class="card-title typeBold">Ubicacion</h2>
    <p class="card-text typeLight">Actualmente podes encontrar todos nuestros productos en las oficinas de Palermo!</p>
    <p class="card-text"><small class="text-muted">4699 Av. Santa Fe</small></p>
  </div>
  <img src="media/mapa.png" class="card-img-bottom" alt="mapita	">
</div>
</div>`)



