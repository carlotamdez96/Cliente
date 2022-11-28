
window.onload = function(){
let cuestionario = [
/*Primera categoria*/
    {
        "categoria":"Cultura",
        "preguntas":[
            /*Primera pregunta*/
            {
                "tipo":"simple",
                "pregunta":"¿En que año piso el hombre la Luna por primera vez?",
                "respuestas":[
                    //Primera respuesta
                    {
                        "respuesta":"1969",
                        "correcta":"si"
                    },
                    //Segunda respuesta
                    {
                        "respuesta":"1979",
                        "correcta":""
                    },
                    //Tercera respuesta
                    {
                        "respuesta":"1970",
                        "correcta":""
                    }

                ]
            },
            //Segunda pregunta
            {
                "tipo":"simple",
                "pregunta":"¿Cuál es la capital de Filipinas?",
                "respuestas":[
                    {
                        "respuesta":"Hanoi",
                        "correcta":""
                    },
                    {
                        "respuesta":"Bangkok",
                        "correcta":""
                    },
                    {
                        "respuesta":"Manila",
                        "correcta":"si"
                    }
                ]
            }
        ]
    }
]



let contPreg = 0;
let contRespuesta=0;

    let nav = document.querySelector("nav");
    //Inicialmente creo un bucle del cuestionario, lo 1º que nos encontramos es la propiedad categoria. Creo en el nav referenciado una etiqueta a
    //esta etiqueta a contendrá href =# y el textContent será la categoria

    //Esto lo que hace es pintar el menu con los nombres de todas las categorias
    for (let objeto of cuestionario) {
        //Creo un elemento a

        var a = document.createElement("a");
        a.href="#";
        a.textContent=objeto.categoria;
        nav.appendChild(a);
    }

    //Debemos asociar a un array todos los objetos del cuestionario, en este momento solo hay un objeto

    let arrayCuestionario = cuestionario.filter(elementos => elementos.categoria.includes('Cultura'));

    // Ahora hay que recorrer este array. A continuación creare un section, el cual contendrá las  preguntas de esta categoria, y crearé un h1 que será el nombre de la categoria

    for (let cat of arrayCuestionario) {
        let encabezado = document.createElement("h1");
        encabezado.textContent= cat.categoria;
        var seccion = document.createElement("section");
        seccion.appendChild(encabezado);

        //Recorre las las preguntas iterando sobre ellas

        for (let preg of cat.preguntas) {
            
            //Creo un article y un h3
            var encabezado3 = document.createElement("h3");
            var article = document.createElement("article");
            encabezado3.textContent = preg.pregunta;
            article.appendChild(encabezado3);
            
            // Iteramos sobre las respuestas, que es una propiedad de preg. Creo un div que le añado el atributo class opcion, creo un input, un label y les asocio
            // los atributos necesarios para cada elemento. teniendo en cuenta que el atributo name, tiene que ser el mismo para cada respuesta de cada pregunta. Pero el id 
            //tendrá que ser diferente, para cada respuesta que irá asociada a un label el input

            for (let resp of preg.respuestas) {
                
                let divOpcion = document.createElement("div");
                divOpcion.classList.add("opcion");

                let input = document.createElement("input");
                input.type="radio";
                input.name="pregunta"+contPreg;
                input.id="item"+contRespuesta;

                let label = document.createElement("label");
                label.setAttribute("for","item"+contRespuesta);
                label.textContent=resp.respuesta;
                contRespuesta++;

                //Añado los elementos creados
                divOpcion.appendChild(input);
                divOpcion.appendChild(label);
                article.appendChild(divOpcion);
                seccion.appendChild(article);
                

            }
            document.body.appendChild(seccion);
            contPreg++;
            
        }
        
    }
}