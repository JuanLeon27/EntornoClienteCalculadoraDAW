"use strict"

let operador;
let numeros;
let resultado;
let comprobador;

function comprobarOperador(operador) {
    operador = operador.trim();
    if (operador !== "/" && operador !== "*" && operador !== "+" && operador !== "-") {
        alert("Operador incorrecto.");
    }
    return operador;
}

let filtrarNumeros = function (numeros) {
    numeros = numeros.trim();
    numeros = numeros.split(" ");
    numeros = numeros.filter(Number);
    numeros[0] = Number(numeros[0]);
    numeros[1] = Number(numeros[1]);
    return numeros;
}

let comprobarNumeros = function (numeros, comprobador) {
    for (let index = 0; index < numeros.length; index++) {
        if (isNaN(numeros[index])) {
            comprobador = false;
        }
    }

    if (comprobador === false) {
        alert("Has escrito algo que no son números. Vuélvalo a intentar");
    }
    return comprobador;
}

let dividir = (numeros) => numeros[0] / numeros[1];

let multiplicar = (numeros) => numeros[0] * numeros[1];

let restar = (numeros) => numeros[0] - numeros[1];

let sumar = (numeros) => numeros[0] + numeros[1];

alert("Bienvenido");

do {

    do {
        operador = prompt("Dime que operacion quieres realizar + , -, * ó /: ");
        operador = comprobarOperador(operador);
    } while (operador !== "/" && operador !== "*" && operador !== "+" && operador !== "-");

    do {
        comprobador = true;
        numeros = prompt("Escribe dos números separados por un espacio: ");
        numeros = filtrarNumeros(numeros);
        comprobador = comprobarNumeros(numeros, comprobador);
    } while (comprobador === false);

    switch (operador) {
        case "/":
            resultado = dividir(numeros);
            break;

        case "*":
            resultado = multiplicar(numeros);
            break;

        case "-":
            resultado = restar(numeros);
            break;

        case "+":
            resultado = sumar(numeros);
            break;
    }

    alert(`El resultado es: ${resultado}`);

} while (confirm("Quieres hacer otra operacion pusa 'aceptar'."));

alert("Adios Usuario");