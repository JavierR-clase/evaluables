const prompt = require('prompt-sync')();
let n = Number(prompt("Introduce un numero del que se hará el factorial:"));
let flagformatOk = true;
if(Number.isNaN(n)){
    flagformatOk = false;
}
if(flagformatOk){
    let factorial=1;
    for(let i = 1;i<=n;i++){
        factorial= factorial*i;
    }
    console.log(factorial);
}