interface IPessoa{
    nome: string;
    idade: number;
    readonly cpf: number;
    enabled(): boolean;
}

let pessoa: IPessoa = {
    nome: "Julia",
    idade: 52,
    cpf: 1111111,
    enabled: () => {
        return true;
    },
};


class Joao implements IPessoa{
    nome: string = "Joao";
    idade: number = 25;
    readonly cpf: number = 111114
    enabled(): boolean {
        return false;
    }
};

class Pedro implements IPessoa{
    nome: string = "Pedro";
    idade: number = 35;
    readonly cpf: number = 111111
    enabled(): boolean {
        return true;
    }
};