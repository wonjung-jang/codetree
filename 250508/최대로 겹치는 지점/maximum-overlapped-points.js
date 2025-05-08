const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].trim().split(' ').map(Number));
}

// Please Write your code here.
const section = Array.from({length: 101}, () => 0);
for(let i = 0; i < n; i++){
    let [start, end] = segments[i];
    while(start <= end){
        section[start]++;
        start++;
    }
}

console.log(Math.max(...section));