function executar (funcao) {
   if  (typeof executar === "function"){
    console.log (funcao())  // parte central da aula
   }
}

function bomDia() {
    return "bom dia!"
}

executar (bomDia)  // parte centra da aula 

const x = bomDia;
const y = bomDia();

console.log(x())
console.log(y)
// ctrl + d seleciona a mesma palavra no codigo 