<!DOCTYPE html>
<html lang="en">
<head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximun-scale=1.0, minimun-scale=1.0">

    <link rel="icon" type="image/png" href="Img/Material.jpg"/>	

    <!-- CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/dataTables.bootstrap.min.css"> 		
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    
    <!-- Script  -->
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.dataTables.min.js"></script>  
    <script src="js/dataTables.bootstrap.min.js"></script>    

    <?php
        include("../Conexion/conexion.php");
        include("Metodos/Metodo_Seguridad.php");
    ?>
		
	<title>Registro General De Prestamos o Devolución</title>
		
</head>

<body>
<heder>
<nav class="navbar navbar-default navbar-fixed-top">
<div class="container">
   	<div class="navbar-header">
		<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        	<span class="sr-only">Toggle navigation</span>
        	<span class="icon-bar"></span>
        	<span class="icon-bar"></span>
        	<span class="icon-bar"></span>
     	</button>
              <a href="./"><img src="Img/Material.jpg" class="logo" alt="Prestamo"></a>
	</div>
        
    <div id="navbar" class="navbar-collapse collapse">
    	<ul class="nav navbar-nav navbar-right mainMenu">
            <li><a href="../">Salir</a></li>		  
        </ul>
    </div>
</div>
</nav>
</heder>
		
<div class="conte">		

<div class="container">
<div class="table-responsive">
<legend align="center">
<h4>Registro General <small>Prestamos o Devolución</small></h4>
<h4><small>Laboratorio de Redes Cisco</small></h4>
</legend>
			
    <table id="employee_data" class="table-hover table-bordered">
        <thead>	
	        
	       <tr>
            	<th></th>
				<th colspan="6">Información del Alumno</th>
				<th colspan="2">Fecha y Hora de la Solicitud</th>
				<th colspan="3">Información del Prestamo</th>
				<th></th>
			</tr>
					
			<tr>
				<th>ID</th>
				<th>Ingeniería</th>
				<th>Matricula</th>
				<th>Nombre</th>
				<th>Grado</th>
				<th>Grupo</th>
				<th>Materia</th>
				<th>Fecha</th>
				<th>Hora</th>
                <th>Material</th>
				<th>Prestamo o Devolucion</th>
				<th>Observacion</th>
                <th>Acciones</th>
			</tr>
        </thead>
				
		<?php
        
          $DataBase1 = "prestamos";
          
		  $cone = mysqli_connect($ServerName, $User, $Password, $DataBase1);		
		 
          $Prod = mysqli_query($cone, "SELECT Id, Matricula,Ing, Nombre, Materia, Grado, Grupo, Fecha, Hora, Num_Mesa, Material_1, Material_2, Material_3, Material_4, Material_5, Prestamo_Devolucion, Observacion FROM prestamo ORDER BY Id");
				
		  while($row = mysqli_fetch_array($Prod)){
              echo '<tr class="t">
						<td class="ali">'.($row["Id"]).'</td>
                        <td>'.($row["Ing"]).'</td>
						<td class="ali">'.($row["Matricula"]).'</td>
						<td>'.($row["Nombre"]).'</td>
						<td class="ali">'.($row["Grado"]).'</td>
                        <td class="ali">'.($row["Grupo"]).'</td>
                        <td>'.($row["Materia"]).'</td>
						<td>'.($row["Fecha"]).'</td>
						<td>'.($row["Hora"]).'</td>
                        <td class="ali">'.'<button type="button" class="btn btn-info" data-toggle="modal" data-target="#Material"
                                            data-id="'.($row["Id"]).'" data-matri="'.($row["Matricula"]).'" data-mesa="'.($row["Num_Mesa"]).'"
                                            data-m1="'.($row["Material_1"]).'" data-m2="'.($row["Material_2"]).'" data-m3="'.($row["Material_3"]).'" 
                                            data-m4="'.($row["Material_4"]).'" data-m5="'.($row["Material_5"]).'" 
                                            title="Ver Material"><samp class="glyphicon glyphicon-eye-open"></samp></button>'.'</td>
                                
						<td>'.($row["Prestamo_Devolucion"]).'</td>
						<td>'.($row["Observacion"]).'</td>
                        
                        <td class="ali">'.'<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#Editar"
                                            data-id="'.($row["Id"]).'" data-ing="'.($row["Ing"]).'" data-matri="'.($row["Matricula"]).'" 
                                            data-nom="'.($row["Nombre"]). '" data-gra="'.($row["Grado"]).'" data-gru="'.($row["Grupo"]).'" 
                                            data-mat="'.($row["Materia"]).'" data-fe="'.($row["Fecha"]).'" data-hor="'.($row["Hora"]).'"
                                            data-mesa="'.($row["Num_Mesa"]).'" data-m1="'.($row["Material_1"]).'" 
                                            data-m2="'.($row["Material_2"]).'" data-m3="'.($row["Material_3"]).'" 
                                            data-m4="'.($row["Material_4"]).'" data-m5="'.($row["Material_5"]).'"
                                            data-pd="'.($row["Prestamo_Devolucion"]).'" data-ob="'.($row["Observacion"]).'"
								            title="Actualizar"><samp class="glyphicon glyphicon-pencil"></samp></button>
				               
				                           <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#Eliminar"
                                            data-id="'.($row["Id"]).'" data-ing="'.($row["Ing"]).'" data-matri="'.($row["Matricula"]).'" 
                                            data-nom="'.($row["Nombre"]). '" data-gra="'.($row["Grado"]).'" data-gru="'.($row["Grupo"]).'" 
                                            data-mat="'.($row["Materia"]).'" data-fe="'.($row["Fecha"]).'" data-hor="'.($row["Hora"]).'"
                                            data-mesa="'.($row["Num_Mesa"]).'" data-m1="'.($row["Material_1"]).'" 
                                            data-m2="'.($row["Material_2"]).'" data-m3="'.($row["Material_3"]).'" 
                                            data-m4="'.($row["Material_4"]).'" data-m5="'.($row["Material_5"]).'"
                                            data-pd="'.($row["Prestamo_Devolucion"]).'" data-ob="'.($row["Observacion"]).'"
                                            title="Eliminar"><samp class="glyphicon glyphicon-trash"></samp></button>'.'</td>
					</tr>';
			} 
		?>		
	</table>	
