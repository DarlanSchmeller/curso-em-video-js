const imagem = window.document.getElementById('imagem1')


// Comandos genéricos abaixo
imagem.innerHTML = '<img src="BancoDeImagens/logomm.png" alt="Logo MMTecnologia">'

function verificar() {
  const data = new Date()
  const ano = data.getFullYear()
  const nascimento = window.document.getElementById('nascimento').value 
  const resultado = window.document.getElementById('resultado')
  
if (nascimento >= ano || nascimento.length <= 3) {
    resultado.innerHTML = '<p>Data de nascimento inválida, tente novamente</p>'
    resultado.style.color = 'red'
} else { 
   resultado.innerHTML = `<p>Você nasceu em ${nascimento}</p>`
   window.alert(nascimento)
   resultado.style.color = 'black'
   }
}