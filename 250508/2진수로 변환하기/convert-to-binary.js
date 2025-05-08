const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
const convertBinaryNumber = (number) => {
    if(number === 0) return 0;
    let result = [];
    while(number > 0){
        result.push(number % 2);
        number = parseInt(number / 2);
    }
    return result.reverse().join("");
}

console.log(convertBinaryNumber(n));