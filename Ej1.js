const prompt = require('prompt-sync')();
let flagformatOk = true;
let empleados = prompt("Ingresa el numero de empleados: ");
empleados = Number(empleados);
if(Number.isNaN(empleados) || empleados < 0){
    flagformatOk = false;
}

let contadorConHijos = 0;
let contadorSinHijos = 0;
let MaxHijos = -Infinity;
let MinHijos = Infinity;
let mediaHijos = 0;

if(flagformatOk){
    for(let i = 0;i<empleados && flagformatOk;i++){
        let hijos = prompt("Ingresa la cantidad de hijos: ");
        hijos=Number(hijos);
        if(Number.isNaN(hijos) || hijos < 0){
            flagformatOk = false;
        }
        if(flagformatOk){
    if(hijos > 0){
        contadorConHijos++;
    }else{
        contadorSinHijos++;
    }
    if(hijos>MaxHijos){
        MaxHijos=hijos;
    }
    if(hijos<MinHijos){
        MinHijos=hijos;
    }
    mediaHijos += hijos;
    }
}
    if(flagformatOk){
        mediaHijos= mediaHijos/empleados;

    console.log(`En la empresa de ${empleados} empleados hay un total de ${contadorConHijos} empleados con hijos y ${contadorSinHijos} empleados sin hijos`);
    console.log(`El maximo numero de hijos en la empresa es de ${MaxHijos} y el Minimo es ${MinHijos}`);
    console.log(`La media de hijos es de ${mediaHijos}`);
    } 
}