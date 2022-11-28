var cadena = "En un lugar de la mancha, cuyo nombre no quiero acordarme.."
var letras = cadena.split("");

for (const iterator of letras) {
    if(iterator == "a"){
        continue;
    }else {
        console.log(iterator);
    }
}