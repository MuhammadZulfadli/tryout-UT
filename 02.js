const oddEven = (number) => {
    let isEven = number % 2 == 0 ? true : false
    isEven ? console.log(`${number} adalah bilangan genap`) : console.log(`${number} adalah bilangan ganjil`)
}

oddEven(10)
oddEven(5)