/* Exercícios de interpretação de código
1.
    a) O código testa se o número inserido pelo usuário é par. Se for par o código retorna "Passou no teste." e se for ímpar o código retorna "Não passou no teste.".
    b) Os números pares.
    c) Os números ímpares.

2.
    a) O código imprime a mensagem com a fruta escolhida pelo usuário e sou preço. Se for qualquer uma das frutas listadas no código (Laranja, Maçã, Uva ou Pêra) o código retornará o preço respectivo de cada fruta e se for outra fruta qualquer o preço será 5.
    b) "O preço da fruta Maçã é R$ 2.25."
    c) "O preço da fruta Pêra é R$ 5."

3.
    a) A primeira linha está armazenando em uma variável um número pedido para o usuário digitar.
    b) 10: "Esse número passou no teste" / -10: Nada.
    c) Haverá um erro no console porque a variável 'mensagem' está dentro da função. Portanto, o console.log (que está no escopo global) não irá encontrar a variável (como se ela não existisse).

*/


// Exercícios de escrita de código
// 1.

let idadeDoUsuario = Number(prompt("Digite sua idade"))

if (idadeDoUsuario >= 18){
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
}

// 2.

let turno = prompt("Digite o turno que você estuda (M, V ou N")

if (turno === "M"){
    console.log("Bom dia!")
} else if (turno === "V"){
    console.log("Boa tarde!")
} else if (turno === "N"){
    console.log("Boa noite!")
} else {
    console.log("Digite M, V ou N!")
}

// 3.

let turno = prompt("Digite o turno que você estuda (M, V ou N")

switch (turno){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Digite M, V ou N!")
}

// 4.

let genero = prompt("Digite o gênero do filme")
let preco = Number(prompt("Digite o preço do filme"))

if (genero.toLowerCase() === "fantasia" && preco < 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

// Desafios
// 1.

let genero = prompt("Digite o gênero do filme")
let preco = Number(prompt("Digite o preço do filme"))


if (genero.toLowerCase() === "fantasia" && preco < 15){
    let lanchinho = prompt("Qual lanchinho você vai comprar?")
    console.log(`Bom filme!`)
    console.log(`Aproveite o seu/sua ${lanchinho}.`)
} else {
    console.log("Escolha outro filme :(")
}

// 2.

let nome = prompt("Digite seu nome completo.")
let tipo = prompt("Digite o tipo de jogo: DO ou IN.")
let etapa = prompt("Digite a etapa do jogo: SF, DT ou FI.")
let categoria = prompt("Digite a categoria: 1, 2, 3 ou 4.")
let quantidade = Number(prompt("Digite a quantidade de ingressos."))
let dolar = 4.1


function dadosDaCompra (tipoDeJogo, etapaDoJogo){
    // NACIONAL
    if (tipoDeJogo === "DO" && etapaDoJogo === "SF"){
        console.log("---Dados da compra---")
        console.log(`Nome do cliente: ${nome}`)
        console.log(`Tipo de jogo: Doméstico`)
        console.log(`Etapa do jogo: Semi-final`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quantidade}`)
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "DT"){
        console.log("---Dados da compra---")
        console.log(`Nome do cliente: ${nome}`)
        console.log(`Tipo de jogo: Doméstico`)
        console.log(`Etapa do jogo: Decisão de terceiro lugar`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quantidade}`)
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "FI"){
        console.log("---Dados da compra---")
        console.log(`Nome do cliente: ${nome}`)
        console.log(`Tipo de jogo: Doméstico`)
        console.log(`Etapa do jogo: Final`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quantidade}`)
    // INTERNACIONAL
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "SF"){
        console.log("---Dados da compra---")
        console.log(`Nome do cliente: ${nome}`)
        console.log(`Tipo de jogo: Internacional`)
        console.log(`Etapa do jogo: Semi-final`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quantidade}`)
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "DT"){
        console.log("---Dados da compra---")
        console.log(`Nome do cliente: ${nome}`)
        console.log(`Tipo de jogo: Internacional`)
        console.log(`Etapa do jogo: Decisão de terceiro lugar`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quantidade}`)
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "FI"){
        console.log("---Dados da compra---")
        console.log(`Nome do cliente: ${nome}`)
        console.log(`Tipo de jogo: Internacional`)
        console.log(`Etapa do jogo: Final`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quantidade}`)
    } else {
        console.log("Você digitou algo errado!")
    }
}

