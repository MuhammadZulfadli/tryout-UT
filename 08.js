const prompt = require('prompt-sync')({ sight: true })

let angka = 0
let result = 0
let findangka = false

while (!findangka) {
    let input = prompt('input angka ')
    if (isFinite(input)) {
        angka = Number(input);
        result += angka;
        console.log(result);
    } else if (input === '=') {
        console.log('Result : ' + result);
        return false;
    } else {
        console.log('Input hanya berupa angka!');
    }
}
