const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.
const idxs = [];
arr.forEach((num, idx) => {
    if(idx === 0 || arr[idx] !== arr[idx - 1]){
        idxs.push(idx);
    }
});

const t = idxs.map((num, idx) => {
    if(idx === 0) return num;
    return num - idxs[idx - 1];
})

console.log(Math.max(...t));