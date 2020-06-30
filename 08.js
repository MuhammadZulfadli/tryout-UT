const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let angka = 0;
let result = 0;

const inputangka = (prompt, handler) => {
    readline.question(prompt, input => {
        if (handler(input) !== false) {
            inputangka(prompt, handler);
        } else {
            readline.close();
        }
    });
}

inputangka('Input Angka = ', input => {
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
});