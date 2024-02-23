function tabuada() {
    let numero = document.getElementById('numero').value
    let tab = document.getElementById('selecttabuada')
    if (numero.length == 0 || numero == 0) {
        window.alert('Por favor, digite um número.')
    } else {
        let n = Number(numero)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${n * c}` // faz o resultado
            tab.appendChild(item) // adiciona o item criado
            c += 1 // adiciona um para sempre multiplicar outro numero
        }
    }
}

