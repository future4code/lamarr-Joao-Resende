// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    // return array.reverse();

    // Desafio
    for (let i = 0; i < array.length/2; i++){
        let primeiro = array[i];
        let ultimo = array[array.length-(i+1)];
        array[i] = ultimo;
        array[array.length-(i+1)] = primeiro;
        }
    return array;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    // return array.sort((a, b) => a - b);

    // Desafio
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[j] > array[j+1]){
            let primeiro = array[j];
            let segundo = array[j+1];
            array[j] = segundo;
            array[j+1] = primeiro;
            }
        }        
    }
    return array;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    // let novoArray = array.filter((valor, index, array) => {
    //     return valor % 2 === 0;
    // })
    // return novoArray;

    // Desafio
    let novoArray = [];
    for (let valor of array){
        if (valor % 2 === 0){
            novoArray.push(valor);
        }
    }
    return novoArray;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArray = retornaNumerosPares(array).map((valor, index, array) => {
        return Math.pow(valor, 2);
    })
    return novoArray;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let valorMaior = array[0];
    for (let valor of array){
        if (valor > valorMaior){
        valorMaior = valor;
        }
    }
    return valorMaior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior;
    let menor;
    if (num1 >= num2){
        maior = num1;
        menor = num2;
    } else {
        maior = num2;
        menor = num1;
    }
    let divisivel;
    if ((maior % menor) === 0){
        divisivel = true;
    } else {
        divisivel = false;
    }
    let subtracao = maior - menor;
    return {maiorNumero: maior, maiorDivisivelPorMenor: divisivel, diferenca: subtracao};
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i += 2) {
        numerosPares.push(i);
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let tipoDeTriangulo;
    if ((ladoA === ladoB) && (ladoA === ladoC)){
        tipoDeTriangulo = "Equilátero";
    } else if ((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)){
        tipoDeTriangulo = "Isósceles";
    } else {
        tipoDeTriangulo = "Escaleno";
    }
    return tipoDeTriangulo;
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b);
    return [array[array.length-2], array[1]];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {...pessoa, nome: "ANÔNIMO"};
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = pessoas.filter((valor, index, array) =>{
        return valor.altura >= 1.5 && valor.idade > 14 && valor.idade < 60;
    })
    return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((valor, index, array) =>{
        return valor.altura < 1.5 || valor.idade <= 14 || valor.idade >= 60;
    })
    return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let objeto of contas){        
        let soma = 0;
        for (let i = 0; i < objeto.compras.length; i++){
        soma += objeto.compras[i];
        }
        objeto.saldoTotal -= soma;
        objeto.compras = [];
    }
    return contas; 
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let arrayOrdenadoAlfabeticamente = consultas.sort(function(a, b) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    })
    return arrayOrdenadoAlfabeticamente;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   let arrayOrdenadoPorData = consultas.sort(function(a, b) {
    if (a.dataDaConsulta.substr(6, 4) < b.dataDaConsulta.substr(6, 4)){
        return -1;
    } else if (a.dataDaConsulta.substr(6, 4) > b.dataDaConsulta.substr(6, 4)){
        return 1;
    } else {
        if (a.dataDaConsulta.substr(3, 2) < b.dataDaConsulta.substr(3, 2)){
            return -1;
        } else if (a.dataDaConsulta.substr(3, 2) > b.dataDaConsulta.substr(3, 2)){
            return 1;
        } else {
            if (a.dataDaConsulta.substr(0, 2) < b.dataDaConsulta.substr(0, 2)){
                return -1;
            }
            if (a.dataDaConsulta.substr(0, 2) > b.dataDaConsulta.substr(0, 2)){
                return 1;
            } else {
                return 0;
            }
        }
    }
    });
    return arrayOrdenadoPorData;
}