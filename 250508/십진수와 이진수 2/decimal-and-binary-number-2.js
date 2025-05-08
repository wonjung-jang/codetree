const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];

// Please Write your code here. 
const binaryArr = [...binaryInput].map(Number);
let num = 0;
for(let i = 0; i < binaryArr.length; i++){
    num = num * 2 + binaryArr[i];
}
num *= 17;
const result = [];
while(true){
    if(num < 2){
        result.push(num);
        break;
    }

    result.push(num % 2);
    num = parseInt(num / 2);
}

console.log(result.reverse().join(""));