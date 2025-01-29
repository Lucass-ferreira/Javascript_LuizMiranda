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

const cpf = '705.484.450-52'
const cpfLimpo = cpf.replace(/\D+/g, '').slice(0, -1)

const cpfArr01 = Array.from(cpfLimpo)
// const cpfArr02 = Array.from(cpfLimpo)

let resp = 0;
let arrTotal = cpfArr01.length + 1
const somaCpf = cpfArr01.reduce(function(ac, valor){
    resp += Number(valor) * (arrTotal)
    arrTotal--
    return 11 - (resp % 11)
}, 2)

cpfArr01.push(somaCpf)
// console.log(cpfArr01)

console.log(somaCpf)