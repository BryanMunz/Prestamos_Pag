<?php 
include("../Conexion/conexion.php");

@$Matri=$_POST['matricula'];

$DataBase1 = "prestamos";

$cone = mysqli_connect($ServerName, $User, $Password, $DataBase1);

$consulta=mysqli_query($cone,"SELECT Matricula,Ing,Nombre,Materia,Grado,Grupo,Num_Mesa,
                                        Material_1,Material_2,Material_3,Material_4,Material_5,
                                        Prestamo_Devolucion,Observacion 
                                        FROM prestamo WHERE Matricula='$Matri';");

while (@$re=mysqli_fetch_array($consulta)){
    @$Matricula2=$re['Matricula'];
    @$Ing=$re['Ing'];
    @$Nom=$re['Nombre'];
    @$Materia=$re['Materia'];
    @$Gra=$re['Grado'];
    @$Gru=$re['Grupo'];
    @$Num=$re['Num_Mesa'];
    @$Mat1=$re['Material_1'];
    @$Mat2=$re['Material_2'];
    @$Mat3=$re['Material_3'];
    @$Mat4=$re['Material_4'];
    @$Mat5=$re['Material_5'];
    @$Press=$re['Prestamo_Devolucion'];
    @$Obser=$re['Observacion'];
}

@$dev="D e v o l u c i o n";

if(@$Matricula2==null){
    echo"<script>
          alert('Error,  antes debe hacer un Prestamo');
          location.href='../';
         </script>";
}



?>