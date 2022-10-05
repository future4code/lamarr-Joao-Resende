const convertCelsius = (celsius, string) => {
    let result
    if (string === 'F' && !isNaN(celsius)) {
        result = 1.8 * celsius + 32
        return console.log(`${celsius}° Celsius é equivalente a ${result}° Farenheit.`)
    } else if (string === 'K' && !isNaN(celsius)) {
        result = celsius + 273.15
        return console.log(`${celsius}° Celsius é equivalente a ${result}° Kelvin.`)
    } else if (isNaN(celsius)) {
        return console.log(`Erro. Parâmetro inválido ('${celsius}').`)
    } else {
        return console.log(`Erro. Parâmetro inválido ('${string}').`)
    }
}

convertCelsius(30, 'F')
convertCelsius(30, 'K')
convertCelsius('trinta', 'F')
convertCelsius(30, 'G')
convertCelsius(30, 'k')