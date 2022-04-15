/* Exercícios de interpretação de código
1. 
Respostas:
    a. false;
    b. false;
    c. true;
    d. boolean.

2. 
Resposta:
    O programa não realizou a soma, mas sim juntos os dois números como se fossem texto. Será impresso: "num1num2" por exemplo.

3.
Resposta:
    Como o comando "prompt" retorna apenas Strings, é preciso utilizar o método Number() para modificar o tipo das variáveis para número e retornar um resultado também numérico.

*/

// Exercícios de escrita de código
// 1.

let idade = Number(prompt("Qual é sua idade?"))
let idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"))

let compararIdades = idade > idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", compararIdades)

let diferencaDeIdade = idade - idadeAmigo
console.log(diferencaDeIdade)

// 2.

let numPar = Number(prompt("Insira um número par"))

let divisao = numPar % 2

console.log(divisao)

// O resto da divisão quando o número é par é igual a zero.

// Se o usuário inserir um número ímpar o resto da divisão é igual a um.

// 3.

let idadeEmAnos = Number(prompt("Qual a sua idade em anos?"))

let idadeEmMeses = idadeEmAnos * 12
console.log(idadeEmMeses, "meses")

let idadeEmDias = idadeEmAnos * 365
console.log(idadeEmDias, "dias")

let idadeEmHoras = idadeEmDias * 24
console.log(idadeEmHoras, "horas")

// 4.

let num1 = Number(prompt("Insira um número"))
let num2 = Number(prompt("Insira outro número"))

let comp1 = num1 > num2
console.log("O primeiro número é maior que segundo?", comp1)

let comp2 = num1 === num2
console.log("O primeiro número é igual ao segundo?", comp2)

let restoDaDivisao = num1 % num2
let comp3 = restoDaDivisao === 0
console.log("O primeiro número é divisível pelo segundo?", comp3)

let restoDaDivisao2 = num2 % num1
let comp4 = restoDaDivisao === 0
console.log("O segundo número é divisível pelo primeiro?", comp4)

// Desafios
// 1.

let fahrenheit1 = 77
let kelvin1 = (fahrenheit1- 32)*(5/9) + 273.15

console.log(kelvin1, "K")

let celsius1 = 80
let fahrenheit2 = (celsius1)*(9/5) + 32

console.log(fahrenheit2, "°F")

let celsius2 = Number(prompt("Insira a temperatura em Celsius"))
let fahrenheit3 = (celsius2)*(9/5) + 32
let kelvin2 = (fahrenheit3- 32)*(5/9) + 273.15

console.log(fahrenheit3, "°F")
console.log(kelvin2, "K")

// 2. 

let consumoEnergia = Number(prompt("Insira o consumo em quilowatt-hora"))
let valorDaConta = consumoEnergia * 0.05
let desconto = Number(prompt("Insira o desconto em %"))
let novoValorDaConta = valorDaConta - (valorDaConta * (desconto / 100))

console.log("O valor da sua conta é R$", novoValorDaConta)

// 3.

let libras = 20
let quilograma = libras * 0.45359237

console.log("20lb equivalem a", quilograma, "kg")

let onca = 10.5
quilograma = onca * 0.0283495

console.log("10,5oz equivalem a", quilograma, "kg")

let milhas = Number(prompt("Insira a distância em milhas"))
let metros = milhas * 1609.34

console.log(milhas, "equivalem a", metros, "m")

let pes = 50
metros = pes * 0.3048

console.log("50ft equivalem a", metros, "m")

let galao = 103.56
let litros = galao * 3.78541

console.log("103.56gal equivalem a", litros, "l")

let xicara = 450
litros = xicara * 3.78541

console.log("450 xic equivalem a", litros, "l")

