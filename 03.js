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
    console.log('Nilai rata - rata ' + total / angka.length)
}

max()
min()
average()


// let angka = []
// for (let i = 0; i <= 100; i++) {
//     angka.push(Math.floor(Math.random() * 100) + 1)
// }

// let total = 0;
// for (let j = 0; j < angka.length; j++) {
//     total += angka[j]
// }

// const average = total / angka.length

// console.log('Nilai maksimum ' + Math.max(...angka))
// console.log('Nilai minimum ' + Math.min(...angka))
// console.log('Nilai rata - rata ' + average)
