const validateCpf = (cpf: string): boolean => {
    const noDotsCpf = cpf.split(".").join("")
    const cpfArray = noDotsCpf.split("-")
    let firstMultiples = 10;
    let firstResult = 0;
    for (let i = 0; i < 9; i++) {
        firstResult += Number(cpfArray[0][i]) * firstMultiples
        firstMultiples--
    }
    const firstDivRest = firstResult % 11
    let firstDigit = 11 - firstDivRest
    if (firstDigit >= 10) {
        firstDigit = 0
    }
    let secondMultiples = 11;
    let secondResult = 0;
    const cpfWithFirstDigit = cpfArray[0] + `${firstDigit}`
    for (let i = 0; i < 10; i++) {
        secondResult += Number(cpfWithFirstDigit[i]) * secondMultiples
        secondMultiples--
    }
    const secondDivRest = secondResult % 11
    let secondDigit = 11 - secondDivRest
    if (secondDigit >= 10) {
        secondDigit = 0
    }
    // VALIDATIONS
    const digits = firstDigit.toString() + secondDigit.toString()
    const onlyNumbersCpf = noDotsCpf.split("-").join("")
    let checkAllTheSame = true;
    for (let i = 1; i < onlyNumbersCpf.length; i++) {
        if (onlyNumbersCpf[i] !== onlyNumbersCpf[0]) {
            checkAllTheSame = false
        }
    }
    if (cpfArray[1] === digits && !checkAllTheSame) {
        return true
    } else {
        return false
    }
}

console.log(validateCpf("077.402.116-05"))