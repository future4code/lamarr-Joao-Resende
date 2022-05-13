/**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */

// INÍCIO

let cartasDoUsuario = [];
let cartasDoComputador = [];
let pontuacaoUsuario;
let pontuacaoComputador;


// Colocar cartas nos arrays

function colocarCartas (arrayDeCartas, numeroDeSorteios){
   let i = 0;
   while (i < numeroDeSorteios){
      let carta = comprarCarta();
      arrayDeCartas.push(carta);
      i++;
   }
   return arrayDeCartas
}

// Pontuações

function pontuacoes (arrayDeCartas){
   let pontuacao = 0;
   for (let elemento of arrayDeCartas){
      pontuacao += elemento.valor;
   }
   return pontuacao;
}

// Texto para imprimir mais cartas

function imprimirCartas (arrayDeCartas){
   let cartaImpressa = "";
   for (let elemento of arrayDeCartas){
      cartaImpressa += elemento.texto + " ";
   }
   return cartaImpressa;
}

// Imprimir Vencedor

function imprimirVencedor (){
   let vencedor;
   if (pontuacaoUsuario > pontuacaoComputador){
      vencedor = `O usuário ganhou!`;
   } else if (pontuacaoUsuario < pontuacaoComputador){
      vencedor = `O computador ganhou!`;
      if (pontuacaoComputador > 21){
         vencedor = `O usuário ganhou!`;
      }
   } else {
      vencedor = `Empate!`;
   }
   return vencedor
}

// Comprar mais carta

let comprar = true;
function comprarMaisCarta(){
   if (confirm(`Suas cartas são ${imprimirCartas(cartasDoUsuario)}. A carta revelada do computador é ${cartasDoComputador[0].texto}` +
   "\n" + "Deseja comprar mais uma carta?")){
      comprar = true;
   } else {
      comprar = false;
   }
   return comprar
}

// Iniciar ou não uma rodada
let iniciarRodada = confirm("Boas vindas ao jogo de BlackJack!" + 
"\n" + "Quer iniciar uma nova rodada?");
if (iniciarRodada) {
   colocarCartas(cartasDoUsuario, 2);
   colocarCartas(cartasDoComputador, 2);
   pontuacaoUsuario = pontuacoes(cartasDoUsuario);
   pontuacaoComputador = pontuacoes(cartasDoComputador);
   // Primeira condição (se as duas cartas iniciais do usuário ou do computador forem dois ases)
   if ((cartasDoUsuario[0].texto.includes("A") && cartasDoUsuario[1].texto.includes("A")) || (cartasDoComputador[0].texto.includes("A") && cartasDoComputador[1].texto.includes("A"))){
      cartasDoUsuario[0] = comprarCarta();
      cartasDoUsuario[1] = comprarCarta();
      cartasDoComputador[0] = comprarCarta();
      cartasDoComputador[1] = comprarCarta();
      pontuacaoUsuario = pontuacoes(cartasDoUsuario);
      pontuacaoComputador = pontuacoes(cartasDoComputador);
   }
   // Continuação do jogo
   // Cartas do usuário (adicionar uma por vez)
   while (comprar === true && pontuacaoUsuario < 21){
      comprarMaisCarta();
      if (comprar === true){
         colocarCartas(cartasDoUsuario, 1);
         pontuacaoUsuario = pontuacoes(cartasDoUsuario);
      }         
      if (pontuacaoUsuario > 21) {
         alert(`Suas cartas são ${imprimirCartas(cartasDoUsuario)}. Sua pontuação é ${pontuacaoUsuario}.` + 
         "\n" + `As cartas do computador são ${imprimirCartas(cartasDoComputador)}. A pontuação do computador é ${pontuacaoComputador}.` +
         "\n" + `O computador ganhou!`);
      }
   }
   // Cartas do computador
   if (pontuacaoUsuario <= 21){
      while (pontuacaoComputador < pontuacaoUsuario){
         colocarCartas(cartasDoComputador, 1);
         pontuacaoComputador = pontuacoes(cartasDoComputador);
      }
      alert(`Suas cartas são ${imprimirCartas(cartasDoUsuario)}. Sua pontuação é ${pontuacaoUsuario}` + 
      "\n" + `As cartas do computador são ${imprimirCartas(cartasDoComputador)}. A pontuação do computador é ${pontuacaoComputador}.` +
      "\n" + imprimirVencedor());
   }
} else {
   alert("O jogo acabou.");
}

// FIM