<?php

$ServerName = "localhost";
$User = "root";
$Password = "lab_2016";
$DataBase = "bitacora";


$conecta = mysqli_connect($ServerName, $User, $Password, $DataBase);
if($conecta){
    echo "Conectado......";
}
 
else{
    echo "<script>
                alert('No se puede establecer conexion con el servidor. Revisa tu conexion a la Red. Si el problema persiste comuníquese con el Administrador.');
                window.location= '../'
            </script>";
}

?>
