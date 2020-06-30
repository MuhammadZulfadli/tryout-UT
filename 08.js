const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let angka = 0;
let result = 0;

const inputangka = (prompt, handler) => {
    rl.question(prompt, input => {
        if (handler(input) !== false) {
            inputangka(prompt, handler);
        } else {
            rl.close();
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
        console.log('Input berupa angka!');
    }
});