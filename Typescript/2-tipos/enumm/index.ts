enum Mes{
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
}

const pessoa: { nome: string; mesNiver: string } = {
    nome: "User",
    mesNiver: Mes.MAR,
};

if (pessoa.mesNiver === Mes.MAR){
    console.log(pessoa);
}