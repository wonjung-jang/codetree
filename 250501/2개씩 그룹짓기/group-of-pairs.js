const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// Please Write your code here.
nums.sort((a, b) => a - b);
const minGroup = [];
const maxGroup = [];
for(let i = 0; i < 2 * n; i++){
    if(i % 2 === 0) minGroup.push(nums[i]);
    else maxGroup.push(nums[i]);
}

console.log(maxGroup.reduce((acc, cur) => acc += cur));