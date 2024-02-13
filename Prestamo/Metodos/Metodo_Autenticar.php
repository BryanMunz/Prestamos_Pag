<?php
  	include("../../Conexion/conexion.php");

	@$cont=$_POST['contra'];

	@$admi=mysqli_query($conecta, "select Pass from admin;");
        
        while (@$re=mysqli_fetch_array($admi)){
            
            @$Pass=$re['Pass'];
        }
        
        if(isset($cont) && isset($Pass)){
            if ($cont==$Pass){
                
                session_start();
                $_SESSION["autenticado"] = "SI";
                
                header ("Location: ../Reg_General.php");
            }
            
            else{
                echo"<script>
                        alert('!!Contraseña Invalida¡¡');
                        window.location= '../'
                     </script>";
            }
        }
  mysqli_close($conecta);
?>