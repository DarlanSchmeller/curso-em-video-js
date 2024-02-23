 // Função usando parâmetros que retorna um valor a variável .
 function parimp(valor) {
    if (valor % 2 == 0) {   // Verifica o resto de divisão.
        return 'Par'
    } else {
        return 'Impar'  // Devolve o valor para a variável
    }
 }


 let valor = parimp(5)
 console.log(valor)