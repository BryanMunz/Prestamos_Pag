<!--Modal Elininar-->
<div class="modal fade" id="Eliminar" role="dialog">
<div class="modal-dialog" role="document">
    
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Eliminar Registro<small class="NoReg"></small></h4>
        </div>
               
        <form method="POST" action="Metodos/Metodo_Eliminar_Reg.php" enctype="multipart/form-data">
        <div class="modal-body">
            <input type="hidden" name="idE" id="IdReg"/>
           
            <div class="alert alert-danger">¿Seguro que quieres borrar 
                <strong id="NoReg" ></strong> ?
                <h5>Detalles del Registro</h5>
                
                <ul>
                    <li id="Ing"></li>
                    <li id="Matri"></li>
                    <li id="Nom"></li>
                    <li id="Gra"></li>
                    <li id="Gru"></li>
                    <li id="Ma"></li>
                    <li id="Fe"></li>
                    <li id="Ho"></li>
                    <li id="Me"></li>
                    <li id="M1"></li>
                    <li id="M2"></li>
                    <li id="M3"></li>
                    <li id="M4"></li>
                    <li id="M5"></li>
                    <li><strong id="PD"></strong></li>
                    <li id="OB"></li>
                </ul>
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
<!--End Modal Eliminar-->