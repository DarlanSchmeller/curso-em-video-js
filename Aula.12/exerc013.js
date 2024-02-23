var agora = new Date() // pega as informações de tempo do sistema
var hora = agora.getHours() // adiciona a variavel o horario atual

console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 1 && hora < 6) {
    console.log('Boa madrugada.')
} else if (hora < 12) {
    console.log('Bom dia.')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde.')
} else if (hora >= 18 && hora < 24) {
    console.log('Boa noite.')
} else if (hora = 24){
    console.log('Boa madrugada.')
} 