const produto = {
    nome: 'Ipad', 
    preco: 5600, 
    desconto: 0.15,
    precoComDesconto: function(){
        return this.preco * (1 - this.desconto)  //uso do this. pra referenciar aos metodos preço e desconto
    }
}
console.log(produto.nome);
console.log(produto.precoComDesconto());
