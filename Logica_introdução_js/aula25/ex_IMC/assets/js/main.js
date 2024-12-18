(function(){ 
    const output = document.querySelector("#resp");
    const btn = document.querySelector("#btn");

    function calcularIMC(peso, altura){
        return peso / altura **2
    };

    function mensagemIMC(imc){
        if(imc <= 18.50){
            return "(abaixo do peso)"
        } else if (imc <= 24.90){
            return "(peso normal)"
        } else if ( imc <= 29.90) {
            return "(sobrepeso)"
        } else if ( imc <= 34.90){
            return "(obsidade grau 1)"
        } else if ( imc <= 39.90){
            return "(obsidade grau 2)"
        } else {
            return "(obesidade grau 3)"
        }
    };

    function imc(e){
        e.preventDefault()
        let peso = document.querySelector("#peso").value.trim();
        let altura = document.querySelector("#altura").value.trim();

        peso = Number(peso);
        altura = Number(altura.replace("," , "."));

        if( (isNaN(altura) || isNaN(peso)) || (peso <= 0 && altura <= 0) ){
            output.style.display = "block"
            output.textContent = "Digite apenas numeros."
            output.style.backgroundColor = "red"
        } else {
            if(peso <= 0){
                output.style.display = "block"
                output.textContent = "Peso invalido."
                output.style.backgroundColor = "red"
            } else if(altura <= 0) {
                output.style.display = "block"
                output.textContent = "Altura invalida."
                output.style.backgroundColor = "red"
            } else {
                output.style.display = "block"
                const imc = calcularIMC(peso, altura)
                const msg = mensagemIMC(imc)
                output.textContent = `O seu IMC é ${imc.toFixed(2)} ${msg}` 
                output.style.backgroundColor = "rgb(24, 193, 245)"
            }
        }
    }

    btn.addEventListener("click", imc)
 
})();