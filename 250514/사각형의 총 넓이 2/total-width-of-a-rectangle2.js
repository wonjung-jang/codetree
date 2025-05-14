const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const offset = 100;
const field = Array.from({length: 200}, () => Array.from({length: 200}, () => 0));

for(let i = 0; i < n; i++){
    const [minX, minY, maxX, maxY] = rects[i];

    for(let x = minX; x < maxX; x++){
        for(let y = minY; y < maxY; y++){
            field[offset + x][offset + y] = 1;
        }
    }
}

const result = field.reduce((acc, cur) => {
    const count = cur.filter(num => num === 1).length;
    return acc += count;
}, 0);

console.log(result);