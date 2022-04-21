/* Exercícios de interpretação de código
1.  
    a) Será impresso os números 10 e 50.
    b) Não iria aparecer nada no console.

2. 
    a) Essa função transforma o texto escrito pelo usuário para letras minúsculas e procura se a palavra "cenoura" está contida no texto, se sim retorna "true", se não retorna "false".
    b) 
        i) true
        ii) true
        iii) true

*/

// Exercícios de escrita de código
// 1. a)

function imprimirMensagem(){
    let nome = "João"
    let idade = "29"
    let cidade = "Belo Horizonte"
    let profissao = "estudante"

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}

imprimirMensagem()

    // b)

function imprimirMensagem(){
    let nome = prompt("Digite seu nome")
    let idade = Number(prompt("Digite sua idade"))
    let cidade = prompt("Digite sua cidade")
    let profissao = prompt("Digite sua profissão")
    
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
    }

imprimirMensagem()

// 2. a)

let primeiroNumero = Number(prompt("Digite o primeiro número"))
let segundoNumero = Number(prompt("Digite o segundo número"))

function somar(n1, n2){
    return n1 + n2
}
console.log(somar(primeiroNumero, segundoNumero))

    // b)

let primeiroNumero = Number(prompt("Digite o primeiro número"))
let segundoNumero = Number(prompt("Digite o segundo número"))
    
function comparar(n1, n2){
    return n1 >= n2
}
console.log(comparar(primeiroNumero, segundoNumero))

    // c)

let numero = Number(prompt("Digite um número"))
        
function verificarPar(n){
    return n % 2 === 0
}
console.log(verificarPar(numero))

    // d)

let mensagemDoUsuario = prompt("Digite uma mensagem")
        
function imprimirMensagem(mensagem){
    let mensagemMaiucula = mensagem.toUpperCase()
    console.log(mensagemMaiucula, mensagem.length)
}
imprimirMensagem(mensagemDoUsuario)

// 3. 

function somar(n1, n2){
    return n1 + n2
}

function subtrair(n1, n2){
    return n1 - n2
}

function multiplicar(n1, n2){
    return n1 * n2
}

function dividir(n1, n2){
    return n1 / n2
}

let primeiroNumero = Number(prompt("Digite o primeiro número"))
let segundoNumero = Number(prompt("Digite o segundo número"))

console.log("Soma: ", somar(primeiroNumero, segundoNumero))
console.log("Diferença: ", subtrair(primeiroNumero, segundoNumero))
console.log("Multiplicação: ", multiplicar(primeiroNumero, segundoNumero))
console.log("Divisão: ", dividir(primeiroNumero, segundoNumero))

// Desafios
// 1.

const imprimirMensagem = mensagem => {
    console.log(mensagem)
}

const somar = (n1, n2) => n1 + n2

let primeiroNumero = Number(prompt("Digite o primeiro número"))
let segundoNumero = Number(prompt("Digite o segundo número"))

imprimirMensagem(somar(primeiroNumero, segundoNumero))

// 2.

function teoremaDePitagoras(cateto1, cateto2){
    return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))
}

let primeiroCateto = Number(prompt("Digite o primeiro cateto"))
let segundoCateto = Number(prompt("Digite o segundo cateto"))

console.log(teoremaDePitagoras(primeiroCateto, segundoCateto))
