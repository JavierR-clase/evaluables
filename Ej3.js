const prompt = require('prompt-sync')();
function leerNumero(){
    return Number(prompt("Ingresa el numero que crees que es: "));
}
function EntradavalidaNumero(){
    let num = leerNumero();
    let flagformatOk= true;
    if(Number.isNaN(num)){
        flagformatOk = false;
    }
    while(!flagformatOk || num<1 || num>100){
        let num = leerNumero();
        flagformatOk = true;
    }
    return num;
}
function comprobarValor(){
    let jugar = true;
    const numeroCorrecto = 33
    do{
        let num = EntradavalidaNumero();
        if(num > numeroCorrecto){
            console.log("Menor");
        }else if(num < numeroCorrecto){
            console.log("Mayor");
        }else{
            console.log("Ganaste");
            jugar = false;
        } 
    }while(jugar);
}
comprobarValor();