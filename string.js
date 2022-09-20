// Delimitação de stringd//

const aspasSimples = 'Olá, mundo'
console.log(aspasSimples) //quebrar linha só com \n

// carcteres de escape

const aspasDuplas = "Olá eu sou o \n Javascript. Eu sou melhor que o \n Python"
console.log(aspasDuplas) //quebrar linha só com \n

const textoComCrase = `Olá eu sou javascr
ipt`
console.log(textoComCrase) // com crase conseguimos quebrar linha/

// métodos das strings
const texto = 'o JavaScript foi criado alguns anos após p Python. No entanto, o JavaScript é bem mais bacana'

console.log(texto)
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.concat(' A linguagem C é a mãe de todas as linguagens.'))
// console.log(texto[2], texto [17])
console.log(texto.substring(2, 12))
console.log(texto.replace('JavaScript',  'Rust')) // só substitui a primeira ocorrência da pesquisa
console.log(texto.replaceAll('JavaScript', 'Kotlin'))
console.log(texto.replace(/JavaScript/g, 'PHP'))

const html = '<!DOCTYPE html>\n<html></html'

console.log(html.startsWith('<!DOCTYPE html>'))
console.log(html.startsWith('batata'))

console.log(html.endsWith('</body>'))

const mensagem = '                  Olá mundo'
console.log(mensagem.trim())

let senha = 'sonic'
console.log(senha.length)

console.log(senha.length >= 8)