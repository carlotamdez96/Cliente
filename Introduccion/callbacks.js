function obtenMensaje(callback) {
    setTimeout(() => {
        let mensaje = "Este es el mensaje";
        callback(null, mensaje);
    }, 1000);
}
function imprimeMensaje(err, mensaje) {
    console.log("Mensaje... ", mensaje);
}

obtenMensaje(imprimeMensaje);
console.log("Fin del script");