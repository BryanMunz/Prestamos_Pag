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
 
    $Del=$_POST['idE'];
 
    $DataBase1 = "prestamos";

    $cone = mysqli_connect($ServerName, $User, $Password, $DataBase1);

    $Delete = mysqli_query($cone, "DELETE FROM prestamo WHERE Id='$Del';");

    if($Delete){
        echo '<script language="javascript">
				swal({
					title: "Registro Eliminado",
					text: "El registro se a eliminado exitosamente",
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
					title: "Registro no Elininado",
					text: "Verifique e inténtelo nuevamente",
					icon: "warning",
					button: "OK",
				})
                
                .then(function(){
                    window.location = "../Reg_General.php";
                });
                
			</script>';
    }
?>