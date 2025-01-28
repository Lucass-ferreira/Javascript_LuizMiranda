//Produto -> aumento, desconto
// Camiseta = Cor, Caneca = Material

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
};

Produto.prototype.aumento = function(quantia){
    this.preco += quantia
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
};

// ------------ Caneca

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const caneca1 = new Caneca('Caneca', 12, 'Plastico', 5 )
const caneca2 = new Caneca('Caneca Noel', 58, 'Porcelana', 12)
// console.log('---------')
caneca1.aumento(10)
caneca2.desconto
// console.log(caneca1)
// console.log(caneca2)
// console.log(caneca1.estoque)
console.log(caneca2)
caneca2.estoque = 100
console.log(caneca2.estoque)

// ------------ Camiseta

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

const camiseta = new Camiseta('regata', 56, 'preta')
const produto = new Produto('Gen', 114)
camiseta.aumento(10)
// console.log('---------')
// console.log(produto)
// console.log(camiseta)