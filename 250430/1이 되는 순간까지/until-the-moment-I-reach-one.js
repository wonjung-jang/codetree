const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
const f = (n) => {
    if(n === 1) return 0;

    if(n % 2 === 0) return 1 + f(parseInt(n/2))
    else return 1 + f(parseInt(n/3))
}

console.log(f(n));