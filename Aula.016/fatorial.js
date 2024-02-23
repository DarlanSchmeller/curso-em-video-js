// 5! = 5 x 4 x 3 x 2 x 1 = 120
// ISSO E UM FATORIAL


function fatorial(n) {
    let fat = 1 
    for (let c = n ; c > 1 ; c -= 1 ) {
        fat *= c
    }
     return fat
}
let resultado = fatorial(5)
console.log(`O fatorial de 5 é: ${resultado}.`)