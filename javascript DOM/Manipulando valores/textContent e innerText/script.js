"use strict";
/**
 * textContent - retorna o texto com formatações, mas sem os elementos
 * innerText -  retorna somente o texto, sem formatações ou elementos
 */

const p = document.querySelector("p");

console.log(p.textContent);
console.log(p.innerText);

p.textContent = "Juliana M." //formatado do html 
p.innerText = "Juliana M." // sem formatação do html
// ambos adição de texto