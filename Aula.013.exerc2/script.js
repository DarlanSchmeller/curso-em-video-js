const imagem = window.document.getElementById('imagem1')


// Comandos genéricos abaixo
imagem.innerHTML = '<img src="BancoDeImagens/logomm.png" alt="Logo MMTecnologia">'

function verificar() {
  const data = new Date()
  const ano = data.getFullYear()
  const nascimento = window.document.getElementById('nascimento').value 
  const resultado = window.document.getElementById('resultado')

  
if (nascimento >= ano || nascimento.length <= 3) { // Verifica se o nascimento é valido, se nao for gera um erro
    resultado.innerHTML = '<p>Data de nascimento inválida, tente novamente</p>'
    resultado.style.color = 'red'
} else {  // Se for válido executa as linhas abaixo
   let msex = window.document.getElementsByName('radsex')[0]
   let fsex = window.document.getElementsByName('radsex')[1]
   let idade = ano - nascimento
   let genero 
 
   // Verifica genero.
  if (msex.checked) { // Se for Masculino
      alert('Homem detectado.')
      genero = 'masculino'
      if (idade >= 0 && idade <= 10) {
          imagem1.innerHTML = '<img src="BancoDeImagens/homemcrianca.png" alt="Logo homem crianca">'
      } else if (idade > 10 && idade <= 21) {
          imagem1.innerHTML = '<img src="BancoDeImagens/homemadolescente.png" alt="Logo homem adolescente">'
      } else if (idade > 21 && idade < 60) {
          imagem1.innerHTML = '<img src="BancoDeImagens/homemadulto.png" alt="Logo homem adulto">'
      } else if (idade > 60) {
          imagem1.innerHTML = '<img src="BancoDeImagens/homemvelho.png" alt="Logo homem velho">'
      }
      
  } else if (fsex.checked) { // Se for Feminino
      alert('Mulher detectada.') 
      genero = 'feminino'
      if (idade >= 0 && idade <= 10) {
           imagem1.innerHTML = '<img src="BancoDeImagens/mulhercrianca.png" alt="Logo mulher crianca">'
      } else if (idade > 10 && idade <= 21) {
           imagem1.innerHTML = '<img src="BancoDeImagens/mulheradolescente.png" alt="Logo mulher adolescente">'
      } else if (idade > 21 && idade < 60) {
           imagem1.innerHTML = '<img src="BancoDeImagens/mulheradulta.png" alt="Logo mulher adulta">'
      } else if (idade > 60) {
           imagem1.innerHTML = '<img src="BancoDeImagens/mulhervelha.jpg" alt="Logo mulher velha">'
    }
  }

  // Texto HTML
   resultado.innerHTML = `<p>Seu gênero é <strong>${genero}</strong>, você tem <strong>${idade}</strong> anos e nasceu em <strong>${nascimento}</strong>.</p>`
   //Seu gênero é ${genero}, você tem ${idade} e nasceu em $nascimento.
   resultado.style.color = 'black'
   }
}