const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.
points.map(([x, y], idx) => ({ dist: Math.abs(x) + Math.abs(y), num: idx + 1 }))
    .sort((a, b) => a.dist - b.dist).forEach(point => console.log(point.num));