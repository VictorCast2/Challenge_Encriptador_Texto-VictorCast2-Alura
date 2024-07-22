function encriptador(){
    let mensaje = document.getElementById("text1").value;
    let caso_mayus_acento = /^[^ÁÉÍÓÚáéíóúA-Z]+$/;
    if(caso_mayus_acento.test(mensaje)){
        mensaje = mensaje.replace(/e/g, "enter");
        mensaje = mensaje.replace(/i/g, "imes");
        mensaje = mensaje.replace(/a/g, "ai");
        mensaje = mensaje.replace(/o/g, "ober");
        mensaje = mensaje.replace(/u/g, "ufat");
        document.getElementById("mensaje_encriptado").innerHTML = mensaje;
        document.getElementById("text1").value = "";

        let displayObjetos = document.getElementById("esperando_mensaje");
        displayObjetos.style.display = "none"

        let displayObjetos1 = document.getElementById("esperando_mensaje1");
        displayObjetos1.style.display = "none"

        let displayObjetos2 = document.getElementById("esperando_mensaje2");
        displayObjetos2.style.display = "none"

        let copiar_boton = document.getElementById("copiar");
        copiar_boton.style.display = "block";

    }

    

}

var encriptar_boton = document.getElementById("encriptar");
    encriptar_boton.addEventListener("click", encriptador);

    function desencriptador(){
        let mensaje = document.getElementById("text1").value;
        let caso_mayus_acento = /^[^ÁÉÍÓÚáéíóúA-Z]+$/;
        if(caso_mayus_acento.test(mensaje)){
            mensaje = mensaje.replace(/enter/g, "e");
            mensaje = mensaje.replace(/imes/g, "i");
            mensaje = mensaje.replace(/ai/g, "a");
            mensaje = mensaje.replace(/ober/g, "o");
            mensaje = mensaje.replace(/ufat/g, "u");
            document.getElementById("mensaje_encriptado").innerHTML = mensaje;
            document.getElementById("text1").value = "";
    
            let displayObjetos = document.getElementById("esperando_mensaje");
            displayObjetos.style.display = "none"
    
            let displayObjetos1 = document.getElementById("esperando_mensaje1");
            displayObjetos1.style.display = "none"
    
            let displayObjetos2 = document.getElementById("esperando_mensaje2");
            displayObjetos2.style.display = "none"
    
            let copiar_boton = document.getElementById("copiar");
            copiar_boton.style.display = "block";
    
        }
    
        
    
    }
    
    var dencriptar_boton = document.getElementById("desencriptar");
        dencriptar_boton.addEventListener("click", desencriptador);