const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// Please Write your code here.
nums.sort((a, b) => a - b);
const sums = [];
for(let i = 0; i < n; i++){
    sums.push(nums[i] + nums[(2 * n) - (i + 1)]);
}

console.log(Math.max(...sums));