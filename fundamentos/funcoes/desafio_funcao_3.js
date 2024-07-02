
const nota1 = 7.8
const nota2 = 3.1
const nota3 = 6.7 

function minimo (n1,n2) {
   if (n1 <= n2){
        return n1;
   } else {
    return n2;
   }
}
function mediaDuasMaiores(n1, n2, n3) {
    const menorNota = minimo (n1, minimo(n2,n3))

        if (menorNota === n1) {
            return (n2 + n3) / 2
        } else if (menorNota === n2){
            return (n1 + n3)/2
        } else {
            return (n1 + n2) / 2
    }
    }

    function mediaParaStatus (media) {
        if (media >= 7){
            return 'Aprovado, parabéns!!'
        }else if (media >= 4){
            return 'Recuperação, dá pra recuperar!'
        } else{ 
            return 'Reprovou, já era'
        }
    }

    const mediaFinal = mediaDuasMaiores (nota1, nota2, nota3)
    const statusFinal = mediaParaStatus (mediaFinal)
    console.log(`o resultado final é ${statusFinal}!`)