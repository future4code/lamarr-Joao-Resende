const accounts = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]

const login = (email, password) => {
    const regexEmail = /^[a-z.]+@[a-z]+\.[a-z]+[.a-z]+?$/.test(email)
    const regexPassword = /.{6,}/.test(password)
    const exists = accounts.find(e => e.email === email)
    const accountIndex = accounts.findIndex(e => e.email === email)
    const account = accounts[accountIndex]
    if (!regexEmail) {
        return console.log('e-mail inválido')
    } else if (!regexPassword) {
        return console.log('senha deve possuir no mínimo 6 caracteres')
    } else if (exists && account.password !== password) {
        return console.log('e-mail ou senha incorretos')
    } else {
        return console.log('login bem-sucedido')
    }
}

login('astrodev@labenu.com', 'abc123')
login('bananinha@gmail.com', 'banana')
login('astrodev.labenu.com', 'abc123')
login('bananinha@gmail.com', 'ba')