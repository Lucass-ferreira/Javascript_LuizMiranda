 // Construtora -> molde(classe)
 function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome  -> menos performatico/ocupa mt espção na memoria
 }

 Pessoa.prototype.estouAqui = 'ola mundo'
 Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome 
 } // um codigo mais limpo

 // instância
 const pessoa1 = new Pessoa('Lucas', 'F.')  // <- Função construtora
 const pessoa2 = new Pessoa('Maria', 'A.')

 console.dir(pessoa1)
 console.dir(pessoa2)