// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

(function(){
    let resp = 0;
    let total = 0
    let arrTotal = 0

    function calcularCpf(ac, valor){
        resp += Number(valor) * (arrTotal)
        arrTotal--
        
        total = 11 - (resp % 11)
        if(total > 9) total = 0
        return total
    }

    function formatCpf(valorCpf){
        const cpf = valorCpf
        const cpfLimpo = cpf.replace(/\D+/g, '').slice(0, -2)
        const cpfArrInterno = Array.from(cpfLimpo)
        return cpfArrInterno
    }

    function calcularDigito(arrCpf){
        arrTotal = arrCpf.length + 1
        resp = 0
        let somaCpf = arrCpf.reduce(calcularCpf, 2)
        arrCpf.push(somaCpf)
        return somaCpf
    }

    function validarCpf(num_cpf){
        const cpfDigito_Verificador = num_cpf.slice(-2)
        const cpf_format = formatCpf(num_cpf)

        let primeiro_Digito = calcularDigito(cpf_format)
        const segundo_Digito = calcularDigito(cpf_format)

        const digitoFinal = primeiro_Digito.toString() + segundo_Digito.toString()
        console.log(num_cpf)
        return (digitoFinal === cpfDigito_Verificador) ? console.log('Esse CPF é valido!') : console.log('Esse CPF é invalido!')
    }

    validarCpf('705.484.450-52')
})()

