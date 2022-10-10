"use strict"

alert("Bienvenido");
//Para volver cuando se haya confirmado si quiere hacer.
do {
    let repetir = true;

    //Para hacer bien el operador.
    let operador;
    do {
        operador = prompt("Dime que operacion quieres realizar + , -, * ó /: ");        
        operador = operador.trim();
        if (operador === "+" || operador === "-" || operador === "*" || operador === "/") {
            alert("Bien, operador correcto.");
            repetir = true;
        }else{
            alert("Operador incorrecto.");
            repetir = false;
        }

    } while (repetir == false);

    //Para hacer bien los operadores.
    let numerosJuntos;
    let numeros;
    do {
        let repetir = true;
        numerosJuntos=prompt("Dime dos numeros con un espacio para separar: ");
        numeros = numerosJuntos.split(" ");
        numeros[0]=Number(numeros[0]);
        numeros[1]=Number(numeros[1]);

        if (numeros.length == 2) {
            repetir = true;
            if (isNaN(numeros[0]) || isNaN(numeros[1])) {
                alert("Operadores incorrectos.");
                repetir = false;
            }

        }else{
            alert("Operadores incorrectos no son númesros.");
            repetir = false;
        }

    } while (repetir == false);

    //Calculo
    switch (operador) {
        case '+':
            alert(numeros[0] + numeros[1])
            break;

        case '-':
            alert(numeros[0] - numeros[1])
            break;    

        case '*':
            alert(numeros[0] * numeros[1])
            break;

        case '/':
            alert(numeros[0] / numeros[1])
            break;
    }
    
        
} while (confirm("Quieres hacer otra operacion pusa 'aceptar'."));

alert("Adios Usuario");


































































































































































































/*
do {
    let operador = prompt("Que operacion quieres hacer (+, -, * ó /)");
    operador = operador.trim();
    alert(operador);

    if (operador === "+" || operador === "-" || operador === "*" || operador === "/") {
       /*  let operandos = prompt("Dime los dos operandos divididos por espacio");
        let operandosRecortado = operandos.trim();
        let myArray = operadorRecortado.split(" ");
        alert("algo salio bien con el operador");
 
        //operandosRecortadoSin = Number(operadorRecortado);
    }else{
        alert("algo salio mal con el operador");

    }
    
        if (operando) {
            alert("acaguachita todo salio bien");
        }
        alert("me cago entodod todo salio muy mal");
    
    alert("algo salio mal con el operadorRecortado");
    alert(operadorRecortado);
} while (operador === "+" || operador === "-" || operador === "*" || operador === "/");
*/


