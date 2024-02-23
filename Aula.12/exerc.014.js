var agora = new Date()
var diaSem = agora.getDay()
var hora = agora.getHours()

/*
     0 - Domingo 
     1 - Segunda
     2 - Terça
     3 - Quarta
     4 - Quinta
     5 - Sexta
     6 - Sábado
*/

//console.log(new Date().toLocaleString('en-us', {  weekday: 'long' }));', {  weekday: 'long' }));
console.log(`Agora são exatamente ${hora} horas.`)
console.log(`O número que representa o dia de hoje é ${diaSem}`)
switch(diaSem) {
    case 0:
         console.log('Hoje é Domingo.')
         break
    case 1:
         console.log('Hoje é Segunda.')
         break
    case 2:
         console.log('Hoje é Terça.')
         break
    case 3:
         console.log('Hoje é Quarta.')
         break
    case 4:
         console.log('Hoje é Quinta.')
         break
    case 5:
         console.log('Hoje é Sexta.')
         break
    case 6:
         console.log('Hoje é Sábado.')
         break
    default:
         console.log('Dia não reconhecido..')
         break
}