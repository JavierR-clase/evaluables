/**Se desea programar un pequeño simulador de cajero automático para 
 * gestionar el saldo de una cuenta bancaria.
El saldo inicial estará guardado en una variable (por ejemplo, 
comenzando en 0 o en el valor que se decida).
El programa mostrará repetidamente un menú con estas opciones:

1. Consultar saldo
2. Ingresar dinero
3. Retirar dinero
4. Salir

Mientras el usuario no elija la opción 4, el menú seguirá apareciendo.
Se deberán implementar, al menos, los siguientes funciones:

    leerOpcionMenu():
    Muestra el menú y pide una opción al usuario.
    Valida que la opción esté entre 0 y 3; si no lo está, vuelve a pedirla.
    Devuelve la opción seleccionada.

leerCantidadPositiva():

    Pide una cantidad de dinero.
    Hasta que el usuario no escriba un valor mayor que 0, vuelve a pedir el valor.
    Devuelve la cantidad válida.

actualizarSaldo(saldo, cantidad, tipoOperacion):

    Recibe el saldo actual, una cantidad y el tipo de operación ("ingreso" o "retiro").
    Si es un ingreso, suma la cantidad al saldo y devuelve el nuevo saldo.
    Si es un retiro:
    Si la cantidad es mayor que el saldo actual, la función no cambia el saldo y 
    devolverá por ejemplo -1 para indicar error (saldo insuficiente).
    En caso contrario, resta la cantidad y devuelve el nuevo saldo. */


//Main
const prompt = require('prompt-sync')();
let opcion = 0;
let saldo = 0;
while(opcion !=4){
    console.log(`
        >>1. Consultar Saldo
        >>2. Ingresar Saldo
        >>3. Retirar Dinero
        >>4. Salir
        `)
    opcion = leerOpcion();
    if(opcion ===1){
        console.log(saldo);
    }else if(opcion ===4){
        
    }else{
        actualizarSaldo(saldo, leerCantidadDinero(), opcion);
    }
    
}

//Funciones

function leerOpcion(){
let tipoOperacion;
do{
    tipoOperacion = Number(prompt("Introduce el tipo de operacion: "));
}while(tipoOperacion <0 || tipoOperacion >4);
return tipoOperacion;
}
function leerCantidadDinero(){
let cantidad;
do{
    cantidad = Number(prompt("Introduce la cantidad de dinero: "));
}while(cantidad <0);
return cantidad;
}
function actualizarSaldo(saldo, cantidad, tipoOperacion){
saldo = 0;
switch(tipoOperacion){
    case 1:
        console.log(saldo);
        break;
    case 2:
        saldo = saldo + cantidad;
        console.log(`Saldo restante ${saldo}`);
        break;
    case 3:
        if(cantidad > saldo){
            console.log("NO DISPONE DE SUFICIENTE SALDO");
        }else{
            saldo = saldo - cantidad;
            console.log(`Saldo restante ${saldo}`)
        }
        break;
    case 4:
        console.log("Apagando cajero...");
        break;
    default:
        opcion = 4;
        console.log(`
            Operacion incorrecta
            Apagando...
            `);
}
}