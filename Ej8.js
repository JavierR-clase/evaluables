const prompt = require('prompt-sync')();
let opcion = 0;
const PI = 3.1415926;
while(opcion !=4){
   console.log(`
    Elija una opcion:
    ---------------------------
    >>1. Area Triangulo
    >>2. Area Cuadrado
    >>3. Area Circulo
    >>4. Salir
    `);
opcion = Number(prompt());
switch(opcion){
    case 1:
        let base = Number(prompt("Introduce la base: "));
        let altura = Number(prompt("Introduce la altura: "));
        let triangulo = base*altura/2;
        console.log("El area del triangulo es " + triangulo);
        break;
    case 2:
        let lado = Number(prompt("Introduce el lado: "));
        console.log("El area del cuadrado es " + lado*lado);
        break;
    case 3:
        let radio = Number(prompt("Introduce el radio: "));
        let circunferencia = radio*radio*PI;
        console.log("El area de la circunferencia es " + circunferencia);
        break;
    case 4:
        console.log("saliendo...");
    default:
        console.log("Opcion no encontrada, cerrando programa...");
        opcion = 4;
}
}