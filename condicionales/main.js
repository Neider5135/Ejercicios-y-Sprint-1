/*
// Ejercicio 1
let num1 = 1
let num2 = 5
let num3 = 9

console.log("El primer número es " + num1 + ", el segundo es número " + num2 + " y el tercero es " + num3);

if (num1 > num2){
    console.log("El primer número es mayor que el segundo"); 
}
else {
    console.log("El segundo número es mayor que el primero"); 
}

// 2

if (num1 == num2){
    console.log("Los números son iguales");
}

else{
    console.log("Los números son diferentes");
}

// 3

if (num1 > num2){
    console.log("El primer número es mayor que el segundo");
}
else if (num1 < num2){
    console.log("El segundo número es mayor que el primero");
}
else {
    console.log("Los números son iguales");
}

// 4

console.log("Primer número: " + num1 + " Segundo número: " + num2 + " Tercer número " + num3);

if (num1<num2){
    if (num1<num3){
        console.log("El primer número es el más chico");
    }
    else{
        console.log("El tercer número es el más chico");
    }
}
else if (num2<num3){
    console.log("El segundo número es el más chico");
}
else{
    console.log("El tercer número es el más chico");
}


// 5

let persona1 = {
    nombre : "Carlos",
    edad : 26,
    altura : 188,
}

let persona2 = {
    nombre : "Camilo",
    edad : 45,
    altura : 161,
}

console.table(persona1)
console.table(persona2)

if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es mayor que " + persona2.nombre);
} else {
    console.log(persona2.nombre + " es mayor que " + persona1.nombre);
}

if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre + " es más alto que " + persona2.nombre);
} else {
    console.log(persona2.nombre + " es más alto que " + persona1.nombre);
}

// 6

let usuario = {
    nombre : prompt("¿Cuál es tu nombre?"),
    edad : prompt("¿Cuál es tu edad?"),
    altura : prompt("¿Cuál es tu altura en centímetros?"),
    visión : prompt("¿Cuál es la calidad de tu visión? Califique del 1 al 10"),
}

console.table(usuario)

if (parseInt(usuario.edad) >= 18) {
    if (parseInt(usuario.altura) > 150) {
        if (parseInt(usuario.visión) >= 8){
            alert ("Estás capacitado para conducir")
        } else if (isNaN) {
            alert ("Ingresa solo carácteres numéricos en visión")
        } else {
            alert ("No cumples con la calidad visual mínima requerida")
        }
    } else if (isNaN) {
        alert ("Ingresa solo carácteres numéricos en altura")
    } else {
        alert ("Debes medir más de 150 cm")
    }
} else if (isNaN) {
    alert ("Ingresa solo carácteres numéricos en edad")
} else {
    alert ("No tienes la edad necesaria")
}


// 7

let Inicio = prompt("Hola, para iniciar, dale aceptar");

if (Inicio == "null" || "NaN" || "undefined" || "") {
  permitirEntrada();
} else if (Inicio.toLowerCase().trim() == "hola") {
  alert("Gracias por saludar");
  permitirEntrada();
} else {
  alert("Gracias por visitarnos");
}

function permitirEntrada() {
  const nombre = prompt("Nombre").toLowerCase().trim();
  let entrada = prompt(
    "¿Tienes entrada? Escribe si, s o true si así es de lo contrario escribe no, n o false"
  ).toLocaleLowerCase().trim();
  if (
    !((entrada == "si") ||
    (entrada == "s") ||
    (entrada == "true") ||
    (entrada == "n") ||
    (entrada == "no") ||
    (entrada == "false"))
  ) {
    alert("Ingresa solo valores permitidos"), permitirEntrada();
  } else if (entrada == "no" || entrada == "n" || entrada == "false") {
    let dinero = parseInt(
      prompt("¿Cuánto dinero dispones? Ingrese solo números")
    );
    let Compra = prompt(
      "¿Desea comprar una entrada? Responda solo con si o no"
    ).toLocaleLowerCase().trim()
    if (Compra == "si") {
      if (dinero >= 1000) {
        alert("Compra aprobada! Bienvenido " + nombre);
        dinero -= 1000;
        alert("Ahora tienes " + dinero + "$");
      } else if (dinero < 1000) {
        alert("Te hacen falta ", 1000 - dinero, "$");
        alert("Compra no aprobada, gracias por visitarnos");
      } else if (dinero < 0) {
        alert("Ingresa solo números positivos en dinero");
      } else {
        alert("Ingresa solo números en dinero");
        permitirEntrada();
      }
    } else if (nombre.startsWith("neider")) {
      alert("Tienes entrada libre tocayo, bienvenido/a " + nombre);
    } else if (Compra == "no") {
      alert("Gracias por visitarnos");
    } else {
      alert("Ingrese solo valores permitidos en compra");
      permitirEntrada();
    }
  } else {
    let tipoEntrada = parseInt(
      prompt(
        "¿Qué tipo de entrada tienes? Escribe 1 para vip, 2 para normal"
      )
    );
    if (nombre.startsWith("neider")) {
      alert("Tienes entrada libre tocayo, bienvenido/a " + nombre);
    } else if (tipoEntrada === 1) {
      alert("Tienes pase libre VIP, bienvenido/a " + nombre);
    } else {
      if (entrada == "si" || entrada == "s" || entrada == "true") {
        Acepta = prompt("¿Desea usar la entrada? Responda solo con si o no").trim()
          .toLocaleLowerCase();
        if (Acepta == "si") {
          alert("Bienvenido/a " + nombre);
        } else if (Acepta == "no") {
          alert("Gracias por visitarnos");
        } else {
          alert("Ingrese solo si o no");
          permitirEntrada();
        }
      }
    }
  }
}


//8

let numeroIncognita = 1;

let intentos = 2;

alert("Juguemos, adivina mi número");

Adivinanzas()

function Adivinanzas() {
  let numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 10"));
  if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 10) {
    alert("Ingresa solo números positivos del 1 al 10");
    Adivinanzas()
  } else if (numeroIngresado == numeroIncognita) {
    alert("Acertaste!!");
    Volver = prompt("¿Quieres volver a jugar? Responde solo con si o no").toLocaleLowerCase().trim()
    if (Volver == "si"){
      intentos = 2
      Adivinanzas()
    }
    else if (Volver == "no" || Volver != "si"){
      alert("¡Gracias por jugar!")
    }
  } else if (numeroIngresado != numeroIncognita && intentos > 0) {
    alert("Tienes " + intentos + " intentos");
    intentos -= 1;
    Adivinanzas()
  } else if (intentos == 0){
    alert ("Fallaste")
    Volver = prompt("¿Quieres volver a jugar? Responde solo con si o no").toLocaleLowerCase().trim()
    if (Volver == "si"){
      intentos = 2
      Adivinanzas()
    }
    else if (Volver == "no" || Volver != "si"){
      alert("¡Gracias por jugar!")
    }
  }
}


//9

conseguirEdad(edad9 = parseInt(prompt("¿Qué edad tienes?")))

function conseguirEdad() {
if (isNaN(edad9) || edad9 < 0){
  alert ("Ingresa solo números positivos")
  conseguirEdad(edad9 = parseInt(prompt("¿Qué edad tienes?")))
}else if (edad9 >= 0 && edad9 < 12){
  alert ("Solo tienes " + edad9 + " años, eres un infante!")
  conseguirEdad(edad9 = parseInt(prompt("¿Qué edad tienes?")))
}else if (edad9 >= 13 && edad9 < 18){
  alert ("Tienes " + edad9 + " años, eres adolecente")
  conseguirEdad(edad9 = parseInt(prompt("¿Qué edad tienes?")))
}else if (edad9 >= 19 && edad9 < 45){
  alert ("Tienes " + edad9 + " años, eres un mayor joven")
  conseguirEdad(edad9 = parseInt(prompt("¿Qué edad tienes?")))
}else if (edad9 >= 46 && edad9 < 99){
  alert ("Tienes " + edad9 + " años, eres un anciano")
  if (edad9 < 60){
    alert("Aunque no tanto")
  }
  conseguirEdad(edad9 = parseInt(prompt("¿Qué edad tienes?")))
}else if (edad9 > 99){
  alert ("¿En serio tienes " + edad9 + " años? Increible!")
  conseguirEdad(edad9 = parseInt(prompt("¿Qué edad tienes?")))
}
}


//10

let tablero1 = ["puntos j1",0]
let tablero2 = ["puntos j2",0]

jugarPiedraPapeloTijeras()

function jugarPiedraPapeloTijeras() {
  let jugador1 = prompt(
    "Jugador 1, ingresa una acción entre piedra papel o tijeras"
  )
    .toLocaleLowerCase()
    .trim();
  if ((!(jugador1 == "piedra" || jugador1 == "papel" || jugador1 == "tijeras"))){
    alert("Jugador 1 ha hecho trampa")
    alert("De nuevo!!")
    jugarPiedraPapeloTijeras()
    } 
  let jugador2 = prompt(
    "Jugador 2, ingresa una acción entre piedra papel o tijeras"
  )
    .toLocaleLowerCase()
    .trim();
  if ((!(jugador2 == "piedra" || jugador2 == "papel" || jugador2 == "tijeras"))){
    alert("Jugador 2 ha hecho trampa")
    alert("De nuevo!!")
    jugarPiedraPapeloTijeras()
    }
  
  if (jugador1 == jugador2) {
    alert("De nuevo!!");
    jugarPiedraPapeloTijeras();
  }else if (
    (jugador1 == "piedra" && jugador2 == "tijeras") ||
    (jugador1 == "tijeras" && jugador2 == "papel") ||
    (jugador1 == "papel" && jugador2 == "piedra")
  ) {
    alert("Gana jugador 1");
    tablero1[1] += 1
    alert (tablero1)
    alert (tablero2)
    jugarPiedraPapeloTijeras()
  } else {
    alert ("Gana jugador 2");
    tablero2[1] += 1
    alert (tablero2)
    alert (tablero1)
    jugarPiedraPapeloTijeras()
  }
}


//11

let colorElegido = prompt("Di un color").toLocaleLowerCase().trim();

if (colorElegido == "marron") {
  colorElegido = "marrón"
}

switch (colorElegido) {
  case "blanco":
    alert("Falta de color");
    break;
  case "negro":
    alert("Falta de color");
    break;
  case "verde":
    alert("Color de la naturaleza");
    break;
  case "azul":
    alert("El color del agua");
    break;
  case "Amarillo":
    alert("El color del sol");
    break;
  case "rojo":
    alert("El color del fuego");
    break;
  case "marrón":
    alert("El color de la tierra");
    break;

  default:
    alert("!Excelente elección¡ No lo teníamos pensado");
    break;
}

*/

//12

let numer1 = prompt()
let numer2 = prompt()
let operacion = prompt()
Calculadora()

function Calculadora(numer1, numer2, operacion) {
  if (operacion == "suma"){
    let resultado = numer1 + numer2
    alert ("el resultado de " + numer1 + " + " + numer2 + " es igual a " + resultado)
  }
}