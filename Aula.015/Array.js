let num = [ 5 , 2 , 3 ] // << Array
        //  0   1   2
console.log(`Nosso vetor é o ${num}`)
console.log(' ')
console.log(num) 

num[3] = 6
console.log('6 atribuido ao indice 3 com sucesso.')

console.log(num[3])

num.push(7) // Automaticamente cria o valor 7 no ultima posiçao

console.log(num[3])

console.log('tem ' + num.length)
