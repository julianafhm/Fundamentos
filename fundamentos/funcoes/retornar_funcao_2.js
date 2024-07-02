function retornaUmaFuncao() {
    return function() {
        return function () {
            return 'boa tarde'
        }

    }
}

console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()());
console.log(retornaUmaFuncao()()());