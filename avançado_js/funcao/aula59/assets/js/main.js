// function criarCalculadora(){
//     return {
//         display: document.querySelector(".display"),

//         iniciar(){
//             this.btnClicado();
//         },

//         limparDisplay(){
//             this.display.value = ""
//         },

//         limparUm(){
//             this.display.value = this.display.value.slice(0, -1)
//         },

//         fazCalculo(){
//             let valor = this.display.value;

//             try {
//                 valor = eval(valor)
                
//                 if(!valor){
//                     alert('Conta Invalida')
//                     return
//                 }

//                 this.display.value = String(valor)


//             } catch (error) {
//                 alert('Conta Invalida')
//                 return
//             }
//         },

//         btnClicado(){
//             document.addEventListener("click", e => {
//                 const el = e.target;

//                 if(el.classList.contains('btn-num')){ 
//                     this.btnParaDisplay(el.innerText);
//                 };

//                 if(el.classList.contains('btn-clear')){ 
//                     this.limparDisplay()
//                 };

//                 if(el.classList.contains('btn-del')){ 
//                     this.limparUm()
//                 };

//                 if(el.classList.contains('btn-eq')){ 
//                     this.fazCalculo()
//                 };
//             });
//         },

//         btnParaDisplay(valor){
//             this.display.value += valor;
//         },
//     }
// }

// const calculadora = criarCalculadora();
// calculadora.iniciar();
function Criarcalculadora(){

    this.display = document.querySelector(".display");
    
    this.iniciar = function(){
        this.btnClicado()
    };

    this.mostraDisplay = function(valor){
        this.display.value += valor
    }

    this.limparDisplay = function(){
        this.display.value = ''
    }

    this.limparDisplayUm = function(){
        this.display.value = this.display.value.slice(0, -1)
    }

    this.fazCalculo = function(){
        let valor = this.display.value;

        try {
            valor = eval(valor)
            
            if(!valor){
                alert('Conta Invalida!')
                return
            }

            this.display.value = String(valor)


        } catch (error) {
            alert('Conta Invalida!')
            return
        }
    }

    this.btnClicado = function(){
        document.addEventListener("click", e => {
            const el = e.target;

            if(el.classList.contains('btn-num')){ 
                this.mostraDisplay(el.textContent)
            };

            if(el.classList.contains('btn-clear')){ 
                this.limparDisplay()
            };

            if(el.classList.contains('btn-del')){ 
                this.limparDisplayUm()
            };

            if(el.classList.contains('btn-eq')){ 
                this.fazCalculo()
            };
        })
    };

};

const calculadora = new Criarcalculadora();
calculadora.iniciar();




