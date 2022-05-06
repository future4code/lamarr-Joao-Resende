/* Exercícios de interpretação de código

1. O código irá imprimir os objetos do array, seguidos dos índices referentes aos objetos no array e por último o array original (usuários).

2. O código irá retornar um novo array com a propriedade "nome" de cada objeto -> ["Amanda Rangel", "Laís Petra", "Letícia Chijo"].

3. O código irá retornar um novo array com os objetos que possuen apelidos diferentes de "Chijo" -> [{ nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" },].


*/


// Exercícios de escrita de código

// 1.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a)

const nomeDosPets = pets.map((item, index, array) => {
    return item.nome
})

console.log(nomeDosPets)

// b)

const cachorrosSalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})

console.log(cachorrosSalsicha)

// c)

const cachorrosPoodle = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
})

const mensagem = cachorrosPoodle.map((item, index, array) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})

console.log(mensagem)

// 2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a)

const nomeDosProdutos = produtos.map((item, index, array) => {
    return item.nome
})

console.log(nomeDosProdutos)

// b)

const nomeEPrecoDosProdutos = produtos.map((item, index, array) => {
    return {nome: item.nome, preco: (item.preco*0.95)}
})

console.log(nomeEPrecoDosProdutos)

// c)

const objetosDeBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})

console.log(objetosDeBebidas)

// d)

const objetosDeYpe = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})

console.log(objetosDeYpe)

// e)

const imprimirFrase = objetosDeYpe.map((item, index, array) => {
    return `Compre ${item.nome} por ${item.preco}`
})

console.log(imprimirFrase)

// Desafios

// 1.

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
 
// a)

const nomes = pokemons.map((item, index, array) => {
    return item.nome
})

console.log(nomes.sort())

// b)

const tipos = pokemons.map((item, index, array) => {
    return item.tipo
})

const tipoSemRepeticao = tipos.filter((item, index, array) => {
    return array.indexOf(item) === index
})

console.log(tipoSemRepeticao)