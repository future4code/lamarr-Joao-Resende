// a) const minhaString: string = 5 => O typescript gera um erro pois a variável só deve aceitar strings.

// b) 

const meuNumero: number | string = "dois" // Utilizando Union Type

// d)

enum Cores {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

// c)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
}

const primeiraPessoa: Pessoa = {
    nome: "José",
    idade: 29,
    corFavorita: Cores.VERMELHO
}

const segundaPessoa: Pessoa = {
    nome: "Pedro",
    idade: 30,
    corFavorita: Cores.AZUL
}

const terceiraPessoa: Pessoa = {
    nome: "Carla",
    idade: 22,
    corFavorita: Cores.AMARELO
}