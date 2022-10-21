const fixPrice = (price: number): string => {
    const adjustedValue: string = price.toFixed(2).replace('.', ',')
    return "R$ " + adjustedValue
}

type Inventory = {
    nome: string,
    quantidade: number,
    valorUnitario: number
}

type FixedInventory = {
    nome: string,
    quantidade: number,
    valorUnitario: string
}

const fixInventory = (inventory: Inventory[]): FixedInventory[] => {
    let productValue: string;
    let finalInventory: FixedInventory[] = []
    for (let product of inventory) {
        productValue = fixPrice(product.valorUnitario)
        finalInventory.push({ ...product, valorUnitario: productValue })
    }
    return finalInventory.sort(
        (a, b) => a.quantidade - b.quantidade
    )
}

const companyInventory = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
]

console.log(fixInventory(companyInventory))