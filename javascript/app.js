function encriptador() {
    let mensaje = document.getElementById("text1").value;
    let caso_mayus_acento = /^[^ÁÉÍÓÚáéíóúA-Z]+$/;
    if (caso_mayus_acento.test(mensaje)) {
        mensaje = mensaje.replace(/e/g, "enter")
                         .replace(/i/g, "imes")
                         .replace(/a/g, "ai")
                         .replace(/o/g, "ober")
                         .replace(/u/g, "ufat");
        actualizarMensajeEncriptado(mensaje);
    }
}

function desencriptador() {
    let mensaje = document.getElementById("text1").value;
    let caso_mayus_acento = /^[^ÁÉÍÓÚáéíóúA-Z]+$/;
    if (caso_mayus_acento.test(mensaje)) {
        mensaje = mensaje.replace(/enter/g, "e")
                         .replace(/imes/g, "i")
                         .replace(/ai/g, "a")
                         .replace(/ober/g, "o")
                         .replace(/ufat/g, "u");
        actualizarMensajeEncriptado(mensaje);
    }
}

function actualizarMensajeEncriptado(mensaje) {
    document.getElementById("mensaje_encriptado").innerHTML = mensaje;
    document.getElementById("text1").value = "";

    ["esperando_mensaje", "esperando_mensaje1", "esperando_mensaje2"].forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    document.getElementById("copiar").style.display = "block";
}

function copiarTexto() {
    let mensajeEncriptado = document.getElementById("mensaje_encriptado").innerText;
    navigator.clipboard.writeText(mensajeEncriptado).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}

document.getElementById("encriptar").addEventListener("click", encriptador);
document.getElementById("desencriptar").addEventListener("click", desencriptador);
document.getElementById("copiar").addEventListener("click", copiarTexto);
