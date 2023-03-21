const isOneEdit = (strA: string, strB: string): boolean => {
  if (strA.slice(0, -1) === strB || strB.slice(0, -1) === strA) {
    return true
  }

  if (strA.length === strB.length) {
    let counter = 0
    for (let i = 0; i < strA.length; i++) {
      if (strA[i] !== strB[i]) {
        counter++
      }
    }
    if (counter <= 1) {
      return true
    }
  }

  return false
}


// testes
console.log("1", "expected true", isOneEdit("banan", "banana"));
console.log("2", "expected true", isOneEdit("bananak", "banana"));
console.log("3", "expected true", isOneEdit("panana", "banana"));
console.log("4", "expected false", isOneEdit("bananaaa", "banana"));