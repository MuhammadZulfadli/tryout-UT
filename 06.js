const rekursif = (n) => {
    if (n === 0) return
    console.log(n)
    rekursif(n - 1)
}
rekursif(10)

// const rekursif = (a) => {
//     if (a < 10) {
//         console.log(a)
//         rekursif(a += 1)
//     } else {
//         console.log("end")
//     }
// }

// rekursif(1)