// a)

type Prato = {
    nome: string,
    custo: number,
    valorDeVenda: number,
    ingredientes: string[]
}

let arrayDeProdutos = [
    { nome: "macarrão", custo: 27, valorDeVenda: 54, ingredientes: ["carne", "macarrão italiano", "molho"] },
    { nome: "pizza", custo: 35, valorDeVenda: 70, ingredientes: ["massa", "calabresa", "molho"] }
]

const cadastrarProduto = (produto: Prato): Prato[] => {
    arrayDeProdutos.push(produto)
    return arrayDeProdutos
}

const primeiroPrato = {
    nome: "sanduíche",
    custo: 20,
    valorDeVenda: 40,
    ingredientes: ["pão", "hamburguer", "batata"]
}

console.table(cadastrarProduto(primeiroPrato))

// b)

const retornaValor = (nome: string): number | string => {
    const indiceProduto = arrayDeProdutos.findIndex(produto => {
        return produto.nome === nome
    })
    if (indiceProduto === -1) {
        return "Esse nome não existe."
    } else {
        return arrayDeProdutos[indiceProduto].valorDeVenda
    }
}

console.log(retornaValor("sanduíche"))

// c)

type Venda = {
    nomeDoPrato: string,
    nomeDoCliente: string
}

let arrayDeVendas = [
    { nomeDoPrato: "macarrão", nomeDoCliente: "João" }
]

const venderProduto = (pratoVendido: Venda): Venda[] => {
    arrayDeVendas.push(pratoVendido)
    return arrayDeVendas;
}

const primeiraVenda = {
    nomeDoPrato: "pizza",
    nomeDoCliente: "Pedro"
}

console.table(venderProduto(primeiraVenda))

// d)

type Valores = {
    valorDeVenda: number,
    custo: number
}

const lucroDoRestaurante = (arrayDeProdutos: Prato[], arrayDeVendas: Venda[]): number => {
    let arrayDeValores: Valores[] = [];
    for (let venda of arrayDeVendas) {
        for (let produto of arrayDeProdutos) {
            if (produto.nome === venda.nomeDoPrato) {
                arrayDeValores.push({ valorDeVenda: produto.valorDeVenda, custo: produto.custo })
            }
        }
    }
    let somaDasVendas = 0;
    let somaDosCustos = 0;
    for (let valores of arrayDeValores) {
        somaDasVendas += valores.valorDeVenda
        somaDosCustos += valores.custo
    }
    return somaDasVendas - somaDosCustos
}

console.log(lucroDoRestaurante(arrayDeProdutos, arrayDeVendas))