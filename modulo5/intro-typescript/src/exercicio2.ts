const userInput = require("readline-sync")

function imprimeTresCoresFavoritas(): void {
    const cor1: string = userInput.question("Insira sua primeira cor favorita: ")
    const cor2: string = userInput.question("Insira sua segunda cor favorita: ")
    const cor3: string = userInput.question("Insira sua terceira cor favorita: ")
    console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavoritas()