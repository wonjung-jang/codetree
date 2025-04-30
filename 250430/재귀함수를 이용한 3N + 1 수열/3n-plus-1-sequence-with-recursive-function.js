const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
const f = (n) => {
    if(n <= 1) return 0;

    if(n % 2 === 0) return 1 + f(parseInt(n / 2))
    else return 1 + f(3 * n + 1);
}

console.log(f(n));