(function(){
    const btnForm = document.querySelector('#btnForm')
    btnForm.addEventListener('click', function(event){
        event.preventDefault()

        const nome = document.querySelector('#nome')
        const sobrenome = document.querySelector('#sobrenome')
        const cpf = document.querySelector('#cpf')
        const usuario = document.querySelector('#usuario')
        const senha = document.querySelector('#senha')
        const senhaConf = document.querySelector('#senhaConf')

        const dados = new PegarDados(nome.value, sobrenome.value, cpf.value, usuario.value, senha.value, senhaConf.value)
        dados.mostra()
    })

})()

class PegarDados{
    constructor(nome, sobrenome, cpf, usuario, senha, senhaConf){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.usuario = usuario
        this.senha = senha
        this.senhaConf = senhaConf
    }

    mostra(){
        console.log(this)
    }
}