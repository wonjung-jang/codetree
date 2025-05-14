const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const offset = 100;
const arr = Array.from({length: 200}, () => Array.from({length: 200}, () => 0));

for(let i = 0; i < n; i++){
    const [x, y] = rects[i];

    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            arr[i + x + offset][j + y + offset] = 1;
        }
    }
}

const result = arr.reduce((acc, cur) => acc += cur.filter(num => num === 1).length, 0);
console.log(result);