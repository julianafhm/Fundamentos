/*
  public -      Pode ser acessado tanto pela mesma classe, 
                classes filhas e outras classes.
  
  protected -   Pode ser acessado pela mesma classe e classes filhas, 
                não pode ser acessado por outras classes.
  
  private -     Pode ser acessada somente pela própria classe.
ex de private: private _profissao: string = "Programador"; sempre que tem _ antes é uma propriedade privada
  */


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
    private profissao: string = "Programador";
    
    constructor(){
        super ("Julia", 31);
    }

    public getProfissao(){
        return `${this.nome} trabalha como ${this.profissao}`;
    }
}

const julia = new Julia();
console.log(julia.getProfissao());







