<?php
    session_start();
    session_destroy()
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
    <link rel="icon" type="image/png" href="Img/logo_ti.png" />
    
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/owl.carousel.css">
    <link rel="stylesheet" type="text/css" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" type="text/css" href="css/tarjetas.css">
    
    <title>Ing. en Tecnologías de la Información</title>
</head>

<body id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">

<!--   Pre Loader -->  
<section class="preloader">
    <div class="spinner">
        <span class="spinner-rotate"></span>
        <h4>Cargando....</h4>  
    </div>
</section>

    
<!--   Menu   -->
<section class="navbar custom-navbar navbar-fixed-top" role="navigation">
<div class="container">
    <div class="navbar-header">
        <button  class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Menu General</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        
        <!-- Logo -->
        <a href="./"><img src="Img/logo_ti.png" class="logo" alt="Ing. TI"></a>
    </div>
    
        <div class="collapse navbar-collapse">
       <ul class="nav navbar-nav navbar-right">
           <li><a href="#top" class="smoothScroll">Inicio</a></li>
           <li><a href="#registro" class="smoothScroll">Registro</a></li>
           <li><a href="" data-toggle="modal" data-target="#Prestamo">Prestamos</a></li>
       </ul> 
    </div>
</div>
</section>

<!-- Home -->                
<section id="inicio">
    <div class="row">
        <div class="owl-carousel owl-theme home-slider">
            
            <div class="item item-first">
                <div class="caption">
                <video autoplay muted loop id="myVideo">
                  <source src="Img/upt.mp4" type="video/mp4">
                </video>
                <div class="container">
                    <div class="col-md-6 col-sm-12">
                        <h1>Ingeniería en Tecnologías de la Información</h1>
                        <h3>Analiza las necesidades tecnológicas de tu entorno y plantea soluciones basadas en el manejo de datos, manipulación de redes y servidores, creación de aplicaciones web y dispositivos móviles.</h3>
                            
                        <button class="btn btn-lg section-btn" role="button" onclick="location.href='http://uptlax.edu.mx/?page_id=39'">Conocer más</button>
                    </div>
                </div>
                </div>
            </div>
            
            <div class="item item-second">
            <div class="caption">
                <video autoplay muted loop id="myVideo">
                  <source src="Img/Cisco.mp4" type="video/mp4">
                </video>       
                <div class="container">
                <div class="col-md-6 col-sm-12">
                    <h1>Laboratorio de Redes Cisco</h1>
                    <h3></h3>
                    
                    <button class="btn btn-lg section-btn" role="button" onclick="location.href='Cisco/'">Conocer más</button>
                </div>
                </div>
            </div>
            </div>

            <div class="item item-third">
            <div class="caption">
                <video autoplay muted loop id="myVideo">
                  <source src="Img/Op.mp4" type="video/mp4">
                </video> 
                <div class="container">
                <div class="col-md-6 col-sm-12">
                    <h1>Laboratorio de Open Source</h1>
                    <h3></h3>
                    
                    <button class="btn btn-lg section-btn" role="button" onclick="location.href='Os/'">Conocer más</button>
                </div>
                </div>
            </div>
            </div>

            <div class="item item-quarter">
            <div class="caption">
                <video autoplay muted loop id="myVideo">
                  <source src="Img/MAC.mp4" type="video/mp4">
                </video>
                <div class="container">
                <div class="col-md-6 col-sm-12">
                    <h1>Laboratorio de Mac</h1>
                    <h3></h3>
                    
                    <button class="btn btn-lg section-btn" role="button" onclick="location.href='Mac/'">Conocer más</button>
                </div>
                </div>
            </div>
            </div>                               
                                
        </div>
    </div>
</section>       

<!-- Registro -->
<section id="registro">
    <div class="tm-section-2">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                   <br>
                    <h2 class="tm-section-title">Laboratorios del UD4</h2>
                    <p class="tm-color-white">Ingeniería en Tecnologías de la Información.</p>
                </div>                
            </div>
        </div>        
    </div>
            
    <div class="tm-section tm-position-relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" class="tm-section-down-arrow">
            <polygon fill="#44a34f" points="0,0  100,0  50,60"></polygon>                   
        </svg> 
        
        <div class="container tm-pt-5 tm-pb-4 ">
        <div class="row text-center">               
            
            <article class="col-sm-12 col-md-4 col-lg-4 col-xl-4 tm-article">
                <h3 class="tm-color-primary">Lab. de Redes Cisco</h3>                            
                <img class="lab" src="Img/Lab_Cisco.png" alt="Lab_Cisco" width="200px">
                <h3 class="tm-color-primary tm-article-title-1">Registro del Docente, para el uso del Laboratorio y pase de asistencia de los alumnos.</h3>
                <a href="Cisco/Reg_Docente.php" class="btn btn-success btn-block">Registrar</a>
            </article>
            
            <article class="col-sm-12 col-md-4 col-lg-4 col-xl-4 tm-article">
                <h3 class="tm-color-primary">Lab. de Open Source</h3>                            
                <img class="lab" src="Img/Lab_OS.png" alt="Lab_OS" height="110px">
                <h3 class="tm-color-primary tm-article-title-1">Registro del Docente, para el uso del Laboratorio y pase de asistencia de los alumnos.</h3>
                <a href="Os/Reg_Docente_OS.php" class="btn btn-success btn-block">Registrar</a>                            
            </article>
            
            <article class="col-sm-12 col-md-4 col-lg-4 col-xl-4 tm-article">
                <h3 class="tm-color-primary">Lab. de Mac </h3>
                <img class="lab" src="Img/Lab_Mac.png" alt="Lab_Mac" width="110px">    
                <h3 class="tm-color-primary tm-article-title-1">Registro del Docente, para el uso del Laboratorio y pase de asistencia de los alumnos.</h3>
                <a href="Mac/Reg_Docente_Mac.php" class="btn btn-success btn-block">Registrar</a>                         
            </article>
        </div>        
        </div>
    </div>
    
    <div class="tm-position-relative tm-down">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" class="tm-section-down-arrow">
            <polygon fill="#44a34f" points="50,60 100,0 100,80 0,80 0,0"></polygon>                   
        </svg> 
    </div>
