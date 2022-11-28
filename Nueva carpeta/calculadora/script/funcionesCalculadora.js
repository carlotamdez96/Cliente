// Defino las variables globales
var operacion = "";
const operandos = {
    operando1: 0,
    operando2: 0
};
var cadena;
var resultado = "";
var sol;
const longitudDisplay = 30;
const memoria = [];
var maxmemoria = 10;
//Hasta que no cargue la ventana no realizara el sript
window.onload = function () {



    //Referencias a los elementos
    const display = document.querySelector("input");
    const botonesNum = document.querySelectorAll('button[class="digito"]');
    const botonesOp = document.querySelectorAll('button[data-operacion]');
    const memoriadetalle = document.querySelector('div[class="memoria-detalle"]');
    const cortinaMemoria = document.querySelector('button[data-operacion="muestramemoria"]');




    // Manejadores de evento

    for (let boton of botonesNum) {
        boton.addEventListener("click", procesaNum);
    }

    for (let boton of botonesOp) {
        boton.addEventListener("click", operaciones);
    }

    cortinaMemoria.addEventListener("click",funcionMemoriaCortina);
    memoriadetalle.style.top="0px";
    // Funcion para procesar todas las operaciones sobre la calculadora

    function funcionMemoriaCortina(){
        let contenido = parseInt(memoriadetalle.style.top);
        memoriadetalle.style.top = (contenido==0)? "-570px" : "0";
    }
    function operaciones() {
        var nombreoperacion = this.getAttribute("data-operacion");

        switch (nombreoperacion) {

            case "borrarmemoria":
                break;
            case "recuperarmemoria":
                break;
            case "sumamemoria":
                display.value=memoria[memoria.length-1];
                break;
            case "restamemoria":
                display.value=memoria[memoria.length-1];
                break;
            case "almacenamemoria":
                if(memoria.length<maxmemoria){
                memoria.push(display.value);
                
                restablecer();
                }
                break;
            case "muestramemoria":
                memoriadetalle.innerHTML=""; // lo borra todo lo escrito
                for (const iterator of memoria) {
                    memoriadetalle.innerHTML += `<div class="valor-MiMemoria"> ${iterator} </div>`
                };
                break;
            case "aritmetica":
                if (this.textContent != "=") {
                    operacion = this.textContent;
                    operandos.operando1 = parseFloat(display.value);

                    switch (operacion) {

                        case "x":
                            operacion = "*";
                            break;

                        case String.fromCharCode(247):
                            operacion = "/";
                            break;
                    }
                    // El display lo pongo asi para permitir que los numeros se puedan repetir en el display
                    display.value = "";
                    // Hago esto para que una vez que de el resultado no me deje insertar numeros, pero si realizar operaciones
                    // sobre el resultado
                    resultado = "";
                }
                break;

            case "digitoespecial":
                //Aqui tengo que añadir actualiza display
                switch (this.textContent) {
                    case String.fromCharCode(960):
                        display.value = Math.PI;
                        break;

                    case "e":
                        display.value = Math.E;
                        break;
                }
                break;

            case "unario":
                operandos.operando1 = parseFloat(display.value);
                // UTITLIZAR ACTUALIZA DISPLAY
                switch (this.textContent) {
                    //revisar esto poque me deja añadir numeros
                    case "cos":
                        operacion = "*";
                        operandos.operando1 = Math.cos(operandos.operando1);
                        operandos.operando2 = (180 / Math.PI);
                        sol = `${operandos.operando1} ${operacion} ${operandos.operando2}`;
                        display.value = eval(sol);
                        
                        
                        // RESTABLECER LA CALCULADORA CREAR FUNCION
                        break;
                    case "sin":
                        operacion = "*";
                        operandos.operando1 = Math.sin(operandos.operando1);
                        operandos.operando2 = (180 / Math.PI);
                        sol = `${operandos.operando1} ${operacion} ${operandos.operando2}`;
                        display.value = eval(sol);
                        break;
                        // RESTABLECER LA CALCULADORA CREAR FUNCION

                    case "x2":
                        operacion = "*";
                        operandos.operando2 = operandos.operando1;
                        break;
                    case "1/x":
                        operacion = "/";
                        operandos.operando2 = operandos.operando1;
                        operandos.operando1 = 1;
                        sol = `${operandos.operando1} ${operacion} ${operandos.operando2}`;
                        display.value = eval(sol);
                        // RESTABLECER LA CALCULADORA CREAR FUNCION
                        break;
                    case "%":
                        operacion = "/";
                        operandos.operando2 = 100;
                        sol = `${operandos.operando1} ${operacion} ${operandos.operando2}`;
                        display.value = eval(sol);
                  
                        break;

                    case String.fromCharCode(8730):
                        display.value = Math.sqrt(operandos.operando1);

                        break;

                }
               
                resultado = "="; // esto es para que una vez que me de el resultado no me deje añadir numero

                break;

            case "resolver":
                //UTILIZAR CONVERTIR OPERADOR
                operandos.operando2 = parseFloat(display.value);
                resultado = `${operandos.operando1} ${operacion} ${operandos.operando2}`;
                display.value = eval(resultado);
                break;

            case "coma":
                if(display.value.indexOf("." == -1)){
                    display.value += ",";
                }
                
                break;

            case "borrarParcial":
                display.value = 0;
                break;

            case "borrarTotal":
                operandos.operando1 = 0;
                operandos.operando2 = 0;
                operacion = "";
                resultado = "";
                display.value = 0;
                break;

            case "retroceso":
                display.value = display.value.slice(0, display.value.length - 1);
                if (display.value == 0) {
                    display.value = "0";
                }
            break;

            

        }

    }
    // Funciones para procesar los numeros

    function procesaNum() {
        if (resultado == "") { // para no poder añadir numeros al resultado final

            if (operacion == "") { // Entra por aqui si es el primer operador

                if (this.textContent == "+/-") {
                    // para añadir el signo negativo
                    
                    display.value = -(display.value);
                  //  actualizaDisplay(display.value); aqui habria que colocarlo
                } else {

                    display.value = (display.value == 0) ? display.value = this.textContent : display.value += this.textContent;
                  
                    
                }

            } else { // entra por aqui si es el 2 operador

                if (this.textContent == "+/-") {
                    // para añadir el signo negativo
                    display.value = -(display.value);
                    
                } else {
                    display.value = (display.value == "") ? display.value = this.textContent : display.value += this.textContent;
                }

            }
        }

    }

    function restablecer(){
        operandos.operando1 = 0;
        operandos.operando2 = 0;
        operacion = "";
        resultado = "";
        display.value = 0;
    }
    // Aqui estaran las funciones actualizaDIsplay y concertirAOperador, las cuales me serviran para colocar en el display el numero
    //con notacion decimal es decir 1000 poner 1.000 y la coma ponerla , en lugar de punto y la funcion convertirAOperador hara lo mismo pero sentido
    //contrario

    function actualizaDisplay(cadenaDisplay){
        if(typeof(cadenaDisplay) === "string"){
            if(cadenaDisplay.indexOf(",") == -1){
                cadenaDisplay= cadenaDisplay.replace(/\./g,"");
                cadenaDisplay = Number(cadenaDisplay).toLocaleString("de-DE");
            }
        }else{
            cadenaDisplay = cadenaDisplay.toLocaleString("de-DE");
        }
       
        display.value= cadenaDisplay;
    }

    function resulveOperando (cadenaDisplay,operandos){
        cadenaDisplay = cadenaDisplay.replace(/\./g,"");
        cadenaDisplay = cadenaDisplay.replace(",",".");
        operandos= Number.parseFloat(cadenaDisplay);

    }


}

// revisar la coma, no la evalua bien, y revisar porque al iniviar la calcu si quiero poner 0,25 +1 por ejemplo no me resuelve bien
// tambien revisar que me deja añadir varias comas
