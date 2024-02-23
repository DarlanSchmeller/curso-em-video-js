
function contar() {
  let contagem = document.getElementById('contagem')
  let inicio = document.querySelector('input#inicio').value
  let fim = document.querySelector('input#fim').value
  let passo = document.querySelector('input#passo').value
  let i = Number(inicio)
  let f = Number(fim)
  let p = Number(passo)

    if (inicio == 0 || fim == 0 || passo == 0) {
        contagem.innerHTML = 'Impossível realizar conta, verifique os valores.'
    } else {
        contagem.innerHTML = ''

      if (f >= i) {
        // contagem crescente
        for (let c = i; c <= f ; c += p) {
            contagem.innerHTML += `${c} \u{1F3c1} `
          } 
        } else {
            // contagem regressiva
            for (let c = i; c >= f ; c -= p) {
                contagem.innerHTML += `${c} \u{1F3c1} `
              } 
        }
      }
    }
            
        
    

