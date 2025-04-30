const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
const f = (n) => {
    if(n < 10) return Math.pow(n, 2);

    return f(parseInt(n / 10)) + f(n % 10);
}

console.log(f(n));