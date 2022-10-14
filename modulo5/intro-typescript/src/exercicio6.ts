const mostraOperacoes = (a: number, b: number): void => {
    let maiorNumero: number;
    let menorNumero: number;

    if (a > b) {
        maiorNumero = a;
        menorNumero = b;
    } else {
        maiorNumero = b;
        menorNumero = a;
    }

    console.log(`A soma dos dois números é ${maiorNumero + menorNumero}`)
    console.log(`A subtração dos dois números é ${maiorNumero - menorNumero}`)
    console.log(`A multiplicação dos dois números é ${maiorNumero * menorNumero}`)
    console.log(`O maior número é o ${maiorNumero}`)
}

mostraOperacoes(5, 8)