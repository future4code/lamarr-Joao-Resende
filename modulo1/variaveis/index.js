/* Exercícios de interpretação de código
    1. Será impresso primeiro o número 10, depois os números 10 e 5.
    2. Será impresso os números 10, 10 e 10.
    3. Nomes das variáveis: cargaHorariaDiaria e salarioDiario
        O programa mostra uma mensagem ao usuário dizendo qual é o salário dessa pessoa por hora trabalhada. */

// Exercícios de escrita de código
//1.

let nome
let idade
console.log(typeof nome)
console.log(typeof idade)

// Esse tipo foi impresso porque não coloquei um valor na variável, ficando indefinido o tipo da mesma.

nome = prompt("Digite seu nome")
idade = Number(prompt("Digite a sua idade"))
console.log(typeof nome)
console.log(typeof idade)

// O comando prompt retorna apenas Strings. Sabendo disso, para que o tipo da variável idade fique certo, utilizei o método Number().

console.log("Olá", nome, "você tem", idade, "anos")

//2.

let qualRoupa
let corDoOlho
let sexo

qualRoupa = prompt("Você está de calça?")
corDoOlho = prompt("Seu olho é azul?")
sexo = prompt("Você é homem?")

let calca = qualRoupa
let azul = corDoOlho
let homem = sexo

console.log("Você está de calça?", calca)
console.log("Seu olho é azul?", azul)
console.log("Você é homem?", homem)

//3.

let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// Desafio

let numero1
let numero2

numero1 = Number(prompt("Digite o primeiro número"))
numero2 = Number(prompt("Digite o segundo número"))

let soma
let multiplicacao

soma = numero1 + numero2
multiplicacao = numero1 * numero2

console.log("O primeiro número somado ao segundo número resulta em:", soma)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplicacao)
