"use strict";

const p = document.getElementsByClassName ("paragrafo");
console.log(p);


for (let element of p){  // foreach n funciona pq nao é Nodelist
    console.log(element);
}