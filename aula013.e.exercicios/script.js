const imagem = window.document.getElementById('imagem1')
const msg1 = window.document.getElementById('mensagem1')
const periodo = window.document.getElementById('periodo')
const dica = window.document.getElementById('dica1')


// Comandos genéricos abaixo
imagem.innerHTML = '<img src="BancoDeImagens/logomm.png" alt="Logo MMTecnologia">'


//Funções abaixo

function clicar() {
  function horinhas() {
      const data = new Date()
      const hora = data.getHours()
      const minuto = data.getMinutes() > 9 ? data.getMinutes() : '0' + data.getMinutes()
    const segundo = data.getSeconds() > 9 ? data.getSeconds() : '0' + data.getSeconds()
    if (hora >= 6 && hora < 12) {
     // Manhã
        imagem.innerHTML = '<img src="BancoDeImagens/manha.jpg" alt="Horário do Dia">'
        window.document.body.style.background = '#EDCD82'
        periodo.innerHTML = '<h1>Manhã</h1>'
        msg1.innerHTML = `<h1>Agora são ${hora}:${minuto}:${segundo} horas</h1> Da`
        dica.innerHTML = `<p>Fique a vontade para pegar uma xícara de café</p>`

    } else if (hora >= 12 && hora < 18) {
     // Tarde    
        imagem.innerHTML = '<img src="BancoDeImagens/tarde.jpg" alt="Horário do Dia">'
        window.document.body.style.background = '#D07760';
        periodo.innerHTML = '<h1>Tarde</h1>'
        msg1.innerHTML = `<h1>Agora são ${hora}:${minuto}:${segundo} horas</h1> Da`
        dica.innerHTML = `<p>Saia e aproveite o ar fresco</p>`

     } else if (hora >= 18 && hora <= 24){
     // Noite
            imagem.innerHTML = '<img src="BancoDeImagens/noite.jpg" alt="Horário do Dia">'
            window.document.body.style.background = '#191724';
            periodo.innerHTML = '<h1>Noite</h1>'
            msg1.innerHTML = `<h1>Agora são ${hora}:${minuto}:${segundo} horas</h1> Da`
            dica.innerHTML = `<p>Escove os dentes e se prepare para dormir</p>`
        }
}
setInterval(horinhas, 1000); 
     }

function clicarMM() {
    imagem.innerHTML = '<img src="BancoDeImagens/logomm.png" alt="Horário do Dia">'
 }
 

