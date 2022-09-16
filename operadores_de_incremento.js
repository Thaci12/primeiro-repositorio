alert("Código Funcionando!") //mostrar uma msg p usuário
const nomeUsuario = prompt("Olá usuário, qual o seu nome?") // mostra uma mensg e recebe um valor

let num = Number(prompt("Olá, " + nomeUsuario + ". Digite algum número, por favor :)")) //interação com o usuário
//console.log(typeof num) //typeof retorna o tipo de valor que a variavel armazena

// operadores de incremento
// const sucessor = num++ // = num +1

// alert("O sucessor de  " + num + " é " + sucessor)
console.log(num++) // 5 operador de pós-incremento
console.log(num) // 6
console.log(++num) // 7 // operador de pré-incremento

// operdores de decremento
console.log(num--) // 7
console.log(num) // 6
console.log(--num) // 5 // operador de pré-decremento



