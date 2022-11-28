import{cuestionario} from "./preguntas.js";
import{getImagen} from "./imagenesHTML.js";

window.onload = function(){

    var contPreg = 1;
    var contRespuesta=0;
    var test =[];
    //Referencias
        const nav = document.querySelector("nav");
        const encabezado = document.querySelector("header");
        const seccion = document.querySelector("section");
        const panelConImagenes = document.querySelector(".panelConImagenes");
        
        
        
        //Inicialmente creo un bucle del cuestionario, lo 1º que nos encontramos es la propiedad categoria. Creo en el nav referenciado una etiqueta a
        //esta etiqueta a contendrá href =# y el textContent será la categoria

        // En esta linea creo el h1 que va dentro del header, será el encabezado inicial.
        var tituloPrincipal = document.createElement("h1");
        var cont = document.createTextNode("Preguntados");
        tituloPrincipal.appendChild(cont);
        encabezado.appendChild(tituloPrincipal);
        
       
        //Esto lo que hace es pintar el menu con los nombres de todas las categorias
        for (let objeto of cuestionario) {
            //Creo un elemento a
    
            var divNav = document.createElement("div");
            divNav.classList="materias";
            divNav.textContent=objeto.categoria;
            nav.appendChild(divNav);
            
        //Manejador de eventos
        
        divNav.addEventListener("click",eleccion);
        }

        
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        panelConImagenes.innerHTML+=getImagen();
        
       
        //Funciones
       
        function eleccion(){
            var contPreg = 1;
            var contRespuesta=0;

            //En esta parte se cargará todo el contenido relacionado con la eleccion, las preguntas y respuestas
           for (let elemento of this.parentElement.children) {
              elemento.classList.remove("persiste");
           
           }
           this.classList.add("persiste");
           let tema =this.textContent;
           

           //a tema le asigno el contenido del siguiente elemento hermano de this, en este momento this es nav, y el hermano,
           //es section
        //    let tema = this.nextElementSibling.textContent;
           

           //La variable Test almacenará un objeto del array, el que este en tema
           test= cuestionario.filter(elementos => elementos.categoria.includes(tema));

           //Fine esto devuelve el primer objeto solamente!!

           //Eliminamos contenido anterior
           
           seccion.innerHTML="";
           
        

           //Primero colocaremos el encabezado de la eleccion, con su imagen correspondiente
           for (let mat of test) {
            
            let encabezadoMateria = document.createElement("div");
            encabezadoMateria.classList.add("encabezadoMateria");
          

            //Ahora vamos a crear el elemento img y le pasaremos la imagen que hemos selccionado
            let imagenMateria = document.createElement("img");
            imagenMateria.src="./imagenes/"+mat.imagen;
            imagenMateria.alt="Seccion de preguntados";

            let h2 = document.createElement("h2");
            h2.textContent=mat.categoria;
            
            encabezadoMateria.appendChild(imagenMateria);
            encabezadoMateria.appendChild(h2);

            seccion.appendChild(encabezadoMateria);


            //Segundo crearemos los elementos del cuestionario, para ello creare una etiqueta div, con la class contenido, la cual
            //contendrá todos los article, que serán bloques individuales con una pregunta y sus correspoendientes respuestas

            //Las preguntas estarán guardadas en un array de preguntas
            var divBloqueContenido = document.createElement("div");
            divBloqueContenido.classList.add("contenido");
            

            //Ahora creamos el article
            

            //El article contiene h3 y div opcion

            
            for (const pregunta of mat.preguntas) {
                let articleContenido = document.createElement("article");
                let divEncabezadoContenido = document.createElement("div");
                divEncabezadoContenido.classList.add("encabezadoPregunta");

                let h3 = document.createElement("h3");
                let spanNuevo = document.createElement("strong");
                spanNuevo.textContent=contPreg;
                divEncabezadoContenido.appendChild(spanNuevo);
                let contenido = document.createTextNode(pregunta.pregunta);
                h3.appendChild(contenido);
                divEncabezadoContenido.appendChild(h3);
                // h3.textContent=pregunta.pregunta;
                let tipoRespuesta = document.createElement("span");
                tipoRespuesta.textContent=pregunta.tipo;
                divEncabezadoContenido.appendChild(tipoRespuesta);
                articleContenido.appendChild(divEncabezadoContenido)
                var opciones = document.createElement("div");
                    opciones.classList.add("opcionesRespuestas");
                


                //Debemos iterar sobre las respuestas, que es una propiedad de pregunta
                for (const respuesta of pregunta.respuestas) {

                    
                    //Creamos el div que contendrá cada opcion de respuesta, label y input
                    let divOpcion = document.createElement("div");
                    divOpcion.classList.add("opcion");
                    let input = document.createElement("input");
                      
                    if(pregunta.tipo=="simple"){
                        input.type="radio";
                    }else{
                        input.type="checkbox";
                    }
                    input.name="pregunta"+contPreg;
                    input.value=respuesta.correcta;
                    input.id="item"+contRespuesta;
                  
                    
                    let label = document.createElement("label");
                    label.setAttribute("for","item"+contRespuesta);
                    label.textContent=respuesta.respuesta;
                    contRespuesta++;

                    //Añado los elementos creados
                    //Añado los elementos creados
                    divOpcion.appendChild(input);
                    divOpcion.appendChild(label);
                    opciones.appendChild(divOpcion);
                   
                    
                }
                articleContenido.appendChild(opciones);
                divBloqueContenido.appendChild(articleContenido);
                seccion.appendChild(divBloqueContenido);
                document.body.appendChild(seccion);
                contPreg++;
            }
         
            
           }
        var panelResultados = document.createElement("div");
        panelResultados.classList.add("resultados");
        let boton = document.createElement("button");
        boton.textContent = "Corregir";
        panelResultados.appendChild(boton);
        seccion.appendChild(panelResultados);
        boton.addEventListener("click",corrige);
          
        }
      
        

        //Funcion
        function corrige(){

            window.scrollTo({
                top:0,
                left:0,
                behavior:'smooth'
            });
            //Lo primero será sobre poner el div creado del mismo tamaño que el header

            let navegadorTransparente = document.querySelector(".ocultaNav");
            navegadorTransparente.style.display= "block";
            
            
            
            //Creo un fragment para guardar el cuestionario

            var fragment = new DocumentFragment();
          

            //Clono el contenido del encabezado donde se encuentra la materia y la foto
            let encabezadoClonado = document.querySelector(".encabezadoMateria").cloneNode(true);
            encabezadoClonado.classList.add("clonado");
            let hijos = encabezadoClonado.children;
            hijos[0].classList.add("imagenMateriaCorrecion");
            let textoIncluido = hijos[1].textContent;
            hijos[1].textContent="Correción de "+textoIncluido;
            fragment.appendChild(encabezadoClonado);
          

            let divContenidoCorrecion = document.createElement("div");
            divContenidoCorrecion.classList.add("cuerpoCorrecion");
            
        
        
         //   Lo siguiente será crear la parte de las preguntas
          let divBloqueContenidoCorregir = seccion.querySelectorAll("article");
                /* Mirar a ver el numero de la pregunta igual hay q mterlo en un span
                */
                for (let articulos of divBloqueContenidoCorregir) {
                    let fragmentParcial = new DocumentFragment();
                    let articuloClonado = articulos.cloneNode(true);

                    articuloClonado.firstChild.classList.add("encabezadoPreguntaCorreccion");
                    articuloClonado.firstChild.children[2].remove();
                    var spanCorrecion = document.createElement("span");
                    articuloClonado.firstChild.appendChild(spanCorrecion);
               //Aqui recorro las respuestas, y comprobare si son correctas o incorrectas y le cambiare los estilos

                for (let respuesta of articuloClonado.children[1].children) {
                    var contadorCorrectas=0;
                    var contadorIncorrectas=0;
                    let contadorRespuestaCorrecta=0;
                    let contChechBox=0;
                    if(respuesta.children[0].value=="si"){
                        respuesta.children[1].innerHTML+=`<i class="fa-sharp fa-solid fa-check"></i>`;
                         contadorRespuestaCorrecta++;
                    }
                    if(respuesta.children[0].checked && respuesta.children[0].value=="si"){
                        respuesta.children[1].style.backgroundColor="rgb(103, 235, 103)";
                        respuesta.style.backgroundColor="rgb(103, 235, 103)";
                        if(respuesta.children[0].type=="radio"){
                            contadorCorrectas++;
                            spanCorrecion.textContent="1";
                        }else{
                            contChechBox++;
                            if(contChechBox==contadorRespuestaCorrecta){
                                spanCorrecion.textContent="1";
                            }
                        }
                        
                    }else if(respuesta.children[0].checked && respuesta.children[0].value==""){
                        respuesta.children[1].style.backgroundColor="rgb(255, 98, 98)";
                        respuesta.style.backgroundColor="rgb(255, 98, 98)";
                        respuesta.children[1].innerHTML+=`<i class="fa-solid fa-xmark"></i>`;
                        contadorIncorrectas++;
                        spanCorrecion.textContent="0";
                    }
                       
                    
                   
                }
               // Añado los hijos
                    fragmentParcial.appendChild(articuloClonado);

                    
                    divContenidoCorrecion.appendChild(fragmentParcial);    
                }


                let divNotas = document.createElement("div");
            let divA = document.createElement("div");
            divNotas.classList.add("resultadoNotas");
            let h2Notas = document.createElement("h2");
            h2Notas.textContent="¡¡Resultados!!";
          
            
           

            
            divA.appendChild(h2Notas);
            divA.innerHTML+=`<br> <p>Has acertado ${contadorCorrectas} preguntas</p>
            <p>Has fallado ${contadorIncorrectas} preguntas </p>`
         
            divNotas.appendChild(divA);
            

            fragment.appendChild(divNotas);
                //Creo un boton para realizar un nuevo intento
                let divResultados = document.createElement("div");
                    divResultados.classList.add("resultados");
                    let boton = document.createElement("button");
                    boton.textContent="Nuevo intento"
                    divResultados.appendChild(boton);
                    divContenidoCorrecion.appendChild(divResultados);

                fragment.appendChild(divContenidoCorrecion);


            /* borro todo lo que estaba en seccion anteriormente*/
            seccion.innerText="";
            /*Añado el fragment a la seccion*/
            seccion.appendChild(fragment);
        
        }

        
    
    
    
    
}