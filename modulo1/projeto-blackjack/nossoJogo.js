/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// // INÍCIO

// console.log("Boas vindas ao jogo de Blackjack!");

// // Variáveis

// const carta1DoUsuario = comprarCarta();
// const carta2DoUsuario = comprarCarta();
// const carta1DoComputador = comprarCarta();
// const carta2DoComputador = comprarCarta();

// const pontuacaoUsuario = carta1DoUsuario.valor + carta2DoUsuario.valor
// const pontuacaoComputador = carta1DoComputador.valor + carta2DoComputador.valor

// // Iniciar ou não uma rodada

// if (confirm("Quer iniciar uma nova rodada?")) {
// 	console.log(`Usuário - cartas: ${carta1DoUsuario.texto} ${carta2DoUsuario.texto} - pontuação ${pontuacaoUsuario}`)
//    console.log(`Computador - cartas: ${carta1DoComputador.texto} ${carta2DoComputador.texto} - pontuação ${pontuacaoComputador}`)
//    // Imprimir o vencedor
//    if (pontuacaoUsuario === pontuacaoComputador){
//       console.log("Empate!")
//    } else if (pontuacaoUsuario > pontuacaoComputador){
//       console.log("O usuário ganhou!")
//    } else {
//       console.log("O computador ganhou!")
//    }
// } else {
// 	console.log("O jogo acabou.")
// }

// // FIM

