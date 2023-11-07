/*

//1
let miNombre
//2
let miApellido
//3
let miEdad
//4
let miMascota
//5
let edadMascota
//6
console.log(miNombre, miApellido, miEdad, miMascota, edadMascota)
//7
const nombreCompleto = miNombre + " " + miApellido;
//8
const textoPresentacion =
  "Mi nombre es " +
  nombreCompleto +
  " tengo " +
  miEdad +
  " años y tengo una mascota llamada " +
  miMascota +
  " que tiene " +
  edadMascota +
  " años";

  */
  /*

//9
let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad % edadMascota;
let divisionEdades = miEdad / edadMascota;

*/
/*

//10
miNombre = prompt("¿Cómo te llamas?");
miApellido = prompt("¿Cuál es tu apellido?");
miEdad = prompt("¿Cuántos años tienes?");
miMascota = prompt("¿Cómo se llama tu mascota?");
edadMascota = prompt("¿Cuántos años tiene tu mascota?");
console.log(miNombre, miApellido, miEdad, miMascota, edadMascota)
nombreCompleto = miNombre + " " + miApellido;
textoPresentacion =
  "Mi nombre es " +
  nombreCompleto +
  " tengo " +
  miEdad +
  " años y tengo una mascota llamada " +
  miMascota +
  " que tiene " +
  edadMascota +
  " años";
sumaEdades = miEdad + edadMascota;
restaEdades = miEdad - edadMascota;
productoEdades = miEdad % edadMascota;
divisionEdades = miEdad / edadMascota;

*/
/*

//11
let Alumno = {
  nombre: "Neider",
  apellido: "Núñez",
  edad: 23,
  mascota: "Paprika",
  edadMascota: 5,
};
console.table(Alumno)
console.table(Alumno.nombre)
console.table(Alumno.apellido)
console.table(Alumno.edad)
console.table(Alumno.mascota)
console.table(Alumno.edadMascota)

*/
/*

//12
let Mascota = {
  nombre: "Paprika",
  raza: "Criollo",
  edad: 10,
  dueño: "Neider",
  edadDueño: 23,
};
console.table(Mascota)
console.table(Mascota.nombre)
console.table(Mascota.raza)
console.table(Mascota.edad)
console.table(Mascota.dueño)
console.table(Mascota.edadDueño)
*/
/*

//13
let frutas = ["banano", "manzana", "piña", "mango", "sandía"];
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

//14

let números = [1, 2, 3, 4, 5];
console.log (números)
console.log (números[0])
console.log (números[1])
console.log (números[2])
console.log (números[3])
console.log (números[4])


//15

let familia = [
  persona1 = {
    nombre: "Juanito",
    apellido: "Perez",
    edad: 50,
    papelFamiliar: "Padre",
  },
  persona2 = {
    nombre: "Juanita",
    apellido: "De Perez",
    edad: 47,
    papelFamiliar: "Madre",
  },
  persona3 = {
    nombre: "Juanito. Jr",
    apellido: "Perez",
    edad: 21,
    papelFamiliar: "Hijo menor"
  },
  persona4 = {
    nombre: "Juanita",
    apellido: "Perez",
    edad: 23,
    papelFamiliar: "Hija del medio"
  },
  persona5 = {
    nombre: "Juancho",
    apellido: "Perez",
    edad: 25,
    papelFamiliar: "Hijo mayor"
  },
]

console.table (familia)
console.table (familia[0])
console.table (familia[1])
console.table (familia[2])
console.table (familia[3])
console.table (familia[4])


//16

let textoAleatorio = "Yo tenía 1 " + frutas[1] + " pero ahora hay " + números[3] + " frutas más así que le preguntaré a " + familia[0].nombre

console.log (textoAleatorio)

*/
/*

//17

let num01 = parseInt(prompt("Ingrese su edad"))
let num02 = parseInt(prompt("Ingrese la edad de su compañero"))

let soyMayor = num01>num02
let soyMenor =  num01<num02
let soyIgual = num01==num02

console.log ("a. Mi edad es igual a la de mi compañero:" + soyIgual)
console.log ("b. Mi edad es mayor a la de mi compañero:" + soyMayor)
console.log ("c. Mi edad es menor a la de mi compañero:" + soyMenor)

*/
/*
//18

let soyMayorDeEdad = parseInt(prompt("Ingrese su edad")) >= 18

console.log("Soy mayor de edad " + soyMayorDeEdad)

*/
/*

//19

let edadSubir = parseInt(prompt("Ingrese su edad"))
let alturaSubir = parseInt(prompt("Ingrese su altura"))

let operacion = edadSubir > 6 && alturaSubir >= 120

console.log("Puede subir a la atracción: "+ operacion)

*/
/*

//20

let tipoEntrada = prompt("Ingrese el tipo de entrada que posee (vip, normal o limitada)").toLocaleLowerCase().trim()
let saldo = parseInt(prompt("Ingrese el saldo que posee"))

let operacionEntrada = tipoEntrada == "vip" || saldo > 1000

console.log("La persona puede pasar: "+ operacionEntrada)
*/