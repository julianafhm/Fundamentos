//Data (mes/dia/ano)
//atributos: dia, mes e ano
// metodo: exibir => "dia/mes/ano"


const data = {
    dia: 26,
    mes: 2,
    ano: 1988, 
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }  
}
 console.log(data.exibir());



//