const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Ferreira'
}

// const chave = 'nome'
// console.log(pessoa[chave]) // chamando a chave dinamicamente, notação de ponto não faz isso.

// console.log(pessoa['nome'])
// console.log(pessoa['sobrenome']) // notação de colchetes.

console.log(pessoa.nome);
console.log(pessoa.sobrenome); // notação de ponto.

const pessoa1 = new Object()
pessoa1.nome = 'Lucas';
pessoa1.sobrenome = 'Ferreira';
pessoa1.idade = 21;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for(let chave in pessoa1){
    console.log(pessoa1[chave]);
};

// factory function / constructor function / classes

function criarPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criarPessoa('Lucas', 'Ferreira')
console.log(p1.nomeCompleto)

// constructor function

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Lucas', 'Ferreira')
console.log(p2)