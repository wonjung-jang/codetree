const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const result = [];
for(let i = 1; i <= n; i++){
    if(i % 2 !== 0){
        const mid = arr.slice(0, i).sort((a, b) => a - b)[parseInt(i / 2)];
        result.push(mid);
    }
}

console.log(result.join(" "));