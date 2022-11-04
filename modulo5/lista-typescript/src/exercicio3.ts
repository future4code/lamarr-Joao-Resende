enum Gender {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type Movie = {
    nome: string,
    anoLancamento: number,
    genero: Gender,
    pontuacao?: number
}

const returnMovieType = (nomeFilme: string, anoLancamentoFilme: number, generoFilme: Gender, pontuacaoFilme?: number): Movie => {
    if (pontuacaoFilme) {
        return {
            nome: nomeFilme,
            anoLancamento: anoLancamentoFilme,
            genero: generoFilme,
            pontuacao: pontuacaoFilme
        }
    } else {
        return {
            nome: nomeFilme,
            anoLancamento: anoLancamentoFilme,
            genero: generoFilme
        }
    }

}

console.log(returnMovieType("Duna", 2021, Gender.ACAO, 74))