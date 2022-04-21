/* Exercícios de interpretação de código
1. 
    a. undefined
    b. null
    c. 11
    d. 3
    e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    f. 9

2. SUBI NUM ÔNIBUS EM MIRROCOS 27 
*/

// Exercícios de escrita de código
// 1.

let nome = prompt("Digite seu nome")
let email = prompt("Digite seu e-mail")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

// 2.

let comidasFavoritas = ["açaí", "doritos", "chocolate", "strogonoff", "banana"]

console.log(comidasFavoritas)

console.log("Essas são minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

let favorita = prompt("Digite sua comida preferida")

comidasFavoritas [1] = favorita

console.log(comidasFavoritas)

// 3.

let listaDeTarefas = []

let tarefa1 = prompt("Digite sua primeira tarefa do dia")
let tarefa2 = prompt("Digite sua segunda tarefa do dia")
let tarefa3 = prompt("Digite sua terceira tarefa do dia")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let indice = Number(prompt("Digite a tarefa que realizou (1, 2 ou 3)"))

listaDeTarefas.splice(indice - 1, 1)

console.log(listaDeTarefas)

// Desafios
// 1.

let frase = prompt("Digite uma frase")

let array = frase.split(" ")

console.log(array)

// 2.

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let posicao = array.lastIndexOf("Abacaxi")

console.log(posicao, array.length)

