    // Inicialmente creo un array de Objetos, estos objetos seran las categorias

    let cuestionario = [
        //Primer objeto categoria Historia
        
            { 
                "imagen":"historia.png",
                "categoria" : "Historia",
                "preguntas": [ //Las preguntas estarán en un Array de objetos
        
                /* Primer Objeto que será la primera pregunta */
                {
                    "tipo":"simple",
                    "pregunta":"¿En qué año el hombre pisó la Luna por primera vez?",
                    "respuestas": [
                  
                        {
                            "respuesta":"1969",
                            "correcta":"si"
                        },
                        {
                            "respuesta":"1979",
                            "correcta":""
        
                        },
                        {
                            "respuesta":"1970",
                            "correcta":""
                        }
                    
                    ]
        
                },
                /*Segunda Pregunta*/
                {
                    "tipo":"simple",
                    "pregunta":"¿Quién fue el primer presidente de Estados Unidos?",
                    "respuestas":[
                        {
                            "respuesta":"George Washington",
                            "correcta":"si"
                        },
                        {
                            "respuesta":"John Adams",
                            "correcta":""
                        },
                        {
                            "respuesta":"Thomas Jefferson",
                            "correcta":""
                        }
                    ]
                },
                /*Tercera pregunta*/
                {
                    "tipo":"multiple",
                    "pregunta":"¿Contra que paises lucharon en la Primera Guerra Mundial Gran Bretaña, Francia, Serbia y la Rusia Imperial?",
                    "respuestas":[
                        /*Será un Array de Objetos porque habrá mas de una respuesta correcta y hay que guardar un propiedad para saber si es correcta o no*/
                        {
                            "respuesta":"Alemania",
                            "correcta":"si"
                        },
                        {
                            "respuesta":"Estados Unidos",
                            "correcta":""
                        },
                        {
                            "respuesta":"Austria-Hungría",
                            "correcta":"si"
                        },
                        {
                            "respuesta":"Italia",
                            "correcta":""
                        } 
                    ]
        
                },
                /*Cuarta Pregunta*/
                {
                    "tipo":"simple",
                    "pregunta": " ¿Cuánto duró la Guerra de los Cien Años?",
                    "respuestas":[
                        {
                            "respuesta":"100 años",
                            "correcta":""
                        },
                        {
                            "respuesta":"160 años",
                            "correcta":""
                        },
                        {
                            "respuesta":"116 años",
                            "correcta":"si"
                        }
                    ]
        
                },
                /*Quinta pregunta */
                {
                    "tipo":"multiple",
                    "pregunta":"Nombre de los barcos que componían la expedición de Colón",
                    "respuestas":[
                        {
                            "respuesta":"Santa Maria",
                            "correcta":"si"
                        },
                        {
                            "respuesta":"Triana",
                            "correcta":""
                        },
                        {
                            "respuesta":"Pinta",
                            "correcta":"si"
                        },
                        {
                            "respuesta":"Niña",
                            "correcta":"si"
                        }
                    ]
                },
                /*Sexta Pregunta*/
                {
                    "tipo":"simple",
                    "pregunta":"¿Qué isla sirvió de prisión para Napoleón tras su derrota en la batalla de Waterloo?",
                    "respuestas":[
                        {
                            "respuesta":"Isla Margarita",
                            "correcta":""
                        },
                        {
                            "respuesta":"Isla Santa Elena",
                            "correcta":"si"
        
                        },
                        {
                            "respuesta":"Isla Santa María",
                            "correcta":""
                        }
                    ]
                }
        
                ]
        
        
            },
        /*Segundo Objeto de categoria */
            {
                "imagen":"geografia.png",
                "categoria":"Geografía",
                "preguntas":[
                    /*Primera Pregunta*/
                    {
                        "tipo":"simple",
                        "pregunta":" ¿Cuál es el río más caudaloso del mundo?",
                        "respuestas":[
                            {
                                "respuesta":"Nilo",
                                "correcta":""
                            },
                            {
                                "respuesta":"Amazonas",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Volga",
                                "correcta":""
                            }
                        ]
        
                    },
                    /*Segunda pregunta*/
                    {
                        "tipo":"multiple",
                        "pregunta":"¿Cuales son las dos lenguas más habladas del mundo?",
                        "respuestas":[
                            {
                                "respuesta":"chino mandarin",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"ingles",
                                "correcta":""
                            },
                            {
                                "respuesta":"español",
                                "correcta":"si"
                            }
                        ]
        
                    },
                    /*Tercera Pregunta*/
                    {
                        "tipo":"simple",
                        "pregunta":"¿Cuál es la capital de Brasil?",
                        "respuestas":[
                            {
                                "respuesta":"Rio de Janeiro",
                                "correcta":""
                            },
                            {
                                "respuesta":"São Paulo",
                                "correcta":""
                            },
                            {
                                "respuesta":"Brasilia",
                                "correcta":"si"
                            }
        
                        ]
                    },
                    /*Cuarta Pregunta */
                    {
                        "tipo":"simple",
                        "pregunta":"¿Cuál es la capital de Filipinas?",
                        "respuestas":[
                            {
                                "respuesta":"Manila",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Bangkok",
                                "correcta":""
                            },
                            {
                                "respuesta":"Hanoi",
                                "correcta":""
                            }
                        ]
        
                    },
        
                    /*Quinta Pregunta*/
                    {
                        "tipo":"simple",
                        "pregunta":"¿Cuál es el nombre de la capital de Albania?",
                        "respuestas":[
                            {
                                "respuesta":"Sofia",
                                "correcta":""
                            },
                            {
                                "respuesta":"Tirana",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Bucarest",
                                "correcta":""
                            }
        
                        ]
        
                    },
                    /*Sexta pregunta*/
                    {
                        "tipo":"multiple",
                        "pregunta":"¿Entre qué países podemos encontrar el Estrecho de Bering?",
                        "respuestas":[
                            {
                                "respuesta":"Estados Unidos",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Rusia",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Canadá",
                                "correcta":""
                            }
                        ]
                         
                    }
        
                ]
            }
        
            
        
        ];
export{cuestionario};