const wordAnagram = (word: string): number => {
    let wordLength = word.length
    let result = word.length
    if (wordLength === 0 || wordLength === 1) {
        return 1
    }
    while (wordLength > 1) {
        wordLength--
        result *= wordLength
    }
    return result
}

console.log(wordAnagram("mesa"))