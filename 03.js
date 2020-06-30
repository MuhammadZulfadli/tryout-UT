let angka = []
let total = 0;

const max = () => {
    for (let i = 0; i <= 100; i++) {
        angka.push(Math.floor(Math.random() * 100) + 1)
    }
    console.log('Nilai Maksimal ' + Math.max(...angka))
}

const min = () => {
    for (let j = 0; j <= 100; j++) {
        angka.push(Math.floor(Math.random() * 100) + 1)
    }
    console.log('Nilai Minimum ' + Math.min(...angka))
}

const average = () => {
    for (let k = 0; k < angka.length; k++) {
        total += angka[k];
    }
    let a = total / angka.length
    let result = Number.parseInt(a)
    console.log(`Nilai rata-rata ${result}`)
}

max()
min()
average()


