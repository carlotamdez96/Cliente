async function obtenMensaje() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let mensaje = "Este es el mensaje";
            resolve(mensaje)
            throw "Errorrr";
        }, 1000);
    })
}

async function imprimeMensaje() {
    const mensaje = await obtenMensaje()
    console.log("Mensaje... ", mensaje);
    // try{
    //     console.log("Mensaje... ", mensaje);
    // }catch(e){
    //     console.log(e);
    // }
    
}

imprimeMensaje();

console.log("Fin del script");