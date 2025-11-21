const prompt = require('prompt-sync')();
let opcion = 0;
let a = 0;
let b = 0;
let q = 0;
while(opcion !=6){
   console.log(`
    Elija una opcion:
    ---------------------------
    >>1. Suma
    >>2. Resta
    >>3. Multiplicación
    >>4. División
    >>5. Raiz
    >>6. Salir
    `);
    opcion = Number(prompt());
    switch(opcion){
    case 1:
        a = Number(prompt("Introduce el operando a: "));
        b = Number(prompt("Introduce el operando b: "));
        q = a+b;
        console.log("Resultado = " + q);
        break;
    case 2:
        a = Number(prompt("Introduce el operando a: "));
        b = Number(prompt("Introduce el operando b: "));
        q = a+b;
        console.log("Resultado = " + q);
        break;
    case 3:
        a = Number(prompt("Introduce el producto a: "));
        b = Number(prompt("Introduce el producto b: "));
        q = a*b;
        console.log("Resultado = " + q);
        break;
    case 4:
        a = Number(prompt("Introduce el Dividendo: "));
        b = Number(prompt("Introduce el Divisor: "));
        q = a/b;
        console.log("Resultado = " + q);
        break;
    case 5:
        a = Number(prompt("Introduce el operando del cual se hara raiz: "));
        q = Math.sqrt(a);
        console.log("Resultado = " + q);
        break;
    case 6:
        console.log("Saliendo...");
        break;
    default:
        console.log("Opcion no encontrada, cerrando programa...");
        opcion = 6;
}
}
