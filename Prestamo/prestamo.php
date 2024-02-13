<!-- Modal de Prestamo -->
<div class="modal fade" id="Prestamo" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h3>Bitacora de Prestamos <small>Laboratorio de Redes Cisco</small></h3>
        </div>
        
        <div class="modal-body">
            <legend><h4>Registro <small>Prestamos o Devolución</small></h4></legend>
            <form action="R_Pre-Dev.php" method="post" name="Pre-Dev">
                <div class="form-group">
                    <label>Matricula</label>
                    <input type="text" name="matricula" class="form-control" required autofocus>
                </div>

                <div class="form-group">
                    <button type="submit" name="Pre-Dev" class="btn btn-success btn-block">Siguiente
                    <i class="fa fa-chevron-right pull-right"></i>
                    </button>
                </div>
                <br>
            </form>
            
		</div>
		
		<div class="modal-footer">
			 <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
		</div>
      </div>
      
    </div>
</div>
	
      