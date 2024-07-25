class Pessoa{
    protected nome: string = "";
    protected idade: number = 0;

   constructor(nome: string, idade: number){
    this.nome = nome;
    this.idade = idade;
   } 

   public comer (comida: string){
    return `A ${this.nome} comeu ${comida}`;
   }

   public fezAniversario(){
    return ` A ${this.nome} fará ${++this.idade} anos`;
   }
} 

class Julia extends Pessoa{
    private _profissao: string = "Programadora";
    
    constructor(){
        super ("Julia", 31);
    }

    get profissao(){ // n recebe parametro
        if (this._profissao === "Chefe de cozinha"){
            return `Ela não é mais programadora, mudou para ${this._profissao}`
        }
        return this._profissao
    }
    set profissao (valor: string){ //recebe parametro
        this._profissao = valor;
    }
}

const julia = new Julia();

console.log (julia.profissao);
julia.profissao = "Chefe de cozinha";
console.log (julia.profissao);

