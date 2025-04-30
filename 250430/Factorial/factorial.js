const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

// Please write your code here.
const fac = (n) => {
    if(n === 1) return n;

    return n * fac(n - 1);
}

console.log(fac(N));