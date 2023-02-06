function obtenMensaje() {
    setTimeout(() => {
        let mensaje = "Este es el mensaje";
        return mensaje;
    }, 1000);
}
function imprimeMensaje() {
    console.log("Mensaje... ", obtenMensaje());
}

imprimeMensaje();
console.log("Fin del script");