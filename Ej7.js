const prompt = require('prompt-sync')();
let flagformatOk = true;
let contadorpar=0;
let contadorimpar=0;
for(let i=0;i<20;i++){
    let n= Number(prompt("Introduce 20 numero(de 1 en 1): "))
    if(Number.isNaN(n)){
        flagformatOk=false;
    }
    if(flagformatOk){
        if(n %2==0){
            contadorpar++;
        }else{
        contadorimpar++;
        }
    }
}
console.log(`De los 20 numeros, ${contadorpar} son pares, y ${contadorimpar} impares`);