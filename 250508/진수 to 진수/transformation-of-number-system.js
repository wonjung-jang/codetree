const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
// Please Write your code here.
const nArr = [...n].map(Number);

let num = 0;
for(let i = 0; i < nArr.length; i++){
    num = num * a + nArr[i];
}

const result = [];
while(true){
    if(num < b){
        result.push(num);
        break;
    }

    result.push(num % b);
    num = parseInt(num / b);
}

console.log(result.reverse().join(""));