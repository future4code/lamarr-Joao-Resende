const printSplitedDate = (name: string, birthDate: string): string => {
    const dateArray = birthDate.split("/")
    return `Olá me chamo ${name}, nasci no dia ${dateArray[0]} do mês ${dateArray[1]} do ano de ${dateArray[2]}`
}

console.log(printSplitedDate("João", "05/04/1993"))