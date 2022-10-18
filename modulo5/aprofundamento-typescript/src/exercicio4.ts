type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// Para transpilar basta utilizar o comando tsc e o nome do arquivo no terminal.

// Caso o arquivo esteja em outra pasta, basta mudar o caminho no comando.

// Para transpilar vários arquivos basta usar o comando tsc e os nomes dos arquivos separados por um espaço.