const obtenMensaje = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let mensaje = "";
            if (mensaje !== "") resolve(mensaje)
            else reject("No hay mensaje...");
        }, 1000);
    })
}

obtenMensaje()
    .then((mensaje) => imprimeMensaje(mensaje))
    .catch((error) => imprimeMensaje(error));

function imprimeMensaje(mensaje) {
    console.log("Mensaje... ", mensaje);
}

console.log("Fin del script");