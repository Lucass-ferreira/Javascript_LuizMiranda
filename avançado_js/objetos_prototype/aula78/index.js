//polimorfismo de sobreescrita
function Conta(agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo) {
        console.log('saldo insuficiente |', 'Saldo: ', 'R$',(this.saldo).toFixed(2))
        return
    } 
    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente 

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)) {
        console.log('saldo insuficiente |', 'Saldo: ', 'R$',(this.saldo).toFixed(2))
        return
    } 
    this.saldo -= valor
    this.verSaldo()
}

function ContaPoupança(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
}

ContaPoupança.prototype = Object.create(Conta.prototype)
ContaPoupança.prototype.constructor = ContaPoupança

const conta = new ContaPoupança(11, 22, 10)
conta.sacar(5)
conta.sacar(10)
conta.sacar(95)