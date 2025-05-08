const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].trim().split(' ').map(Number));
}

// Please write your code here.
const offset = 100;
const sunboon = Array.from({length: 201}, () => 0);
for(segment of segments){
    let [start, end] = segment;
    while(start <= end){
        sunboon[start + offset]++
        start++;
    }
}

console.log(Math.max(...sunboon));