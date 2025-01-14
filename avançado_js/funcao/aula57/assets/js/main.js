function criarCalculadora(){
    return {
        display: document.querySelector(".display"),

        iniciar(){
            this.btnClicado();
        },

        limparDisplay(){
            this.display.value = ""
        },

        limparUm(){
            this.display.value = this.display.value.slice(0, -1)
        },

        fazCalculo(){
            let valor = this.display.value;
            valor = eval(valor)
            this.display.value = String(valor)
        },

        btnClicado(){
            document.addEventListener("click", e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){ 
                    this.btnParaDisplay(el.innerText);
                };

                if(el.classList.contains('btn-clear')){ 
                    this.limparDisplay()
                };

                if(el.classList.contains('btn-del')){ 
                    this.limparUm()
                };

                if(el.classList.contains('btn-eq')){ 
                    this.fazCalculo()
                };
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },
    }
}

const calculadora = criarCalculadora();
calculadora.iniciar();


