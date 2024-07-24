var Mes;
(function (Mes) {
    Mes["JAN"] = "Janeiro";
    Mes["FEV"] = "Fevereiro";
    Mes["MAR"] = "Mar\u00E7o";
})(Mes || (Mes = {}));
var pessoa = {
    nome: "User",
    mesNiver: Mes.MAR,
};
if (pessoa.mesNiver === Mes.MAR) {
    console.log(pessoa);
}
