```
function calculaPrecoTotal(quantidade) {
  let precoTotal;
  if (quantidade < 12){
    precoTotal = 1.3 * quantidade
  } else {
    precoTotal = 1 * quantidade
  }
  return precoTotal
}
```