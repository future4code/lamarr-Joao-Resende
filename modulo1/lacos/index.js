/* Exercícios de interpretação de código

1. O código está fazendo a soma de i (que vai de 1 até 5) com a variável soma (que muda cada vez que a variável i aumenta). Quando o valor de i for igual a 5, 
ele não executará mais a soma. Por isso, o valor impresso no console será 10 (0 + 1 + 2 + 3 + 4).

2. 
    a) 19
       21
       23
       25
       27
       30

    b) Sim. Usando o lista.indexOf(numero).

3. *
   **
   ***
   ****

*/



// Exercícios de escrita de código

// 1. 

let bichinhosDoUsuario = Number(prompt("Digite quantos bichinhos de estimação você tem."));

if (bichinhosDoUsuario === 0){
    console.log("Que pena! Você pode adotar um pet!");
} else {
    let bichinhosAtuais = 0;
    let arrayDeNomes = [];
    while (bichinhosAtuais < bichinhosDoUsuario){
        let nomes = prompt(`Digite o nome do seu ${bichinhosAtuais + 1}° bichinho.`);
        arrayDeNomes.push(nomes);
        bichinhosAtuais++;
    }
    console.log(arrayDeNomes);
}


// 2.

let arrayOriginal = [35, 3, 7, 10, 20, 50];

// a)

function imprimirValores (array) {
    let i = 0;
    while (i < array.length){
        let valor = array[i];
        console.log(valor);
        i++;
    }
}
imprimirValores(arrayOriginal);

// b)

function imprimirValoresDivididos (array) {
    let i = 0;
    while (i < array.length){
        let valor = array[i] / 10;
        console.log(valor);
        i++;
    }
}
imprimirValoresDivididos(arrayOriginal);

// c)

function imprimirValoresPares (array) {
    let novoArray = [];
    for (let valor of array){
        if (valor % 2 === 0){
        novoArray.push(valor);
        }
    }
    console.log(novoArray);
}
imprimirValoresPares(arrayOriginal);

// d)

function imprimirArrayString (array){
    let novoArray = [];
    for (let i = 0; i < array.length; i++){
        let valor = array[i];
        let strings = `O elemento do índex ${i} é: ${valor}`;
        novoArray.push(strings);
    }
    console.log(novoArray);
}
imprimirArrayString(arrayOriginal);

// e)

function imprimeMaioreMenor (array){
    let valorMaior = 0;
    let valorMenor = array[0];
    for (let valor of array){
        if (valor > valorMaior){
        valorMaior = valor;
        } else if (valor < valorMenor){
            valorMenor = valor;
        }
    }
    console.log(`O maior número é ${valorMaior} e o menor é ${valorMenor}`);
}
imprimeMaioreMenor(arrayOriginal);

// Desafios

// 1.

let numeroEscolhido = Number(prompt("Escolha seu número!"));
console.log("Vamos jogar!");

let num = Number(prompt("Chute um número!"));

let arrayDeChutes = [];
while (num !== numeroEscolhido){
   let comparar;
   if (num < numeroEscolhido){
      comparar = "menor";
   } else if (num > numeroEscolhido){
      comparar = "maior";
   }
   console.log(`O número chutado foi: ${num}.`);
   console.log(`Errou! O número escolhido é ${comparar}.`);
   num = Number(prompt("Chute outro número!"));
   arrayDeChutes.push(num);
   if (num === numeroEscolhido){
      let tentativas = arrayDeChutes.length + 1;
      console.log(`O número chutado foi: ${num}.`);   
      console.log("Acertou!");
      console.log(`O número de tentativas foi : ${tentativas}`);
   }
}

// 2.

let numeroEscolhido = Math.floor(Math.random() * 100 + 1);
console.log("Vamos jogar!");

let num = Number(prompt("Chute um número!"));

let arrayDeChutes = [];
while (num !== numeroEscolhido){
   let comparar;
   if (num < numeroEscolhido){
      comparar = "menor";
   } else if (num > numeroEscolhido){
      comparar = "maior";
   }
   console.log(`O número chutado foi: ${num}.`);
   console.log(`Errou! O número escolhido é ${comparar}.`);
   num = Number(prompt("Chute outro número!"));
   arrayDeChutes.push(num)
   if (num === numeroEscolhido){
      let tentativas = arrayDeChutes.length + 1;
      console.log(`O número chutado foi: ${num}.`);   
      console.log("Acertou!");
      console.log(`O número de tentativas foi : ${tentativas}`);
   }
}

// A alteração foi muito traquila de fazer, alterando apenas a variável 'numeroEscolhido'.
