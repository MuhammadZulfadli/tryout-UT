const leapyear = (from, to) => {
    for (let i = from; i <= to; i++) {
        let kabisat = (i % 4 == 0) && (i % 100 != 0) || (i % 400 == 0)
        kabisat ? console.log(`${i} adalah tahun kabisat`) : console.log(`${i} adalah bukan tahun kabisat`)
    }
}

leapyear(1600, 2020)