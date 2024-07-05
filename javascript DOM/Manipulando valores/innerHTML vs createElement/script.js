"use strict";
/**
 * innerHTML - retorna o texto com formatações, e com os elementos
 *  createElements -  cria um elemento HTML
*/

const div = document.querySelector("div");

//console.log(1, div);

//uma opção: div.innerHTML =+ "<strong> Esse é o texto alterado</strong>"
//div.innerHTML = `${div.innerHTML}<strong> Esse é o texto alterado</strong>;`
//console.log(2, div);

const elementUl = document.createElement("ul");
console.log (elementUl);

[1,2,3].forEach((element)=> {
    const elementLi = document.createElement("li");
    elementLi.innerText = element;
    elementUl.appendChild(elementLi);
});

div.appendChild(elementUl); //

