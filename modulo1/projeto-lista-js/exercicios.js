// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Digite a altura do retângulo"))
  let largura = Number(prompt("Digite a largura do retângulo"))
  let area = altura * largura

  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual"))
  let anoDeNascimento = Number(prompt("Digite seu ano de nascimento"))
  let idade = anoAtual - anoDeNascimento

  console.log(idade, "anos")
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome = prompt("Digite seu nome")
  let idade = prompt("Digite sua idade")
  let email = prompt("Digite seu e-mail")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Qual sua primeira cor preferida?")
  let cor2 = prompt("Qual sua segunda cor preferida?")
  let cor3 = prompt("Qual sua terceira cor preferida?")
  let coresPreferidas = [cor1, cor2, cor3]

  console.log(coresPreferidas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let stringEmMaiuscula = string.toUpperCase()
  return stringEmMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
  }

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  array.splice(1, 0, array[array.length - 1])
  array.splice(array.length, 0, array[0])
  array.splice(0, 1)
  array.splice(array.length - 2, 1)

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual"))
  let anoDeNascimento = Number(prompt("Digite seu ano de nascimento"))
  let anoDaCarteira = Number(prompt("Digite seu ano que sua carteira de identidade foi emitida"))
  let idade = anoAtual - anoDeNascimento
  let renovarCarteira = anoAtual - anoDaCarteira

  let comp1 = idade <= 20 && renovarCarteira >= 5
  let comp2 = idade > 20 && idade <= 50 && renovarCarteira >= 10
  let comp3 = idade > 50 && renovarCarteira >= 15
  let compFinal = comp1 || comp2 || comp3

  console.log(compFinal)

} 
 

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let comp1 = (ano % 100) !== 0 && (ano % 4) === 0
  let comp2 = (ano % 100) === 0 && (ano % 400) === 0
  
  return comp1 || comp2

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let pergunta1 = prompt("Você tem mais de 18 anos? (sim/não)")
  let pergunta2 = prompt("Você possui ensino médio completo? (sim/não)")
  let pergunta3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (sim/não)")
  let condicao = pergunta1 === "sim" && pergunta2 === "sim" && pergunta3 === "sim"

  console.log(condicao)

}