function sempreRetornaUm() {
    return 1
}

function textoOuNumero (retornaTexto) {
    return retornaTexto ? "Sou um textoo" : 123
  //  if (retornaTexto) {
  //      return "sou um texto!"
   // } else {
   //     return 123
   // }
}


let valor = sempreRetornaUm() 
console.log(valor)

let texto = textoOuNumero(true)
console.log (texto)

console.log (textoOuNumero(false))