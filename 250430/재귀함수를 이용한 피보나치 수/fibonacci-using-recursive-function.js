const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
const fib = (n) => {
    if(n === 2){
        return 1;
    }
    
    return 1 + fib(n - 1);
}

console.log(fib(n));