let thanos = []
let neverused = true
let jatem 

function adicionar() {
    let valor = document.getElementById('numero').value
    let select = document.getElementById('select')
    let usedbefore = false

    if (thanos.indexOf(Number(valor)) != -1) {
        jatem = true
    } else {
        jatem = false
    }

    if (valor <= 0 || valor > 100) {
        alert('Valor inválido.')
    } else {
        if (neverused == true)   {
            select.innerHTML = ''
        }
        if (usedbefore == true)   {
            select.innerHTML = ''
        }
        if (jatem == true) {
            alert('Já tem esse número na lista.')
        } else {
        let item = document.createElement('option')
        item.text = `Valor ${valor} adicionado com sucesso.`
        select.appendChild(item) 
        thanos.push(Number(valor))
        console.log(thanos)
        usedbefore = true  // apos adicionar, ele registra que usou algum recursou
        neverused = false // o nunca usado agora é falso
        document.getElementById('numero').value = 0
        }
    }
}   

function finalizar() {
        let select = document.getElementById('select')
        let maior = thanos[0]
        let menor = thanos[0]
        let soma = 0

        for (let pos in thanos) {
            soma += thanos[pos]
            if (thanos[pos] > maior)
                maior = thanos[pos]
            if (thanos[pos] < menor)
                menor = thanos[pos]
     }
             
            select.innerHTML = ''
            if (neverused == true) {    // Se a pessoa nunca usou nada, gera error
                 alert('Nenhum valor inserido, tente novamente.')   
             } else {
                
                 let total = document.createElement('option')
                 total.text = `O total de números registrados foi ${thanos.length}.`
                 select.appendChild(total)

                 let maiortab = document.createElement('option')
                 maiortab.text = `O maior número registrado foi ${maior}.`
                 select.appendChild(maiortab)

                 let menortab = document.createElement('option')
                 menortab.text = `O menor número registrado foi ${menor}.`
                 select.appendChild(menortab)

                 let somatab = document.createElement('option')
                 somatab.text = `A soma desses números foi ${soma}.`
                 select.appendChild(somatab)

                 let mediatab = document.createElement('option')
                 mediatab.text = `A média desses números foi ${soma / thanos.length}.`
                 select.appendChild(mediatab)

             }
        } 