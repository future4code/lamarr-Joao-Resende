```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let arrayDeNumerosEscolhidos = arrayDeNumeros.filter(item => {
    return item === numeroEscolhido;
  });
  let mensagem;
  if (arrayDeNumerosEscolhidos.length === 0){
    mensagem = `Número não encontrado`;
  } else {
    mensagem = `O número ${numeroEscolhido} aparece ${arrayDeNumerosEscolhidos.length}x`
  }
  return mensagem;
}

```