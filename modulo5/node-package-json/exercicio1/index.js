// EXERCÍCIO 1

// a) Para acessar os parâmetros passados na linha de comando utilizamos o process.argv.

// b)

const userName = process.argv[2]
const userAge = Number(process.argv[3])

const printMessage = (name, age) => {
    console.log(`Olá, ${name}! Você tem ${age} anos.`)
}

printMessage(userName, userAge)

// c)

const printAnotherMessage = (name, age) => {
    console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7} anos.`)
}

printAnotherMessage(userName, userAge)
