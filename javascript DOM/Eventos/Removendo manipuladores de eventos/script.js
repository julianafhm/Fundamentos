"use strict";

const btn = document.querySelector("button");

const acionarAlert = () => {
    let validador = false; // let pq const n se altera

    alert(123)

    validador = true;
    
    if(validador) {
        btn.removeEventListener("click", acionarAlert);
    }
};

btn.addEventListener("click", acionarAlert);
