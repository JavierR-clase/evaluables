const prompt = require('prompt-sync')();
let n = Number(prompt("Introduce un numero:"));
let m = Number(prompt("Introduce otro numero:"));
let mayor = 0;
let menor = 0;
if(n>m){
    mayor = n;
    menor = m;
}else{
    mayor = m;
    menor = n;
}
let suma = 0;
for(let i = menor; i<mayor;i++){
    suma +=i;
}
console.log(`La suma de los numeros comprendidos entre ${menor} y ${mayor} es ${suma}`);