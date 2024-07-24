let array1: [string, string, number, boolean] = [
    "Usuario",
     "user2",
      123,
       false
    ];
let array2: Array<string | number | boolean> = [
    "usuario",
     "user2",
     true,
      123];

console.log(array1);
console.log(array2);

let obj1: { nome: string; sobrenome: string; idade: number; deuBom: boolean} = 
    {
    nome: "usuario",
    sobrenome: "sobrenome",
    idade: 123,
    deuBom: true,
    };

let obj2: Array<{
  nome: string;
  sobrenome: string;
  idade: number;
  deuBom: boolean;
}> = [
  { 
    nome: "usuario",
    sobrenome: "sobrenome",
    idade: 123,
    deuBom: true,
  },
  {
    nome: "usuario2",
    sobrenome: "sobrenome2",
    idade: 123,
    deuBom: true,
  },    
  { 
    nome: "usuario3",
    sobrenome: "sobrenome3",
    idade: 123,
    deuBom: true,
  },
];
    console.log(obj1);
    console.log(obj2);