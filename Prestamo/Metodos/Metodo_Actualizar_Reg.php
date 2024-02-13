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
 
    include("../../Conexion/conexion.php");

    $idA   = $_POST['idA'];
	$IngA  = $_POST['Ing'];
    $matA  = $_POST['matricula'];
    $noA   = $_POST['nombre'];
    $gA    = $_POST['grado'];
	$grA   = $_POST['grupo'];
	$mA    = $_POST['materia'];
	$feA   = $_POST['fecha'];
    $hoA   = $_POST['hora'];
    $meA   = $_POST['num_mesa'];
    $ma1A  = $_POST['material_1'];
    $ma2A  = $_POST['material_2'];
    $ma3A  = $_POST['material_3'];
    $ma4A  = $_POST['material_4'];
    $ma5A  = $_POST['material_5'];
    $pdA   = $_POST['prestamo_devolucion'];
    $obA   = $_POST['Observacion'];
    
    $DataBase1 = "prestamos";

    $cone = mysqli_connect($ServerName, $User, $Password, $DataBase1);

	$Upda = mysqli_query($cone, "UPDATE prestamo SET Matricula='$matA', Ing='$IngA', Nombre='$noA', Materia='$mA', Grado='$gA', Grupo='$grA',
                                                        Hora='$hoA', Num_Mesa='$meA', Material_1='$ma1A', Material_2='$ma2A', Material_3='$ma3A',
                                                        Material_4='$ma4A', Material_5='$ma5A', Prestamo_Devolucion='$pdA', Observacion='$obA' 
                                                        WHERE Id='$idA';");
	
	if($Upda){
		echo '<script language="javascript">
				swal({
					title: "Registro Actualizado",
					text: "El registro se a actualizado exitosamente",
					icon: "success",
					button: "OK",
				})
                
                .then(function(){
                    window.location = "../Reg_General.php";
                });
                
			</script>';
	}
	else{
		echo '<script language="javascript">
				swal({
					title: "Registro no Actualizado",
					text: "Verifique su información e inténtelo de nuevo",
					icon: "warning",
					button: "OK",
				})
                
                .then(function(){
                    window.location = "../Reg_General.php";
                });
                
			</script>';
		
	}
 
 
?>