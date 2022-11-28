let categorias = [
    /* Primer objeto*/
    {
       "categoria" : "Nivel uno" ,  /*Propiedad*/
       "preguntas" :[               /*Propiedad que contendrá un array de objetos*/
                /*Primer objeto del array*/
            {
                "pregunta" : "¿En qué año estamos?",
        
                "respuestas" : ["2021","2022","2020"]
            },
                /*Segundo objeto del array*/
            {
                "pregunta" : "¿En   que ciudad estamos?",/*Propiedad*/
        
                "respuestas" : ["Gijón","Oviedo","Aviles"]/*Propiedad que contendrá un array de String*/
            }
         ],
    },
    /*Segundo objeto*/
    {    
        "categoria" : "Nivel dos" , 
        "preguntas" :[
            {
                "pregunta" : "¿Cuál es la mejor provincia de España?",
        
                "respuestas" : ["Asturias","Madrid","Galicia"]
            }
        ]
    }   
];
/*Recorro las categorias*/
for (let categoria of categorias) {
    console.log(categoria.categoria);
    /*recorro las preguntas */
    for (let pregunta of categoria.preguntas) {
        console.log(pregunta.pregunta);
        /*recorro las respuestas de las preguntas*/
        for (let respuesta of pregunta.respuestas) {
         console.log(respuesta)
        }
     }
}
