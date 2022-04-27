/* Exercícios de interpretação de código
1.
    a) Matheus Nachtergaele
       Virginia Cavendish
       {canal: 'Globo', horario: '14h'}

2.
    a) {nome: 'Juca", idade: 3, raca: 'SRD'}
       {nome: 'Juba", idade: 3, raca: 'SRD'}
       {nome: 'Jubo", idade: 3, raca: 'SRD'}

    b) A sintaxe três pontos faz uma cópia de um objeto ou array já definido anteriormente no código.

3.
    a) false
       undefined
    
    b) A função faz com que retorne o valor de uma propriedade de um objeto. No primeiro caso, como "backender" é uma propriedade que está contida no objeto e seu valor é false, a função retornará false.
       Já no segundo caso, como não existe a propriedade altura no objeto, a função irá retornar undefined.

*/

// Exercícios de escrita de código
// 1.
    // a) 

const pessoa = {
    nome: "Fernando",
    apelidos: ["Fernandinho", "Dinho", "Fefe"]
}

function imprimirFrase (objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

imprimirFrase(pessoa)

    // b)

const novaPessoa = {
    ...pessoa,
    apelidos: ["Fee", "Fernandão", "Dede"]
}

imprimirFrase(novaPessoa)

// 2.

const pessoa1 = {
    nome: "João",
    idade: 29,
    profissao: "Estudante"
}

const pessoa2 = {
    nome: "Pedro",
    idade: 30,
    profissao: "Engenheiro"
}

function arrayObjeto (objeto) {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
}

console.log(arrayObjeto(pessoa1))
console.log(arrayObjeto(pessoa2))

// 3.

let carrinho = []

const fruta1 = {
    nome: "Abacaxi",
    disponibilidade: true
}

const fruta2 = {
    nome: "Melancia",
    disponibilidade: true
}

const fruta3 = {
    nome: "Melão",
    disponibilidade: true
}

function arrayFrutas (fruta){
    return carrinho.push(fruta)
}

arrayFrutas(fruta1)
arrayFrutas(fruta2)
arrayFrutas(fruta3)

console.log(carrinho)

// Desafios

// 1.

function criarObjeto () {
    let nomeDoUsuario = prompt("Digite seu nome")
    let idadeDoUsuario = Number(prompt("Digite a sua idade"))
    let profissaoDoUsuario = prompt("Digite a sua profissão")
    let objeto = {nome: nomeDoUsuario, idade: idadeDoUsuario, profissao: profissaoDoUsuario}
        console.log(objeto, typeof(objeto))
}

criarObjeto()

// 2.

function compararFilmes () {
    const filme1 = {
        nome: "Star Wars",
        anoDeLancamento: 2012
    }
    const filme2 = {
        nome: "Os Vingadores",
        anoDeLancamento: 2012
    }
        const comp1 = filme1.anoDeLancamento < filme2.anoDeLancamento
        const comp2 = filme1.anoDeLancamento === filme2.anoDeLancamento
            console.log("O primeiro filme foi lançado antes do segundo?", comp1)
            console.log("O primeiro filme foi lançado no mesmo ano do segundo?", comp2)
}

compararFilmes()

// 3.

function disponibilidadeDasFrutas (fruta){
    const novaDisponibilidade = {
        ...fruta,
        disponibilidade: !fruta.disponibilidade
    }
        return novaDisponibilidade
}

console.log(disponibilidadeDasFrutas(fruta1))
console.log(disponibilidadeDasFrutas(fruta2))
console.log(disponibilidadeDasFrutas(fruta3))

