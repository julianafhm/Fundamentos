"use strict";
 const h1 = document.querySelector("h1"); // tag html5
 const classP = document.querySelector(".paragrafo"); //class representada por ponto const classP = document.querySelector(".paragrafo strong") p tirar strong
 const idP = document.querySelector("#paragrafo"); // ID eh representado por #
 
  
 console.log(h1);
 console.log(classP);
 console.log(idP);


 let timer = 0;
 const title = document.querySelector("title");

 setInterval (()=>{
    title.innerText = timer;
    timer++;
 }, 1000);
