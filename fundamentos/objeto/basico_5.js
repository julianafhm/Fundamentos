const cliente = {
    codigo: 58746,  
    nome: 'Ana',
    vip : true,
    endereco:  {
        logradouro:'Rua BC', 
        numero: 45,
        complemento: 'apto 201 bloco B',
        pontosRef: [
            'Hospital x',
            'Hospital y',
        ]
    },
    nomeFilhos: ['Bruna','Lucas','Gustavo']
}

console.log(cliente.endereco.complemento);
console.log(cliente.nomeFilhos);