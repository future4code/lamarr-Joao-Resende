const fruits = [
    {
        name: "Banana"
    },
    {
        name: "Laranja"
    }
]

const otherFruits = [
    {
        name: "Laranja"
    },
    {
        name: "Cebola"
    }
]

const generateUniqueItems = (firtsList, secondList) => {
    const firstNamesArray = firtsList.map(element => {
        return element.name
    })
    const secondNamesArray = secondList.map(element => {
        return element.name
    })
    const findSameName = firstNamesArray.findIndex(e => secondNamesArray.includes(e))
    if (findSameName !== -1) {
        firtsList.splice(findSameName, 1)
    }
    const finalList = firtsList.concat(secondList)
    return console.log(finalList)
}

generateUniqueItems(fruits, otherFruits)