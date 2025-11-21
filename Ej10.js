const prompt = require('prompt-sync')();
let N = Number(prompt("Introduce la cantidad de trabajadores"));
let salario = 0;
let totalEmpresa = 0;
let Max=-Infinity;
let Min =Infinity;
for(let i=0;i<N;i++){
    let oficio = Number(prompt("Introduce tu puesto de trabajo (licenciado-1,tecnico-2,obrero-3):"));
    let turno = Number(prompt("Introduce el turno en el que trabajas(1,2,3):"));
    let horas = Number(prompt("Introduce las horas trabajadas a la semana:"));
    if(oficio===1){
      if(turno===1){
        salario = 200+(100*horas);
      }else if(turno===2){
        salario = 100+(100*horas);
      }else{
        salario = 300+(100*horas);
      }
    }else if(oficio===2){
        if(turno===1){
            salario = 200+(50*horas);
      }else if(turno===2){
            salario = 100+(50*horas);
      }else{
            salario = 300+(50*horas);
      }
    }else if(oficio===3){
        if(turno===1){
            salario = 200+(30*horas);
      }else if(turno===2){
            salario = 100+(30*horas);
      }else{
            salario = 300+(30*horas);
      }
    }
    console.log(`El trabajador cobra un total de ${salario}`)
    totalEmpresa += salario;
    if(salario>Max){
        Max=salario;
    }
    if(salario<Min){
        Min=salario;
    }
}
console.log(`El total de la empresa es ${totalEmpresa}`);
console.log(`El salario maximo es ${Max}`);
console.log(`El salario minimo es ${Min}`);
console.log(`La media de la empresa es ${totalEmpresa/N}`);