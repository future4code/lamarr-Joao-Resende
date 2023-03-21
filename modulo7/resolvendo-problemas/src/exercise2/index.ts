const stringCompressor = (str: string): string => {
  let arr = []
  for (let i = 0; i < str.length; i++) {
    let counter = 1
    while (str[i] === str[i + 1]) {
      counter++
      i++
    }
    arr.push(str[i] + counter)
    counter = 1
  }

  const finalStr = arr.join("")

  if (finalStr.length > str.length) {
    return str
  } else {
    return finalStr
  }

}

// testes
console.log("1", "expected a2b3", stringCompressor("aabbb"));
console.log("2", "expected a2b1c5a3", stringCompressor("aabcccccaaa"));
console.log("3", "expected accurate", stringCompressor("accurate"));
console.log("4", "expected escola", stringCompressor("escola"));
console.log("4", "expected a1c2u1r1a10t1e1", stringCompressor("accuraaaaaaaaaate"));


