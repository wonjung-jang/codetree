const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
const f = (arr) => {
    if(arr.length === 1) return arr.pop();

    return Math.max(arr.pop(), f(arr));
}

console.log(f(arr));