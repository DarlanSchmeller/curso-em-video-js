let pizza = 8

function comerpizza() {
    console.log(`Tem no total ${pizza} fatias.`)
    while (pizza != 0) {
        pizza -= 1
        console.log(`Comi uma fatia, restam ${pizza} fatias.`)
    }
}
 
comerpizza()