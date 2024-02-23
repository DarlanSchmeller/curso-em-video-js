function soma(n1=0, n2=0) { // n1=0 estabelece que o valor inicial é 0
    return n1 + n2        // assim na falta de um parâmetro ainda funciona.
}

let resultado = soma(2 , 3)
console.log(`O resultado da soma é ${resultado}.`)