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

// expressão regular
// /\D+/g so pega numeros

// function calcularCpf(cpfValor){
//     const cpf = cpfValor
//     const cpfArr = Array.from(cpf)

//     console.log(cpfArr)
// }

// calcularCpf(70548445052)

(function(){
    let resp = 0;
    let total = 0

    function calcularCpf(ac, valor){
        console.log(ac , 'valor: ', valor, 'ArrTotal: ', arrTotal, 'resp: ', resp)
        resp += Number(valor) * (arrTotal)
        arrTotal--
        
        total = 11 - (resp % 11)
        if(total > 9) total = 0
        return total
    }

    function formatCpf(valorCpf){
        const valorCpfOrig = valorCpf
        const cpf = valorCpf
        const cpfLimpo = cpf.replace(/\D+/g, '').slice(0, -2)
        const cpfArrInt = Array.from(cpfLimpo)
        return cpfArrInt
    }

    const arrCpf = formatCpf('705.484.450-52')
    console.log(arrCpf)

    let arrTotal = arrCpf.length + 1
    let somaCpf = arrCpf.reduce(calcularCpf, 2)
    arrCpf.push(somaCpf)
    console.log(arrCpf)

    arrTotal = arrCpf.length + 1
    resp = 0
    let somaCpf02 = arrCpf.reduce(calcularCpf, 2)
    arrCpf.push(somaCpf02)

    
    console.log(arrCpf.join(''))

})()

