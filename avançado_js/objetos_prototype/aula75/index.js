// //Com função Literal
// const objA = {
//     chaveA: 'A'
// };

// const objB = {
//     chaveB: 'B'
// };

// Object.setPrototypeOf(objB, objA) // altera o __proto__ de um Objeto
// console.log(Object.getPrototypeOf(objA)) // mostra o __proto__ do Objeto
// console.log(objB.chaveA)

// Com função construtora

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
};

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const produto1 = new Produto('Camiseta', 50)
// produto1.desconto(100)
console.log('-----------')
produto1.aumento(100)
console.log(produto1)
console.log('-----------')


const produto2 = {
    nome: 'Caneca',
    preco: 54
}

Object.setPrototypeOf(produto2, Produto.prototype)

produto2.aumento(10)
console.log(produto2)
console.log('-----------')

const produto3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 99
    },
    
    tamanho: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 42
    },
})
produto3.aumento(10)
console.log(produto3)
console.log('-----------')
