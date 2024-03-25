<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
<style>
body {
  font-family: sans-serif;
  background: rgb(255,255,255);
  }

h2{
  text-align: center;
  padding: 20px 20px;
}

h4{
  color: #FFFFFF;
}

p{
  font-size: 15px;
  padding:  0px 20px;
}

button{
  width: 60%;
  height: 50px;
  text-align: center;
  background-color: #1226aa;
  color: #ffffff;
  border-radius: 50px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}

.container{
  width: 100%;
  max-width: 550px;
  min-width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.content{
  background-color: #FFFFFF;
  box-shadow: 1px 1px 8px #ececec;
  padding: 10px 0px
}

.cover{
  background: url('https://biobotixlabs.com/wp-content/uploads/2020/10/Biobotix_Logo_2020_Negativo.png') center;
  background-size: 15%;
  background-repeat: no-repeat;
  width: 100%;
  height: 30px;
  padding: 20px 0px 60px 0px;
}

.hr{
  width: 100%;
  height: 0.75px;
  background-color: #E5E5E5;
}

.remarks{
  color: #B3B3B3;
  font-size: 12px;
}

.footer{
  text-align: center;
}

.footer a, .footer p{
  color: #FFFFFF;
  font-size: 12px;
}
</style>

<div class="container">
        <div class="cover"></div>
    <div class="content">
        <div>
        <h2>Estimado {{$data->name}} </h2>
            <p>{{ $user->name}} tiene preparado un plan de ejercicio para ti.

            <br>
            <br>
            Descarga el aplicativo para ingresar al programa de ejercicios terapéutico.</p>
            <p>Descarga la app en: </p>
            <p>Dispositivos Android: <a href="https://play.google.com/store/apps/details?id=com.biobotix.biobotixhome_flutterapp">(Biobotix Home - Apps on Google Play)</a></p>
            <p>Dispositivos IOS: <a href="https://apps.apple.com/mx/app/biobotix-home/id1581849917">(Biobotix Home)</a></p>
            <br><br>
            <p>O ingresa desde tu computadora en:<br>
            link web <a href="https://biobotixclinic.com/access">(https://biobotixclinic.com/access)</a>
            </p>


            <br>
            <br>
            <p>Las credenciales para abrir su programa son:</p><br>
            <p><strong>Año de nacimiento:</strong>  <i>{!!\Carbon\Carbon::parse($data->fecha_nacimiento)->format('Y')!!}</i></p>
            <p><strong>Código de programa:</strong> <i>{{$data->password}}</i></p>
            <br>
            <p>Estamos encantados de acompañarte en tu proceso de recuperación.</p>
            <p>En este correo se encuentra anexo un videotutorial sobre el ingreso a la plataforma para guiarte en el proceso. Si existen problemas para la autenticación, comunícate con nosotros a biobotix.desarrollador@gmail.com</p>
            <a href="https://youtu.be/J5tVsuRhyaI">Videtutorial para abrir aplicación móvil</a>
            <br>
            <p>
            Te saluda con gusto,
            <br>
            Equipo de soporte de Biobotix labs :)
            </p>
            <div class="hr"></div>
            <p class="remarks">Si ha recibido este correo electrónico por error,<a href="#">Reporte</a>.</p>
        </div>
    </div>
    <div class="footer">
      <p style="color: #1226aa">
        Biobotix Labs
        <br>
        <br>
        <a style="color: #1226aa" href="https://biobotixclinic.com/access">Login</a>｜<a style="color: #1226aa" href="#">Acerca de</a>
      </p>
    </div>
</div>
</body>
</html>

