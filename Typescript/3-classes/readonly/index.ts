class Pessoa{
    public readonly nome: string = "Julia França"
}

let pessoa = new Pessoa()

console.log (pessoa.nome);
pessoa.nome = "Maria"; //funciona apenas sem o readonly
console.log (pessoa.nome); //funciona apenas sem o readonly