abstract class Pessoa{
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

   protected abstract profissao: string;
   public abstract qualSuaProfissao(): string;
   public abstract qualSeuSalario(salario: number): number;
} 

class Julia extends Pessoa{
    protected profissao: string = "Programadora";
    constructor(){
        super ("Julia", 31);
    }
   public qualSuaProfissao(): string {
    return `Sua profissão é ${this.profissao}`
   }
   
   public qualSeuSalario(salario: number): number {
    return salario;
   }

}

class Maria extends Pessoa{
    protected profissao: string = "Programadora";
    constructor(){
        super ("Maria", 18);
    }
    public qualSuaProfissao(): string {
        return `Sua profissão é ${this.profissao}`
    }
    public qualSeuSalario(salario: number): number {
        return salario;
       }

}


const julia = new Julia();
const maria = new Maria();

