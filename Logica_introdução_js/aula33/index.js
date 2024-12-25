const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Ferreira',
    idade: 21,
    endereco: {
      rua: 'Av Brasil',
      numero: 7
    }
  };
  
  // Atribuição via desestruturação
  const { nome, sobrenome, ...resto } = pessoa;
  console.log(nome, resto);