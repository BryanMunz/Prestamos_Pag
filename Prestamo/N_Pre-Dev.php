<?php
session_start();
session_destroy();
?>
<!DOCTYPE html>
<html lang="en">	
<head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximun-scale=1.0, minimun-scale=1.0">

    <link rel="icon" type="image/png" href="Img/Material.jpg"/>	
    
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">		
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    
    <!-- Script  -->
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery-1.11.1.min.js"></script>
    
    <title>Nuevo Registro de Prestamo</title>
    
    <?php include ("../Conexion/conexion.php");?>
    
</head>

<body>
<?php include("Part/header.php"); ?>	
			
<div class="conte">
    <br>
	<div class="container-fluid">	
	<div class="starter-template">
	<div class="row">
		<div class="col-md-6 col-md-offset-3">
		<div class="panel panel-default">
		<div class="panel-body">
			
			<form name="R_Pre-Dev" action="Metodos/Metodo_Procesar.php" method="POST" onLoad="CambiarFormulario();">
			
			<legend>
			     <h4>Nuevo Registro de Prestamo.
			        <small>De Equipos y Herramienta <br>Laboratorio de Redes Cisco</small>
			     </h4>
            </legend>
            
            <div class="alert alert-warning">
                <a href="#" class="close" data-dismiss="alert">&times;</a><samp class="glyphicon glyphicon-warning-sign"></samp>
                <strong>¡IMPORTANTE!</strong> Favor de llenar los campos correctamente.
            </div>
            
            <legend><h4>Desea Realizar <small>un</small></h4></legend>
            
            <div class="form-group">
                <select name="prestamo_devolucion" id="disabledSelect" class="form-control">
                    <option> P r e s t a m o </option>
                    <option disabled> D e v o l u c i o n </option>
                </select>
            </div>
            
            <legend><h4>Información <small>del Alumno o Profesor</small></h4></legend>
            
			<div class="form-group">
				<label>Ingeniería</label>
                <select type="text" name="Ing" class="form-control">
                    <option>Tecnologias de la Informacion</option>
                    <option>Mecatronica</option>
                    <option>Industrial</option>
                    <option>Quimica</option>
                    <option>Financiera</option>
                    <option>Biotecnologia</option>
                </select>
            </div>
			
			<div class="row">
			    <div class="form-group col-md-6">
                    <label>Matricula</label>
                     <input name="matricula" type="text" class="form-control" placeholder="Matricula o numero de trabajador"  required> 
                </div>
            </div>
                   
            <div class="form-group">
                <label>Nombre </label>
                <input name="nombre" type="text" class="form-control" placeholder="Escriba su Nombre Completo" required>
            </div>
            
            <div class="row">        
                <div class="form-group col-md-6">
                    <label>Grado</label>
                    <select name="grado" class="form-control">
                      <option> 1ro </option>
					  <option> 2do </option>
                      <option> 3ro </option>
                      <option> 4to </option>
                      <option> 5to </option>
					  <option> 6to </option>
					  <option> 7mo </option>
					  <option> 8vo </option>
					  <option> 9no </option>
					  <option> 10mo </option>
                      <option> Otro </option>
                    </select>
                </div>
                
                <div class="form-group col-md-6">
                    <label>Grupo </label>
                    <select name="grupo" class="form-control">
                      <option> A </option>
                      <option> B </option>
                      <option> C </option>
                      <option> D </option>
                      <option> E </option>
                      <option> F </option>
                      <option> G </option>
                      <option> H </option>
                      <option> I </option>
                      <option>Otro</option>
                    </select>
                </div>
            </div>
            
            <legend><h4>Información <small>de la Materia </small></h4></legend>
            
            <div class="form-group">
				<label>Materia</label>
                <input name="materia" type="text" class="form-control" placeholder="Escriba el nombre de la Materia " required/>
            </div>
            
            <legend><h4>Fecha y Hora <small>del Prestamo</small></h4></legend>	
            
            <div class="alert alert-info">
                <a href="#" class="close" data-dismiss="alert">&times;</a><samp class="glyphicon glyphicon-warning-sign"></samp>
                La fecha y la hora se asignan automáticamente.
            </div>
            
            <div class="row">              
                <div class="form-group col-md-6">
                    <label>Fecha</label>
                    <input name="fecha" type="date" class="form-control" value="<?php echo $fecha=date("Y-m-d"); ?>" readonly >
                </div>
                
                <div class="form-group col-md-6">
                    <label>Hora</label>
                    <input  name="hora" class="form-control" value="<?php echo $hora=date("h:i a"); ?>" readonly>
                </div>
			</div>
			
			<legend><h4>Material <small>que desa solicitar</small></h4></legend>	
           
            <div class="row">
                <div class="form-group col-md-6">
                    <label>No. Mesa</label>
                    <select name="num_mesa" class="form-control">
                      <option> No </option>
                      <option> Mesa_1</option>
                      <option> Mesa_2</option>
                      <option> Mesa_3</option>
                      <option> Mesa_4</option>
                      <option> Mesa_5</option>
                      <option> Mesa_6</option>
                      <option> Mesa_7</option>
                      <option> Mesa_8</option>
                      <option >Mesa_9</option>
                      <option selected> No </option>
                    </select>
                </div>
                
                <div class="form-group col-md-6">
                    <label>No. Laptop</label>
                    <select name="material_1" class="form-control" id="material_1" onChange="CambiarFormulario();">
                        <option> No </option>
                        <option> L a p _ 0 1 </option>
                        <option> L a p _ 0 2 </option>
                        <option> L a p _ 0 3 </option>
                        <option> L a p _ 0 4 </option>
                        <option> L a p _ 0 5 </option>
                        <option> L a p _ 0 6 </option>
                        <option> L a p _ 0 7 </option>
                        <option> L a p _ 0 8 </option>
                        <option> L a p _ 0 9 </option>
                        <option> L a p _ 1 0 </option>
                        <option> L a p _ 1 1 </option>
                        <option> L a p _ 1 2 </option>
                        <option selected> No </option>
                    </select>
                </div>
                
                <div class="form-group col-md-6">
                    <label>Cable Ethernet</label>
                    <select name="material_2" class="form-control">
                        <option> No </option>
                        <option> 01_Cable Ethernet </option>
                        <option> 02_cables_Ethernet </option>
                        <option> 03_cables_Ethernet </option>
                        <option> 04_Cables_Ethernet </option>
                        <option> 05_Cables_Ethernet </option>
                        <option> 06_Cables_Ethernet </option>
                        <option selected> No </option>
                    </select>
                </div>
                
                <div class="form-group col-md-6">
                    <label for="inputZip">Cable de Consola o Serial</label>
                    <select name="material_3" class="form-control">
                        <option> No </option>
                        <option>Cable_Consola</option>
                        <option>Cable_Serial</option>
                        <option>Cable_Consola_Serial</option>
                        <option selected> No </option>
                    </select>
                </div>
                
                <div class="form-group col-md-6">
                    <label for="inputZip">Kit y Escaner</label>
                    <select name="material_4" class="form-control">
                        <option> No </option>
                        <option>Kit_cable_U T P</option>
                        <option> Kit_U T P y Scanner </option>
                        <option>Scanner_U T P</option>
                        <option>Kit_Desarmadores</option>
                        <option selected> No </option>
                    </select>
                </div>
                
                <div class="form-group col-md-6">
                    <label for="inputZip">Router Cisco o T P Link</label>
                    <select name="material_5" class="form-control">
                        <option> No </option>
                        <option>Router_Cisco_01 </option>
                        <option>Router_Cisco_02 </option>
                        <option>Router_Cisco_03 </option>
                        <option>Router_Cisco_04 </option>
                        <option>Router_T P_Link_01 </option>
                        <option>Router_T P_Link_02 </option>
                        <option>Router_T P_Link_03 </option>
                        <option>Router_T P_Link_04 </option>
                        <option>Router_T P_Link_05 </option>
                        <option selected> No </option>
                    </select>
                </div>
            </div>				
            
            <div class="form-group">
				<label>Observación</label>
                <textarea  name="Observacion" type="text" class="form-control"  placeholder="Comentario....."></textarea>
            </div>
            
			<button type="submit" name="submit" class="btn btn-success btn-block">Registrar</button>	
			</form>
			
		</div>
		</div>
		</div>
	</div>
	</div>
	</div><!-- /.container --> 
</div>

<?php include("Part/footer.php"); ?>	
</body>

<script language="javaScript">
			function CambiarFormulario(){
				switch(document.forms[0].material_1.selectedIndex){
					case 0: 
					document.forms[0].Lap_01.disabled=true;
					document.forms[0].Lap_02.disabled=false;
					document.forms[0].Lap_03.disabled=false;
					document.forms[0].Lap_04.disabled=false:
					document.forms[0].Lap_05.disabled=false;
					document.forms[0].Lap_06.disabled=false;
					document.forms[0].Lap_07.disabled=false;
					document.forms[0].Lap_08.disabled=false;
					document.forms[0].Lap_09.disabled=false;
					document.forms[0].Lap_10.disabled=false;
					document.forms[0].Lap_11.disabled=false;
					document.forms[0].Lap_12.disabled=false;
				}
			}
		</script>
</html>


<style>
    .panel-body{
        background-color: 
    }
</style>