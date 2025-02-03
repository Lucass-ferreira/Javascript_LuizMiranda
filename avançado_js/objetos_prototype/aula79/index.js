const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { 
        writable: true,
        enumerable: true,
        value: nome 
    },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Lucas', 'Ferreira');
const p2 = criaPessoa('Sandra', 'A.');
p2.nome;