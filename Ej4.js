const prompt = require('prompt-sync')();
/*let N = Number(prompt("Introduce la cantidad de votos total:"));
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let porcentaje = 0;
let ganador = 0;
for(let i = 0; i< N;i++){
    let voto = Number(prompt("Introduce el numero de quien has votado(alcalde 1, alcalde 2, alcalde 3):"));
    if(voto === 1){
        contador1++;
    }else if(voto === 2){
        contador2++;
    }else{
        contador3++
    }
}  
if(contador1 > contador2 && contador1 > contador3){
    ganador = 1;
}else if(contador2 > contador1 && contador2 > contador3){
    ganador = 2;
}else{
    ganador = 3;
}
porcentaje = ganador*100/N;
console.log(`El ganador ha sido el alcalde ${ganador} con un porcentaje de ${porcentaje} de los votos`)*/
function leerdatosconValidacion(candidato){
    let num;
    do{
        num = Number(prompt("Introduzca votos del candidato " + candidato + ": "));
        if(Number.isNaN(num)){
            console.log("Formato incorrecto");
        }
    }while(Number.isNaN(num));

    return num;
}
let alcalde ="";
let votos1,votos2,votos3;
let max = -Infinity;
let contador=1;
let suma = 0;
while(contador <=3){
    let votos = leerdatosconValidacion(`candidato ${contador}`);
    if(votos>max){
        alcalde='candidato' + contador;
    }
    suma+=votos;
    switch(contador){
        case 1:
            votos1 = votos;
            break;
        case 2:
            votos2 = votos;
            break;
        case 3:
            votos3 = votos;
            break;
        default:
            break;
    }
    contador++;

}
console.log(`votos totales ${suma}.
    Votos candidato 1: ${votos1}
    porcentaje ${votos1*100/suma}.
    Votos candidato 2: ${votos2}
    porcentaje ${votos2*100/suma}.
    Votos candidato 3: ${votos3}
    porcentaje ${votos3*100/suma}.
    `)