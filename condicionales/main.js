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
*/

//8

let numeroIncognita = 1;

let intentos = 2;

alert("Juguemos, adivina mi número");

Adivinanzas()

function Adivinanzas() {
  let numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 10"));
  if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 10) {
    alert("Ingresa solo números positivos del 1 al 10");
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
