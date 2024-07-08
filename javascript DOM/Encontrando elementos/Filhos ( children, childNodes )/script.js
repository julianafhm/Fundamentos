"use strict";

const container = document.querySelector(".container");


console.log(container.children);// HTML Collection, n se usa c for each
console.log(container.childNodes); // nodelist

const children = Array.from(container.children);

//console.log(children)

children.forEach((res) =>{
     console.log(res);
});
