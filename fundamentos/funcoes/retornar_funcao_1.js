function retornaUmaFuncao() {

    function Bomdia() {
        return 'bom dia!'
    }
    return Bomdia
}
console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()());


const umaFuncao = retornaUmaFuncao()
console.log(umaFuncao());