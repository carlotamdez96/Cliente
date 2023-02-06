async function obtenMensaje() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let mensaje = "Este es el mensaje";
            resolve(mensaje)
        }, 1000);
    })
}

async function imprimeMensaje() {
    const mensaje = await obtenMensaje()
    console.log("Mensaje... ", mensaje);
}

imprimeMensaje();

console.log("Fin del script");