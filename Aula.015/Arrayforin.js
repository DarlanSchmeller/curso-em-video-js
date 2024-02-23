let valores = [ 5, 2 , 1 , 4 , 3 ]
 

for (let pos in valores) { // Comando otimizado para vetores.
    console.log(valores.indexOf(4)) // Este comando busca o valor 4 no vetor.
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}