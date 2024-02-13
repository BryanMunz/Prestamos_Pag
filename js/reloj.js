function show(){
    var Digital = new Date()
    
    var hora = Digital.getHours()
    var minutos = Digital.getMinutes()
    var segundos = Digital.getSeconds()
    
    if(hora == 0)
        hora = 12
    
    if(minutos <= 9)
        minutos = "0" + minutos
    
    if(segundos <= 9)
        segundos = "0" + segundos
    
    time = hora + ":" + minutos + ":" + segundos
    
    document.RegDocente.HEntrada.value = time
    
    setTimeout("show()", 1000)
}
show()        