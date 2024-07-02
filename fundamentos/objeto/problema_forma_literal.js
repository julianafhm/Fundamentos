const d1 = {
    dia: 16,
    mes: 9,
    ano: 1988, 
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }  
}


const d2 = {
    dia: 23,
    mes: 2,
    ano: 2007, 
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }  
}


const d3 = {
    dia: 26,
    mes: 8,
    ano: 2005, 
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }  
}


console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());