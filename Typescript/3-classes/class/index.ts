class Pessoa{
    nome: string = "";
    idade: number = 0;

   constructor(nome: string, idade: number){
    this.nome = nome;
    this.idade = idade;
   } 
} 

const pessoa1 = new Pessoa("usuario 1", 25);
const pessoa2 = new Pessoa("usuario 2", 28);


console.log(pessoa1.nome);
console.log(pessoa1.idade);

console.log(pessoa2.nome);
console.log(pessoa2.idade);