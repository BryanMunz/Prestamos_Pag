<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
<script src="../js/sweetalert.min.js"></script>
<style>
body{
    background-image: url(../Img/gears.jpg);
	background-size: 100vw 100vh;
	background-attachment:fixed;
	margin: 0;
    
}
</style>

<?php

include ("../../Conexion/conexion.php");

$DataBase1 = "prestamos";

$cone = mysqli_connect($ServerName, $User, $Password, $DataBase1);

@$prestamo_d = $_POST['prestamo_devolucion'];
@$Matri = $_POST['matricula'];

$consulta = mysqli_query($cone,"SELECT Prestamo_Devolucion,Matricula FROM prestamo WHERE Matricula='$Matri';");
while (@$re = mysqli_fetch_array($consulta)){
    
    @$Matricula2 = $re['Matricula'];
    @$Pres = $re['Prestamo_Devolucion'];
}
//va a buscar y no va encontrar ----------

if(@$Pres=="P r e s t a m o" and $prestamo_d=="P r e s t a m o"){///si no tiene ningun valor va a pasar al siguiente
	
        echo '<script language="javascript">
				swal({
					title: "Error",
					text: "Ya  has registrado un P R E S T A M O",
					icon: "warning",
					button: "Aceptar",
				})
                
                .then(function(){
                    window.location = "../../";
                });
                
			  </script>';
}

else if(@$Pres=="D e v o l u c i o n" and $prestamo_d=="D e v o l u c i o n"){///si no entra tampoco aqui entonces va insertar los datos 
	
        echo '<script language="javascript">
				swal({
					title: "Error",
					text: "Ya  has registrado una D E V O L U C I O N",
					icon: "warning",
					button: "Aceptar",
				})
                
                .then(function(){
                    window.location = "../../";
                });
                
			  </script>';

}
else{

    if(isset ($_POST['matricula'])        && !empty($_POST['matricula']) &&
       isset ($_POST['Ing'])                 && !empty($_POST['Ing']) &&
       isset ($_POST['nombre'])              && !empty($_POST['nombre']) &&
       isset ($_POST['materia'])             && !empty($_POST['materia']) &&
       isset ($_POST['grado'])         	  && !empty($_POST['grado']) &&
       isset ($_POST['grupo'])         	  && !empty($_POST['grupo']) &&
       isset ($_POST['fecha'])               && !empty($_POST['fecha']) &&
       isset ($_POST['hora'])                && !empty($_POST['hora']) &&
       isset ($_POST['num_mesa'])            && !empty($_POST['num_mesa']) &&
       isset ($_POST['material_1'])          && !empty($_POST['material_1']) &&
       isset ($_POST['material_2'])          && !empty($_POST['material_2']) &&
       isset ($_POST['material_3'])          && !empty($_POST['material_3']) &&
       isset ($_POST['material_4'])          && !empty($_POST['material_4']) &&
       isset ($_POST['material_5'])          && !empty($_POST['material_5']) &&
       isset ($_POST['prestamo_devolucion']) && !empty($_POST['prestamo_devolucion'])&&
       isset ($_POST['Observacion'])          && !empty($_POST['Observacion']))
    {
        
        mysqli_query($cone, "INSERT INTO prestamo (Matricula, Ing, Nombre, Materia, Grado, Grupo, Fecha, Hora, 
                                                   Num_Mesa, Material_1, Material_2, Material_3, Material_4, Material_5,
                                                   Prestamo_Devolucion, Observacion)
		
        VALUES ('$_POST[matricula]','$_POST[Ing]','$_POST[nombre]','$_POST[materia]',
                '$_POST[grado]','$_POST[grupo]','$_POST[fecha]','$_POST[hora]','$_POST[num_mesa]', '$_POST[material_1]','$_POST[material_2]','$_POST[material_3]','$_POST[material_4]',
                '$_POST[material_5]','$_POST[prestamo_devolucion]','$_POST[Observacion]')");
        
        echo '<script language="javascript">
				swal({
					title: "Registro Exitoso",
					text: "Tu informacion han sido registrada correctamente",
					icon: "success",
					button: "Aceptar",
				})
                
                .then(function(){
                    window.location = "../../";
                });
                
			  </script>';
	}
    
    else{
	
        echo '<script language="javascript">
				swal({
					title: "Error",
					text: "¡A surgido un problema! Intente Nuevamente",
					icon: "error",
					button: "Aceptar",
				})
                
                .then(function(){
                    window.location = "../../";
                });
                
			  </script>';
        
	}

}
?>