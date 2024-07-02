const numeros = [1, 2, 3, 4, 5, 8];

numeros[0] = 100  //altera o indice 0 do array de 1 pra 100
numeros.push(6)  // adc o 6 no array


console.log (numeros.indexOf(4)) // mostra qual indice do elemento 4
console.log (numeros.indexOf(4, 4)) // mostra qual indice do elemento 4, apartir do indice 5
console.log (numeros.includes(10)) //mostra um elemento presente ou n no array
console.log (numeros.includes(6))
console.log(numeros)
console.log(numeros.join('; ')) //join exibe no console o elemento q eu adicionar no array


const num2 = numeros.concat(7, 8, 9) //gera um novo array, push é no array existente
console.log(num2)