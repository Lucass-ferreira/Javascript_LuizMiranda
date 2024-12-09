/*
lucas ferreira de almeida tem 21 anos, pesa 75 kg
tem 1.8 de altura e seu IMC é de 23.148148148148145
lucas ferreira nasceu em 2003
*/

let anoAtual = new Date().getFullYear()

const nome = "Lucas"
const sobrenome = "Ferreira de Almeida"
const idade = 21
const peso = 75
const alturaEmMetros = 1.80
let indiceDeMassaCorporal = peso / alturaEmMetros**2
let anoNascimento = anoAtual - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg
tem ${alturaEmMetros} de altura e seu IMC é de ${indiceDeMassaCorporal}
${nome} nasceu em ${anoNascimento}.`)