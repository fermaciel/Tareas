/* 2- Diseñar un algoritmo que  muestre por pantalla
la tabla de multiplicacion de un numero ingresado 
por el usuario
Para definir hasta que  numero desea que  muestre 
la tabla de multiplicacion, el usuario debera 
ingresar  tambien dicho valor */

//En este espacio declaro mis variables

let i: number;
let entero: number = 0;

//ingreso del numero el cual quiero saber la tabla
let numero: number = Number(
  prompt("ingrese el numero de la tabla a calcular:")
);
entero = numero;

function evaluar_numero_entero() {
  /*   while (entero <= 0) {
    entero = Number(prompt("Ingrese un numero: "));
  } */
  //if (entero % 1 !== 0) {
  while (entero % 1 !== 0 || entero <= 0) {
    entero = Number(prompt("Error: ingrese un numero entero positivo: "));
    // }
  }
  return entero;
}

function multiplicacion(numero: number, ingreseHastaQueNumero: number) {
  for (i = 1; i <= ingreseHastaQueNumero; i = i + 1) {
    console.log(numero + "x" + i + "=" + numero * i);
  }
}

evaluar_numero_entero();
numero = entero;
console.log("El numero ingresado es: " + numero);

//ingreso hasta que numero quiero saber mi tabla
let ingreseHastaQueNumero: number = Number(
  prompt("Ingrese hasta que número quiere ver la tabla")
);
entero = ingreseHastaQueNumero;
evaluar_numero_entero();
ingreseHastaQueNumero = entero;
console.log("quiero saber la tabla hasta el numero: " + ingreseHastaQueNumero);
console.log();
console.log("TABLA");
multiplicacion(numero, ingreseHastaQueNumero);