</section>

<!-- Footer -->
<section id="footer" class="custom-navbar"  role="navigation"> 
    <div class="container">
    <div class="row">
   
    <div class="col-md-4 col-sm-6">
        <div class="footer-info">
            <div class="section-title">
                <h2>Inicio</h2>
            </div>
            
            <address>
            <ul class="list-unstyled quick-links">
                <li><a href="#top" class="smoothScroll"><i class="fa fa-angle-double-right"></i>Inicio</a></li>
                <li><a href="#registro" class="smoothScroll"><i class="fa fa-angle-double-right"></i>Registro</a></li>
                <li><a href="" data-toggle="modal" data-target="#Prestamo"><i class="fa fa-angle-double-right"></i>Prestamos</a></li>
            </ul>
            </address>

        </div>
    </div>

    <div class="col-md-4 col-sm-6">
        <div class="footer-info">
            <div class="section-title">
                <h2>Laboratorios</h2>
            </div>
            
            <address>
            <ul class="list-unstyled quick-links">
                <li><a href="Cisco/"><i class="fa fa-angle-double-right"></i>Laboratorio de Redes Cisco</a></li>
                <li><a href="Os/"><i class="fa fa-angle-double-right"></i>Laboratorio Open Source</a></li>
                <li><a href="Mac/"><i class="fa fa-angle-double-right"></i>Laboratorio Mac</a></li>
            </ul>
            </address>

            <div class="footer_menu">
                <h2>Registro del Docente</h2>
                
                <address>
                <ul class="list-unstyled quick-links">
                    <li><a href="Cisco/Reg_Docente.php"><i class="fa fa-angle-double-right"></i>Reg. del Laboratorio de Redes Cisco</a></li>
                    <li><a href="Os/Reg_Docente_OS.php"><i class="fa fa-angle-double-right"></i>Reg. del Laboratorio de Open Source</a></li>
                    <li><a href="Mac/Reg_Docente_MAC.php"><i class="fa fa-angle-double-right"></i>Reg. del Laboratorio de Mac</a></li>
                </ul>
                </address>
            </div>
        </div>
    </div>

    <div class="col-md-4 col-sm-12">
        <div class="footer-info newsletter-form">
            <div class="section-title">
                <h2>Consulta de Registros </h2>
            </div>
            
            <address>
                <ul class="list-unstyled quick-link">
                    <li><a href=""><i class="fa fa-angle-double-right"></i>Consultar Registro Lab. de Redes Cisco</a></li>
                    <li><a href=""><i class="fa fa-angle-double-right"></i>Consultar Registro Lab. de Open Source</a></li>
                    <li><a href=""><i class="fa fa-angle-double-right"></i>Consultar Registro Lab. de Mac</a></li>
                </ul>
            </address>
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
        <ul class="social-icon">
            <li class="list-inline-item"><a href="https://www.facebook.com/SoyUPTx"><i class="fa fa-facebook"></i></a></li>
            <li class="list-inline-item"><a href="https://twitter.com/SoyUPTx"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="https://instagram.com/soyuptx"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="https://www.youtube.com/channel/UCY_jx-W3WBuGkYY1GRgBsLg"><i class="fa fa-youtube"></i></a></li>
        </ul>
        
       <p><u><a href="http://uptlax.edu.mx/">Universidad Politécnica de Tlaxacala,</a></u>
           Ingeniería en Tecnologías de la Información, Laboratorio de Redes CISCO</p>
            <p>© Plataforma desarrollada en el Laboratorio de Redes CISCO</p>
    </div>
    
    </div>	
    </div>
</section>

<?php include("prestamo.php"); ?>

     <!-- SCRIPTS -->
     <script src="js/jquery.js"></script>
     <script src="js/bootstrap.min.js"></script>
     <script src="js/owl.carousel.min.js"></script>
     <script src="js/custom.js"></script>

</body>

</html>