</div>
</div>

</div>

<!-- Manda a llamar el codigo de Actualizar Registro -->
<?php include("Acciones/Mod_Material_Reg.php");?>
<!--				- - -				--> 

<!-- Manda a llamar el codigo de Actualizar Registro -->
<?php include("Acciones/Mod_Actualizar_Reg.php");?>
<!--				- - -				--> 

<!-- Manda a llamar el codigo de Eliminar Registro -->
<?php include("Acciones/Mod_Eliminar_Reg.php");?>
<!--

<!-- Manda a llamar el codigo de la busqueda -->
<?php //include("Acciones/Mod_Asistencia.php");?>
<!--				- - -				-->   

<?php include("Part/footer.php");?>
                   	        	        
</body>
</html>

 <script type="text/javascript"> 
     
 $(document).ready(function(){  
      $('#employee_data').DataTable({
          
            "aLengthMenu": [[10,25,50, -1], [10,25,50, "Todo"]],
          
			language: {
				"sProcessing":     "Procesando...",
				"sLengthMenu":     "Mostrar _MENU_ registros",
				"sZeroRecords":    "No se encontraron resultados",
				"sEmptyTable":     "Ningún dato disponible en esta tabla",
				"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
				"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
				"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
				"sInfoPostFix":    "",
				"sSearch":         "Buscar General:",
				"sUrl":            "",
				"sInfoThousands":  ",",
				"sLoadingRecords": "Cargando...",
				"oPaginate": {
					"sFirst":    "Primero",
					"sLast":     "Último",
					"sNext":     "Siguiente",
					"sPrevious": "Anterior"
				},
				"oAria": {
					"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
					"sSortDescending": ": Activar para ordenar la columna de manera descendente"
				}
            }
	  });  
 });
</script>

<script type="text/javascript"> 
    
$('#Material').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
        var recipient_id = button.data('id')
        var recipient_matri = button.data('matri')
        var recipient_mesa = button.data('mesa')
        var recipient_m1 = button.data('m1')
        var recipient_m2 = button.data('m2')
        var recipient_m3 = button.data('m3')
        var recipient_m4 = button.data('m4')
        var recipient_m5 = button.data('m5')
    
    var modal = $(this)
        modal.find('.NoReg').text(' Registro No. ' + recipient_id)
        modal.find('.Matri').text(' De la Matricula ' + recipient_matri)
        modal.find('#mesa').val(recipient_mesa)
        modal.find('#M1').val(recipient_m1)
        modal.find('#M2').val(recipient_m2)
        modal.find('#M3').val(recipient_m3)
        modal.find('#M4').val(recipient_m4)
        modal.find('#M5').val(recipient_m5)
});
</script>         
                
