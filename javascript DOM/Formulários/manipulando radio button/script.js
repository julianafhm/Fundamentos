"use strict";

const form = document.forms.namedItem("select-radio");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");


form.addEventListener("submit", (event) => {
   event.preventDefault();

    const radio = form.radio;
    submit.innerHTML = radio.value;
});

form.radio.forEach((res) => {
    res.addEventListener("change", (event) => {
        const {target} = event;

        if(target.checked){
            change.innerHTML = target.value;
        }
    });
});