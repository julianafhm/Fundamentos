const fn = (nome: string, idade?: number) => {
    if (!idade) {
      return `nome: ${nome}, idade: sem valor definido`;
    }
  
    return `nome: ${nome}, idade: ${idade}`;
  };
  
  console.log(fn("usuario", 31));
  console.log(fn("usuario"));
  
  const pessoa: { nome: string; idade?: number } = { nome: "usuario", idade: 31 };