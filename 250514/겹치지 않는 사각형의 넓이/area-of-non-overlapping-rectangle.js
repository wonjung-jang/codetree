const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

// Please Write your code here.
const arr = Array.from({length: 2000}, () => Array.from({length: 2000}, () => 0));
const offset = 1000;

for(let num = 0; num < 2; num++){
    const [startX, startY, endX, endY] = [rectA, rectB][num];

    for(let i = startX; i < endX; i++){
        for(let j = startY; j < endY; j++){
            const [minX, minY, maxX, maxY] = rectM;
            if(i >= minX && i < maxX && j >= minY && j < maxY) continue;
            arr[i + offset][j + offset] = 1;
        }
    }
}

console.log(arr.reduce((acc, cur) => acc += cur.filter(num => num === 1).length, 0));