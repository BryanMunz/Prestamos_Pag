<?php
session_start();
session_destroy();
?>
<!DOCTYPE html>
<html lang="en">
<head>
   
    <!-- Required meta tags -->
	<meta charset="UFT-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximun-scale=1.0, minimun-scale=1.0">
		
	<link rel="icon" type="image/png" href="Img/Material.jpg"/>
		
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/styles.css">	
		
	<!-- Script  -->
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js" ></script>
	<script src="js/sweetalert.min.js"></script>

    <title>Prestamos o Devolución</title>
    
    <?php
        include ("../Conexion/conexion.php");
    ?>
    
    
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
              <a href="./"><img src="Img/Material.jpg" class="logo" alt="Prestamos"></a>
	</div>
        
    <div id="navbar" class="navbar-collapse collapse">
    	<ul class="nav navbar-nav navbar-right mainMenu">
        	<li><a href="N_Pre-Dev.php">Nuevo Registro</a></li>
            <li><a href="" data-toggle="modal" data-target="#Prestamo">Prestamos o Devolución</a></li>
        	<li><a href="../">Volver a Inicio</a></li>
        </ul>
    </div>
</div>
</nav>
</heder>

<div class="cont">
    <div class="container">	
	<div class="starter-template">
	<div class="row">
		<div class="col-md-6 col-md-offset-3">
		<div class="panel panel-default">
		<div class="panel-body">
        
        <h3>Registro General <small>Prestamos o Devolución</small></h3>
          
            <div class="imgcontainer">
                <img src="Img/Material.jpg" alt="Avatar" class="avatar">
                <h4><small>Laboratorio de Redes Cisco</small></h4>
            </div>
            
            <form action="Metodos/Metodo_Autenticar.php" method="POST" name="Pre-Dev">
               
                <div class="form-group">
                    <label>Usuario</label>
                    <input type="text" class="form-control" placeholder="Admi-Prestamo" readonly >
                </div>
                 
                <div class="form-group"> 
                    <label>Contraseña</label>
                    <input type="password" class="form-control" name="contra" required autofocus>
                </div>      

                <div class="form-group">
                    <button type="submit" class="btn btn-success btn-block">Siguiente
                    <i class="fa fa-chevron-right pull-right"></i>
                    </button>
                </div>
                
            </form>

		</div>
		</div>
	    </div>
	</div>
	</div>   
    </div><!-- /.container --> 
</div>

<?php include("Part/footer.php");?>

<?php include("prestamo.php"); ?>	

</body>


<style type="text/css">

.form-signin {
  width: 90%;
  max-width: 350px;
  margin: 0 auto;
}

.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
}

img.avatar {
    width: 30%;
}

    .cont{
        margin-top: 75px;
        margin-bottom: 0px;
    }
    
</style>

</html>