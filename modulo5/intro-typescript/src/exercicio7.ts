const converteParaRNA = (dna: string): string => {
    const rna: string = dna.replace(/A|T|C|G/gi, function (x: string): string {
        if (x === 'A') {
            return 'U'
        } else if (x === 'T') {
            return 'A'
        } else if (x === 'C') {
            return 'G'
        } else {
            return 'C'
        }
    })
    return rna
}

console.log(converteParaRNA("ATTGCTGCGCATTAACGACGCGTA"))