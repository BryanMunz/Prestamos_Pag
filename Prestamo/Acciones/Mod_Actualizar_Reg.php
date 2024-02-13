<!--Modal Editar-->
<div class="modal fade bs-example-modal-lg" id="Editar" role="dialog">
<div class="modal-dialog modal-lg" role="document">
    
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Actualizar Registro <small class="NoReg"></small></h4>
        </div>
               
        <form method="POST" action="Metodos/Metodo_Actualizar_Reg.php" enctype="multipart/form-data">
        <div class="modal-body">
            <input type="hidden" name="idA" id="IdReg"/>
            <input type="hidden" name="prestamo_devolucion" id="PD">
                                  
            <div class="alert alert-warning">
                <a href="#" class="close" data-dismiss="alert">&times;</a><samp class="glyphicon glyphicon-warning-sign"></samp>
                <strong>¡ADVERTENCIA!</strong> <samll class="PD"></samll>
            </div>
            
            <legend><h4>Información <small>del Alumno o Profesor</small></h4></legend>
            
			<div class="form-group">
				<label>Ingeniería</label>
                <input  name="Ing" type="text" class="form-control" id="Ing" >
            </div>
			
			<div class="row">
			    <div class="form-group col-md-6">
                    <label>Matricula</label>
                     <input name="matricula" type="text" class="form-control" id="Matri" > 
                </div>
            </div>
                
            <div class="form-group">
                <label>Nombre </label>
                <input name="nombre" type="text" class="form-control" id="Nom">
            </div>
            
            <div class="row">        
                <div class="form-group col-md-6">
                    <label>Grado</label>
                    <input name="grado" class="form-control" id="Gra">
                </div>
                
                <div class="form-group col-md-6">
                    <label>Grupo </label>
                    <input name="grupo" class="form-control" id="Gru">
                </div>
            </div>
            
            <legend><h4>Información <small>de la Materia </small></h4></legend>
            
            <div class="form-group">
				<label>Materia</label>
                <input name="materia" type="text" class="form-control" id="Mat" required/>
            </div>
            
            <legend><h4>Fecha y Hora <small>del Prestamo o Devolución </small></h4></legend>	
            
            <div class="alert alert-info">
                <a href="#" class="close" data-dismiss="alert">&times;</a><samp class="glyphicon glyphicon-warning-sign"></samp>
                La actualizacion de la fecha y la hora de encuentra Deshabilitada.
            </div>
            
            <div class="row">              
                <div class="form-group col-md-6">
                    <label>Fecha</label>
                    <input name="fecha" type="date" class="form-control" id="Fe" readonly>
                </div>
                
                <div class="form-group col-md-6">
                    <label>Hora</label>
                    <input  name="hora" class="form-control" id="Ho" readonly>
                </div>
			</div>
			
			<legend>Material</legend>	
           
            <div class="row">
                <div class="form-group col-md-6">
                    <label>No. Mesa</label>
                    <input name="num_mesa" class="form-control" id="Me">
                </div>
                
                <div class="form-group col-md-6">
                    <label>No. Laptop</label>
                    <input name="material_1" class="form-control" id="M1">
                </div>
                
                <div class="form-group col-md-6">
                    <label>Cable Ethernet</label>
                    <input name="material_2" class="form-control" id="M2">
                </div>
                
                <div class="form-group col-md-6">
                    <label for="inputZip">Cable de Consola o Serial</label>
                    <input name="material_3" class="form-control" id="M3">
                </div>
                
                <div class="form-group col-md-6">
                    <label for="inputZip">Kit y Escaner</label>
                    <input name="material_4" class="form-control" id="M4">
                </div>
                
                <div class="form-group col-md-6">
                    <label for="inputZip">Router Cisco o T P Link</label>
                    <input name="material_5" class="form-control" id="M5">
                </div>
            </div>				
            
            <div class="form-group">
				<label>Observacion</label>
                <textarea name="Observacion" type="text" class="form-control"  placeholder="Comentario" id="Ob"></textarea>
            </div>
        
        </div>
        
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Cerra</button>
            <button type="submit" class="btn btn-primary" >Confirmar</button>
        </div>
    </form>    
    </div>
    
</div>
</div>
<!--End Modal Editar-->
