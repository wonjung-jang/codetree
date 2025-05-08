const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0];

// Please Write your code here.
let num = 0;
const binaryArr = [...binaryStr].map(Number);
for(let i = 0; i < binaryArr.length; i++){
    num = num * 2 + binaryArr[i];
}
console.log(num);