let idade = 76

console.log(`Sua idade é ${idade}`)

if (idade >= 65) {
    console.log('Maior de 65 anos, não precisa votar')
} else if (idade >= 18) {
    console.log('Maior de 18 anos, voto obrigatório.')
} else if (idade <= 18 && idade >= 16) {
    console.log('Menor de idade com mais de 16 anos, voto opcional.')
} else if (idade < 16) {
    console.log('Menor de idade com menos de 16 anos, não vota.')
}
  
    
