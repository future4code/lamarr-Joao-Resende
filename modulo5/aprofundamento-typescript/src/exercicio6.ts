enum ClassificacaoProduto {
    VERAO = "verão",
    INVERNO = "inverno",
    BANHO = "banho",
    INTIMAS = "íntimas"
}

type Produto = {
    nome: string,
    preco: number,
    classificacao: ClassificacaoProduto,
    precoComDesconto?: number
}

const produtosDaLoja = [
    { nome: "blusa", preco: 49, classificacao: ClassificacaoProduto.INVERNO },
    { nome: "cueca", preco: 20, classificacao: ClassificacaoProduto.INTIMAS },
    { nome: "toalha", preco: 59, classificacao: ClassificacaoProduto.BANHO },
    { nome: "sunga", preco: 19.90, classificacao: ClassificacaoProduto.VERAO }
]

const retornaProdutoComDesconto = (produtos: Produto[]): Produto[] => {
    let produtoComDesconto: Produto;
    let arrayDeProdutos: Produto[] = [];
    produtos.forEach(produto => {
        switch (produto.classificacao) {
            case "verão":
                produtoComDesconto = { ...produto, precoComDesconto: produto.preco * 0.95 }
                break;
            case "inverno":
                produtoComDesconto = { ...produto, precoComDesconto: produto.preco * 0.9 }
                break;
            case "banho":
                produtoComDesconto = { ...produto, precoComDesconto: produto.preco * 0.96 }
                break;
            case "íntimas":
                produtoComDesconto = { ...produto, precoComDesconto: produto.preco * 0.93 }
                break;
        }
        arrayDeProdutos.push(produtoComDesconto)
    })
    return arrayDeProdutos;
}

console.table(retornaProdutoComDesconto(produtosDaLoja));