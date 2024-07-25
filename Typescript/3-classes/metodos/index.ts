class Pessoa{
    nome: string = "";
    idade: number = 0;

   constructor(nome: string, idade: number){
    this.nome = nome;
    this.idade = idade;
   } 

   comer (comida: string){
    return `A ${this.nome} comeu ${comida}`;
   }

   fezAniversario(){
    return ` A ${this.nome} fará ${++this.idade} anos`;
   }
} 


const pessoa1 = new Pessoa ("Julia", 19);

console.log(pessoa1.comer("Lasanha")); 
console.log(pessoa1.fezAniversario());

