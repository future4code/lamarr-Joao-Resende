// EXERCÍCO 2

const operationType = process.argv[2]
const firstNumberTyped = Number(process.argv[3])
const secondNumberTyped = Number(process.argv[4])

const showResult = (operation, firstNumber, secondNumber) => {
    let response
    switch (operation) {
        case 'add':
            response = console.log(`Resposta: ${firstNumber + secondNumber}`)
            break;
        case 'sub':
            response = console.log(`Resposta: ${firstNumber - secondNumber}`)
            break;
        case 'mult':
            response = console.log(`Resposta: ${firstNumber * secondNumber}`)
            break;
        case 'div':
            response = console.log(`Resposta: ${firstNumber / secondNumber}`)
            break;
        default:
            response = console.log(`Erro! Digite parâmetros válidos.`)
    }
    return response
}

showResult(operationType, firstNumberTyped, secondNumberTyped)
