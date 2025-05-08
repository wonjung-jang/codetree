const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

// Please Write your code here.
const result = [];
while(true){
    if(n < b){
        result.push(n);
        break;
    }

    result.push(n % b);
    n = parseInt(n / b);
}
console.log(result.reverse().join(""));