function precoDosIngressos (tipoDeJogo, etapaDoJogo, categoriaInserida){
    // NACIONAL
    if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaInserida === "1"){
        const valor = 1320
        const valorTotal = valor * quantidade
        console.log("---Valores---")
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ ${valorTotal}`) 
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaInserida === "2"){
        const valor = 880
        const valorTotal = valor * quantidade
        console.log("---Valores---")
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ ${valorTotal}`) 
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaInserida === "3"){
        const valor = 550
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ ${valorTotal}`) 
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaInserida === "4"){
        const valor = 220
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ ${valorTotal}`)
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaInserida === "1"){
        const valor = 660
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ ${valorTotal}`)  
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaInserida === "2"){
        const valor = 440
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ ${valorTotal}`)  
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaInserida === "3"){
        const valor = 330
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ ${valorTotal}`)  
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaInserida === "4"){
        const valor = 170
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ ${valorTotal}`)  
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoriaInserida === "1"){
        const valor = 1980
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ ${valorTotal}`)  
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoriaInserida === "2"){
        const valor = 1320
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ ${valorTotal}`)  
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoriaInserida === "3"){
        const valor = 880
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ ${valorTotal}`)  
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoriaInserida === "4"){
        const valor = 330
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ ${valorTotal}`)
    // INTERNACIONAL  
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaInserida === "1"){
        const valor = 1320 / dolar
        const valorTotal = valor * quantidade
        console.log("---Valores---")
        console.log(`Valor do ingresso: U$ ${valor}`)
        console.log(`Valor total: U$ ${valorTotal}`) 
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaInserida === "2"){
        const valor = 880 / dolar
        const valorTotal = valor * quantidade
        console.log("---Valores---")
        console.log(`Valor do ingresso: U$ ${valor}`)
        console.log(`Valor total: U$ ${valorTotal}`) 
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaInserida === "3"){
        const valor = 550 / dolar
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: U$ ${valor}`)
        console.log(`Valor total: U$ ${valorTotal}`) 
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaInserida === "4"){
        const valor = 220 / dolar
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: U$ ${valor}`)
        console.log(`Valor total: U$ ${valorTotal}`)
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaInserida === "1"){
        const valor = 660 / dolar
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: U$ ${valor}`)
        console.log(`Valor total: U$ ${valorTotal}`)  
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaInserida === "2"){
        const valor = 440 / dolar
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: U$ ${valor}`)
        console.log(`Valor total: U$ ${valorTotal}`)  
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaInserida === "3"){
        const valor = 330 / dolar
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: U$ ${valor}`)
        console.log(`Valor total: U$ ${valorTotal}`)  
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaInserida === "4"){
        const valor = 170 / dolar
        const valorTotal = valor * quantidade 
        console.log("---Valores---")       
        console.log(`Valor do ingresso: U$ ${valor}`)
        console.log(`Valor total: U$ ${valorTotal}`)  
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoriaInserida === "1"){
        const valor = 1980 / dolar
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: U$ ${valor}`)
        console.log(`Valor total: U$ ${valorTotal}`)  
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoriaInserida === "2"){
        const valor = 1320 / dolar
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: U$ ${valor}`)
        console.log(`Valor total: U$ ${valorTotal}`)  
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoriaInserida === "3"){
        const valor = 880 / dolar
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: U$ ${valor}`)
        console.log(`Valor total: U$ ${valorTotal}`)  
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoriaInserida === "4"){
        const valor = 330 / dolar
        const valorTotal = valor * quantidade
        console.log("---Valores---")       
        console.log(`Valor do ingresso: U$ ${valor}`)
        console.log(`Valor total: U$ ${valorTotal}`)  
    } else {
        console.log("Você digitou algo errado!")
    }
}


dadosDaCompra(tipo, etapa)
precoDosIngressos(tipo, etapa, categoria)