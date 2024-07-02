class Data {
    //dia = 5
    //mes = 5
    //ano = 1970

    constructor (d= 5, m= 5, a= 1970) {    //o this refere aos de cima
        this.dia = d 
        this.mes = m 
        this.ano = a 
    }
    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}


const d1 = new Data()
d1.dia = 10
d1.mes = 12
d1.ano = 2023
console.log(d1);
console.log(d1.exibir());

const d2 = new Data (31, 12, 2021)
console.log(d2);
console.log(d2.exibir());

console.log(typeof Data);
console.log(typeof d1);