// (function(){
//     const btnForm = document.querySelector('#btnForm')
//     btnForm.addEventListener('click', function(event){
//         event.preventDefault()

//         const nome = document.querySelector('#nome')
//         const sobrenome = document.querySelector('#sobrenome')
//         const cpf = document.querySelector('#cpf')
//         const usuario = document.querySelector('#usuario')
//         const senha = document.querySelector('#senha')
//         const senhaConf = document.querySelector('#senhaConf')

//         if(!nome.value){
//             const msgError = document.createElement('p');
//             msgError.textContent = 'Nome invalido, porfavor digite seu nome.';
//             nome.appendChild(msgError)
//             // throw new Error('Nome invalido, porfavor digite seu nome.');
//         }

//         const dados = new Dados(nome.value, sobrenome.value, cpf.value, usuario.value, senha.value, senhaConf.value)
//         dados.mostra()

//         let validacpf = new ValidaCPF(cpf.value);
        
//         if (validacpf.valida()) {
//           console.log('CPF válido');
//         } else {
//         //   console.log('CPF inválido');
//           alert('CPF inválido, digite um CPF valido.')
//         }
//     })

// })()

// class Dados{
//     constructor(nome, sobrenome, cpf, usuario, senha, senhaConf){
//         this.nome = nome
//         this.sobrenome = sobrenome
//         this.cpf = cpf
//         this.usuario = usuario
//         this.senha = senha
//         this.senhaConf = senhaConf
//     }

//     mostra(){
//         console.log(this)
//     }
// }

class ValidaFormulario {
    constructor() {
      this.formulario = document.querySelector('.formulario');
      this.eventos();
    }
  
    eventos() {
      this.formulario.addEventListener('submit', e => {
        this.handleSubmit(e);
      });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      const camposValidos = this.camposSaoValidos();
      const senhasValidas = this.senhasSaoValidas();
  
      if(camposValidos && senhasValidas) {
        alert('Formulário enviado.');
        this.formulario.submit();
      }
    }
  
    senhasSaoValidas() {
      let valid = true;
  
      const senha = this.formulario.querySelector('.senha');
      const repetirSenha = this.formulario.querySelector('.repetir-senha');
  
      if(senha.value !== repetirSenha.value) {
        valid = false;
        this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
        this.criaErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
      }
  
      if(senha.value.length < 6 || senha.value.length > 12) {
        valid = false;
        this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
      }
  
      return valid;
    }
  
    camposSaoValidos() {
      let valid = true;
  
      for(let errorText of this.formulario.querySelectorAll('.error-text')) {
        errorText.remove();
      }
  
      for(let campo of this.formulario.querySelectorAll('.validar')) {
        const label = campo.previousElementSibling.innerText;
  
        if(!campo.value) {
          this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
          valid = false;
        }
  
        if(campo.classList.contains('cpf')) {
          if(!this.validaCPF(campo)) valid = false;
        }
  
        if(campo.classList.contains('usuario')) {
          if(!this.validaUsuario(campo)) valid = false;
        }
  
      }
  
      return valid;
    }
  
    validaUsuario(campo) {
      const usuario = campo.value;
      let valid = true;
  
      if(usuario.length < 3 || usuario.length > 12) {
        this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
        valid = false;
      }
  
      if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
        this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
        valid = false;
      }
  
      return valid;
    }
  
    validaCPF(campo) {
      const cpf = new ValidaCPF(campo.value);
  
      if(!cpf.valida()) {
        this.criaErro(campo, 'CPF inválido.');
        return false;
      }
  
      return true;
    }
  
    criaErro(campo, msg) {
      const div = document.createElement('div');
      div.innerHTML = msg;
      div.classList.add('error-text');
      campo.insertAdjacentElement('afterend', div);
    }
  }
  
  const valida = new ValidaFormulario();