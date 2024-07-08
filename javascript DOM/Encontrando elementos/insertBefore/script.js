"use strict";

const container = document.querySelector(".container");
const paragrafo = document.querySelector("#paragrafo");
const h1 = document.createElement("h1");

const newH2 = document.createElement("h2");
newH2.innerText = "novo h2";

container.insertBefore(newH2, paragrafo);
