const prompt = require('prompt-sync')();
let validacion = true;
const altura = Number(prompt("Introduce la altura: "));
let contador = 0;
while(contador<altura){
       
    process.stdout.write(' '.repeat(contador))

    process.stdout.write('*'.repeat(2*altura-1 - 2*contador))
           
    process.stdout.write('\n');
    
    contador++

}