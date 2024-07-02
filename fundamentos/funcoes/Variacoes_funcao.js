// #1: Função COM parâmetro e COM retorno

function somar (a, b){
    return a + b
}

let resultado = somar (30, 56)

somar (30, 56)

console.log (somar (30, 56))

// #2: Função COM parâmetro e SEM retorno
function exibirMultiplicacao (a, b){
    console.log (a * b)
}

exibirMultiplicacao ( 10, 21)
exibirMultiplicacao ( 7, 9)

// #3: Função COM parâmetro e COM retorno
function retornarDataAtual(){
    return new Date()
}

console.log (retornarDataAtual())



// #4: Função SEM parâmetro e COM retorno
function exibirHoraAtual(){
    console.log (new Date(). getHours())
}

exibirHoraAtual()

