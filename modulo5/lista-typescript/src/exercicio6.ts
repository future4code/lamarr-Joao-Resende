type Account = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const updateBalance = (accounts: Account[]): Account[] => {
    let sum = 0;
    let finalArray: Account[] = [];
    for (let account of accounts) {
        for (let i = 0; i < account.debitos.length; i++) {
            sum += account.debitos[i]
        }
        if (account.saldoTotal - sum < 0) {
            finalArray.push({ cliente: account.cliente, saldoTotal: account.saldoTotal - sum, debitos: [] })
        }
        sum = 0;
    }
    return finalArray;
}

const clientsAccounts = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]


console.log(updateBalance(clientsAccounts))