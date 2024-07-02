// simplificações no dia mes e ano ena function do exibir 

function criarData (dia, mes, ano) {
    return {
        dia,
        mes,
        ano,
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    }
}

const d1 = criarData(4, 5, 2020)
const d2 = criarData(7, 4, 2019)
const d3 = criarData(20, 12, 2022)

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());