'use strict'
let operador;
let numeros;
let resultado;
let comprobador;
let volverPreguntar;

class Calculadora {
    lastResult = Number(0);

    sumar(numeros) {
        return numeros[0] + numeros[1];
    }
    restar(numeros) {
        return numeros[0] - numeros[1];
    }
    multiplicar(numeros) {
        return numeros[0] * numeros[1];
    }
    dividir(numeros) {
        return numeros[0] / numeros[1];
    }
}

let calculadora = new Calculadora();

function comprobarOperador(operador) {
    operador = operador.trim();
    if (operador !== "/" && operador !== "*" && operador !== "+" && operador !== "-") {
        alert("¡Error! No has introducido una operación válida");
    } else {
        return operador;
    }
}

let filtrarNumeros = function (numeros) {

    numeros = numeros.trim();
    numeros = numeros.split(" ");
    if (numeros.includes("R")) {
        let posicion = Number(numeros.indexOf("R"));
        numeros[posicion] = Number(calculadora.lastResult);

    }
    numeros[0] = Number(numeros[0]);
    numeros[1] = Number(numeros[1]);
    return numeros;

}
let comprobarNumeros = function (numeros, comprobador) {
    for (let index = 0; index < numeros.length; index++) {
        if (isNaN(numeros[index])) {
            comprobador = false;
            break;
        }
    }

    if (comprobador === false) {
        alert("Has escrito algo que no son números. Vuélvalo a intentar");
    }
    return comprobador;
}

alert("Bienvenido usuario");

do {

    do {
        operador = prompt("Para empezar deberias escribir un operador de la operación a realizar(+, -, /, *)");
        operador = comprobarOperador(operador);
    } while (operador !== "/" && operador !== "*" && operador !== "+" && operador !== "-");

    do {
        comprobador = true;
        numeros = prompt("Escribe dos números separados por espacio");
        numeros = filtrarNumeros(numeros);
        comprobador = comprobarNumeros(numeros, comprobador);
    } while (comprobador === false);

    switch (operador) {
        case "/":
            resultado = calculadora.dividir(numeros);
            break;

        case "*":
            resultado = calculadora.multiplicar(numeros);
            break;

        case "-":
            resultado = calculadora.restar(numeros);
            break;

        case "+":
            resultado = calculadora.sumar(numeros);
            break;
    }

    calculadora.lastResult = resultado;
    alert(`El resultado de la operación es: ${resultado}`);
    volverPreguntar = confirm("Quieres hacer otra operacion pusa 'aceptar'.");

} while (volverPreguntar === true);

alert("Adios Usuario");