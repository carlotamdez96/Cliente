import{cuestionario} from "./preguntas.js";




    function getImagen(){
        let cadena ="";
        for (let objeto of cuestionario) {  
            cadena += `<img src="./imagenes/${objeto.imagen}"  alt="Imagen de la ${objeto.imagen}">`;
           
        }
       
    return cadena;
    }
    


export{getImagen};