const fraseReversa = (frase: string) : string => {
    return frase.split("").reverse().join("");
}

console.log(fraseReversa('abcd'))