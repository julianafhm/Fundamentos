
let nota = 6.7;

switch (Math.ceil(nota)) {
    case 10:
    case 9:
        console.log('Parabéns, aprovado!')
        break
    case 8:
    case 7:
        console.log('Aprovado!')
        break
    case 6:
    case 5:
    case 4:
        console.log ('Recuperação')
    case 3:
    case 2:
    case 1:
        console.log('Reprovação, possivel rec especial!')
        break
    case 0: 
        console.log('Reprovação, sem chance')
        break
    default: 
    console.log('Nota inexistente!!')
}