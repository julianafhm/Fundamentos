// Função construtora (Classe)  -> objeto (uso do new)
function Data(dia = 1, mes = 1, ano = 2021) {
   this.dia= dia;
   this.mes= mes;
   this.ano= ano;

   this.exibir = function() {
    return `${this.dia}/${this.mes}/${this.ano}`
   }
}

const d1 = new Data()
d1.ano = 2000 //modifica o ano
const d2 = new Data(24, 12, 2023)
const d3 = new Data(4, 5, 2021)
 
console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

console.log(d1);
console.log(d2);
console.log(d3);