// PRIMEIRO EXERCÍCIO

const users = [
    { id: 1, name: 'Fulano' },
    { id: 2, name: 'Ciclano' },
    { id: 3, name: 'Beltrano' },
    { id: 4, name: 'Fulana' }
]


const registerUser = (user) => {
    const exists = users.find(e => e.id === user.id)
    const regex = /^[a-zA-Z ]+$/.test(user.name)
    if (typeof user.id !== 'number') {
        return console.log(`Erro. Parâmetro inválido ('${user.id}').`)
    } else if (!regex) {
        return console.log(`Erro. Parâmetro inválido ('${user.name}').`)
    } else if (exists) {
        return console.log(`Erro. Parâmetro inválido ('id ${user.id} já existe').`)
    } else {
        users.push(user)
        return console.log(users)
    }
}

registerUser({ id: 5, name: 'Fulano' })
registerUser({ id: 1, nome: 'Ciclana' })

// SEGUNDO EXERCÍCIO

const generateMultiTable = (number) => {
    if (number < 1 || number > 10) {
        return console.log(`Erro. Parâmetro inválido (número precisa valer entre 1 e 10).`)
    } else if (typeof number !== 'number') {
        return console.log(`Erro. Parâmetro inválido (deve ser um número).`)
    } else {
        let numbersArray = []
        for (let i = 0; i <= 10; i++) {
            numbersArray.push(`${number} x ${i} = ${number * i}`)
        }
        return console.log(numbersArray)
    }
}

generateMultiTable(5)
generateMultiTable(50)
generateMultiTable("10")
