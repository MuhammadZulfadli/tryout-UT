const grade = (number) => {
    if (number >= 90) {
        console.log('A')
    } else if (number >= 80 && number <= 89) {
        console.log('B')
    } else if (number >= 70 && number <= 79) {
        console.log('C')
    } else if (number >= 60 && number <= 69) {
        console.log('D')
    } else {
        console.log('E')
    }
}

grade(90)
grade(10)
grade(80)
