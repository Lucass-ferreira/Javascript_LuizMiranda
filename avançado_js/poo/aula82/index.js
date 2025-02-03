class DispositivoDesligado {
    constructor(nome) {
        this.nome = nome
        this.desligado = false
    }

    ligar(){
        if(this.desligado){
            console.log(this.nome, 'já ligado')
        }

        this.desligado = true
    }

    desligar(){
        if(!this.desligado) {
            console.log(this.nome, 'ja desligado')
        }
        this.desligado = false
    }
}

// const dipositivo1 = new DispositivoDesligado('smartfone')
// console.log(dipositivo1)

class Smartphone extends DispositivoDesligado {
    constructor(nome, cor, modelo){
        super(nome)

        this.cor = cor
        this.modelo = modelo
    }
}

// const smartphone = new Smartphone('Redmi', 'Preto', '10C')
// smartphone.ligar()
// console.log(smartphone)

class Tablet extends DispositivoDesligado {
    constructor(nome, TemWifi){
        super(nome)

        this.TemWifi = TemWifi
    }

    ligar(){
        console.log('vc está alterando o metodo ligar na class Tablet.')
    }
}

const tablet1 = new Tablet('Ipad', true)
tablet1.ligar()
console.log(tablet1)




