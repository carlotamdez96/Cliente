let arrayVegetales = ["Zanahoria","Calabaza","Cebolla","Tomate","Ajo"];
//Filtrar todos que tengan 6 o menos caracteres

var nuevaArray = arrayVegetales.filter(vegetal => vegetal.length<=6);
console.log(nuevaArray);

//Aray de objetos
let users = [
    {
      nombre: "Carlos",
      edad: 19,
      estado: false
    },
    {
      nombre: "Ana",
      edad: 15,
      estado: true
    },
    {
      nombre: "Andres",
      edad: 26,
      estado: true
    },{
        nombre: "Saúl",
        edad: 27,
        estado: true
      }
  ];
  //Condiciones que sea mayor de edad y su estado sea true

  function filtradoEdad(valor){
    return valor.edad>=18 && valor.estado==true;
  }
  let nuevosUsuarios = users.filter(filtradoEdad);
  console.log(nuevosUsuarios);






//Probar con array de objetos coches y precio
//Filtrar los coches que valne mas de 10000
let coches= [
    {
        marca: "BMW",
        precio: 12000,
        modelo: "cc",
        año: 2010
    },
    {
        marca: "Audi",
        precio: 18000,
        modelo: "a3",
        año: 2021
    },
    {
        marca: "Ford",
        precio: 5000,
        modelo: "Focus",
        año: 2009
    },
    {
        marca: "Mercedes",
        precio: 22000,
        modelo: "fsd",
        año: 2015
    },
    {
        marca: "Audi",
        precio: 20000,
        modelo: "a1",
        año: 2020
    },
    {
        marca: "BMW",
        precio: 2000,
        modelo: "c",
        año: 2002
    },{
        marca: "BMW",
        precio: 2000,
        modelo: "c",
        año: 2002
    }

];

//Filtrar coches que valen mas de 20.000
function cochescaros(valor){
    return valor.precio>=20000;
}
let cochesCarillos = coches.filter(cochescaros);
// console.log(cochesCarillos);

//Filtrar los coches de audi
function cochesAudi(valor){
    return valor.marca=="Audi";
}
let cochesGuays = coches.filter(valor => valor.marca=="Audi");
// console.log(cochesGuays);

//Filtrar coches viejos

let cochesViejos = coches.filter(valor => valor.año<=2009);
console.log(cochesViejos);

