const input = require("readline-sync")

function verificaEstudante(): boolean {
    const idade: number = input.question("Qual a sua idade? ")
    const ensinoMed: string = input.question("Voce possui ensino medio completo? (sim ou nao) ")
    const horasDisp: number = input.question("Quantas horas voce tem disponivel na semana para o curso? ")
    const tipoCurso: string = input.question("O seu curso sera o integral ou noturno? ")
    if ((idade >= 18 && ensinoMed === 'sim' && horasDisp >= 40 && tipoCurso === 'integral') || (idade >= 18 && ensinoMed === 'sim' && horasDisp >= 20 && tipoCurso === 'noturno')) {
        return true
    } else {
        return false
    }
}

console.log(verificaEstudante())

