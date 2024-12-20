const h1 = document.querySelector(".container h1")
const data = new Date()
// console.log(data.getDay()) // dia semana
// console.log(data.getDate()) // data
// console.log(data.getMonth()) // mês
// console.log(data.getFullYear()) // ano
// console.log(data.getHours()) // hora
// console.log(data.getMinutes()) // minutos

function diaSemana(num_dia) {
    let diaSemana;
    switch (num_dia) {
        case 0:
            diaSemana = 'Domingo'
            break;
        case 1:
            diaSemana = 'Segunda-feira'
            break;
        case 2:
            diaSemana = 'Terça-feira'
            break;
        case 3:
            diaSemana = 'Quarta-feira'
            break;
        case 4:
            diaSemana = 'Quinta-feira'
            break;
        case 5:
            diaSemana = 'Sexta-feira'
            break;
        case 6:
            diaSemana = 'Sabado'
            break;
        default:
            diaSemana = " "
            break;
    }
    return diaSemana
}

function mesDoAno(num_mes){
    const arrMes = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ]

    if(num_mes > 0 && num_mes < 13){
        return arrMes[num_mes]
    }
}

const dia_semana = diaSemana(data.getDay())
const Mes_ano = mesDoAno(data.getMonth())
// console.log(h1.textContent)

//segunda-feira, 20 de Dezembro de 2024, 15:30
h1.textContent = `${dia_semana}, ${data.getDate()} de ${Mes_ano} de ${data.getFullYear()}, ${data.getHours()}:${data.getMinutes()}`
