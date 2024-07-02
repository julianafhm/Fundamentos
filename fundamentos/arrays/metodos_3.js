// percorrendo o array

const numeros = [10,20,30];

function praCadaElemento(elemento, indice, array) { // essa ordem sempre
    console.log(elemento, indice, array)
    }

numeros.forEach(praCadaElemento)

numeros.forEach(function(el){
console.log(el)
})

numeros.forEach(function(_, i){  // _ mostra q n é importante pra mim esse parâmetro
console.log(i)
})



//numeros.forEach(function(){
//console.log('dentro do foreach!')
//})



//for(let n of numeros) {
//    console.log (n)
//}

//for (let i = 0; i < numeros.length; i++){  percorrendo o array
//    console.log(numeros[i]); 
//}