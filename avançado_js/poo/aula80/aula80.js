// Aprendendo sobre classes.
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(this.nome, 'está falando.')
    }
}

const pessoa1 = new Pessoa('Lucas', 'Ferreira')
console.log(pessoa1.nome)
pessoa1.falar()