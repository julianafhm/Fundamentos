//A+ 10
//A 9 
//B+ 8 
//B 7
//C+ 6
//C 5
//D+ 4
//D 3
//E+ 2
//E 1
//F 0

function notaParaConceito (nota){
  switch (Math.ceil(nota)){   // usadp para arredondar p maior!
        case 10 : return ('A+');
        case 9: return ('A');
        case 8: return ('B+');
        case 7: return ('B');
        case 6: return ('C+');
        case 5: return ('C');
        case 4: return ('D+');
        case 3: return ('D');
        case 2: return ('E+');
        case 1: return ('E');
        case 0 :return ('F');
        default: return null;
    }
}

console.log(`O conceito do Gabriel é ${notaParaConceito(8.5)}`)
console.log(`O conceito do bruno é ${notaParaConceito(6.9)}`)