<script type="text/javascript"> 
    
$('#Editar').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
        var recipient_id = button.data('id')
        var recipient_ing = button.data('ing')
        var recipient_matri = button.data('matri')
        var recipient_nom = button.data('nom')
        var recipient_gra = button.data('gra')
        var recipient_gru = button.data('gru')
        var recipient_mat = button.data('mat')
        var recipient_fe = button.data('fe')
        var recipient_ho = button.data('hor')
        var recipient_mesa = button.data('mesa')
        var recipient_m1 = button.data('m1')
        var recipient_m2 = button.data('m2')
        var recipient_m3 = button.data('m3')
        var recipient_m4 = button.data('m4')
        var recipient_m5 = button.data('m5')        
        var recipient_pd = button.data('pd')
        var recipient_ob = button.data('ob')
    
    var modal = $(this)
        modal.find('.NoReg').text('   Registro No. ' + recipient_id)
		modal.find('.PD').text('   Desea actualizar un o una ' + recipient_pd)
        modal.find('#IdReg').val(recipient_id) 
        modal.find('#Ing').val(recipient_ing)
        modal.find('#Matri').val(recipient_matri)
        modal.find('#Nom').val(recipient_nom)
        modal.find('#Gra').val(recipient_gra)
        modal.find('#Gru').val(recipient_gru)
        modal.find('#Mat').val(recipient_mat)
        modal.find('#Fe').val(recipient_fe)
        modal.find('#Ho').val(recipient_ho)
        modal.find('#Me').val(recipient_mesa)
        modal.find('#M1').val(recipient_m1)
        modal.find('#M2').val(recipient_m2)
        modal.find('#M3').val(recipient_m3)
        modal.find('#M4').val(recipient_m4)
        modal.find('#M5').val(recipient_m5)
        modal.find('#PD').val(recipient_pd)
        modal.find('#Ob').val(recipient_ob)
    
});
</script> 


<script type="text/javascript"> 
    
$('#Eliminar').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
        var recipient_id = button.data('id')
        var recipient_ing = button.data('ing')
        var recipient_matri = button.data('matri')
        var recipient_nom = button.data('nom')
        var recipient_gra = button.data('gra')
        var recipient_gru = button.data('gru')
        var recipient_mat = button.data('mat')
        var recipient_fe = button.data('fe')
        var recipient_ho = button.data('hor')
        var recipient_mesa = button.data('mesa')
        var recipient_m1 = button.data('m1')
        var recipient_m2 = button.data('m2')
        var recipient_m3 = button.data('m3')
        var recipient_m4 = button.data('m4')
        var recipient_m5 = button.data('m5')        
        var recipient_pd = button.data('pd')
        var recipient_ob = button.data('ob')
    
    var modal = $(this)
        modal.find('.NoReg').text('   Codigo de Registro: ' + recipient_id)
        modal.find('#NoReg').text('   el Registro No: ' + recipient_id)
        modal.find('#Ing').text('Ingeniería: ' + recipient_ing)
        modal.find('#Matri').text('Matricula: ' + recipient_matri)
        modal.find('#Nom').text('Nombre: ' + recipient_nom)
        modal.find('#Gra').text('Grado: ' + recipient_gra)
        modal.find('#Gru').text('Grupo: ' + recipient_gru)
        modal.find('#Ma').text('Materia: ' + recipient_mat)
        modal.find('#Fe').text('Fecha: ' + recipient_fe)
        modal.find('#Ho').text('Hora: ' + recipient_ho)
        modal.find('#Me').text('Mesa: ' + recipient_mesa)
        modal.find('#M1').text('Laptop: ' + recipient_m1)
        modal.find('#M2').text('Cable Ethernet: ' + recipient_m2)
        modal.find('#M3').text('Cable de Consola o Serial: ' + recipient_m3)
        modal.find('#M4').text('Kit y Escaner: ' + recipient_m4)
        modal.find('#M5').text('Router Cisco o T P Link: ' + recipient_m5)
        modal.find('#PD').text('Desea eliminar un o una: ' + recipient_pd)
        modal.find('#OB').text('Observación: ' + recipient_ob)
    
    
        modal.find('#IdReg').val(recipient_id)
       
});
</script> 

