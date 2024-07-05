"use strict";
//pega um atributo e adc um valor novo, remover, etc.

const div = document.querySelector("div");
div.setAttribute("id", "teste");

div.setAttribute("class", `${div.getAttribute("class")} active`);
div.setAttribute("class", `${div.getAttribute("class")} background-red`);

console.log(div);