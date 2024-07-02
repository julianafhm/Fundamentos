// o uso do break faz com que o codigo de fato pare
// ate a condição proposta
for (let i = 1; i <=5; i++){
    if(i === 3) {
        break
    }
    console.log(i)
}

// o uso do continue faz com que o codigo de fato continue
// porem ele analisa a condiçao, sendo falsa prossegue
for (let i = 1; i <=5; i++){
    if(i === 3) {
        continue
    }
    console.log(i)
}