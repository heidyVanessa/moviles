function cambio(){
    document.getElementById("fondo").classList.add("rojo")
}
function textos(){
    document.getElementById("textouno").innerHTML="cambio";
    document.getElementById("textodos").innerHTML="cambio";
    document.getElementById("textotres").innerHTML="cambio";
}
function verificarN(){
    const numero = Number(document.getElementById("numero").value);

        if (numero > 10) {
            document.getElementById("resultado").innerHTML = "es mayor a 10";
        }
}

    var usuario={
        nombre:"heidy",
        edad:33,
        correo: "heidy@gmail.com"
    }
    function miodjeto(){
    document.getElementById("datos").innerHTML=`nombre:${usuario.nombre}, edad:${usuario.edad}, correo:${usuario.correo}`
}
function lista(){
    var notas=["migel","daniel","santiago","paula",usuario.nombre];
    for (var i=0; i<notas.length;i++){
        document.getElementById("lalista").innerHTML+=`<li>${notas[i]}</li>`
    }
}