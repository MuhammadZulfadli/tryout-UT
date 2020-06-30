const palindrome = (str) => {
    let string = str.replace(/[^\w]/gi, "").toLowerCase()
    return string == string.split('').reverse().join('')
}

console.log(palindrome('Cigar? Toss it in a can. It is so tragic'))
console.log(palindrome('I did, did I?'))
console.log(palindrome('Red rum, sir, is murder'))
console.log(palindrome('Eva, can I see bees in a cave?'))
console.log(palindrome('Hello World'))