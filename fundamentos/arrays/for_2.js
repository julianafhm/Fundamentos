const notas = [7, 8, 3, 5, 10, 9, 8, 8];

valores = '';
// foreach
for(let nota of notas){        //of acessa valores 
    valores += nota + ' '
}

console.log(valores)

let indices = '';
for (let indice in notas) {   // in acessa indices
    indices += indice + ' ';
}
console.log(indices)