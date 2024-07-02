let temDinheiro = true;
let estaEnsolarado = false;
let carroEstaNaGaragem = false;

let resultadoE = '#1 (AND) - vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado;
console.log (resultadoE); 


let resultadoOU = '#2 (OR) - vai pro shopping?';
 resultadoOU += estaEnsolarado || carroEstaNaGaragem;
 console.log (resultadoOU) // f+f = f     v+f ou f+v = v

 //ou exclusivo

 console.log(true !== true);
 console.log(true !== false);
 console.log(false !== true);
 console.log(false !== false);

 console.log('Não verdadeiro:' + !true)
console.log('Não falso:' + !false) //  contrario 