const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

// Please Write your code here.
const offset = 1000;
const arr = Array.from({length: 2000}, () => Array.from({length: 2000}, () => 0));

const [startX, startY, endX, endY] = rect1;
for(let i = startY; i <= endY; i++){
    for(let j = startX; j <= endX; j++){
        const [minX, minY, maxX, maxY] = rect2;

        if(i >= minY && i <= maxY && j >= minX && j <= maxX) continue;
        arr[j + offset][i + offset] = 1;
    }
}

let minX = Infinity;
let maxX = -Infinity;
let minY = Infinity;
let maxY = -Infinity;

for(let i = 0; i < 2000; i++){
    const array = arr[i];
    if(!array.includes(1)) continue;

    if(i < minY) minY = i;
    if(i > maxY) maxY = i;

    const firstIdx = array.indexOf(1);
    const lastIdx = array.lastIndexOf(1);

    if(minX > firstIdx) minX = firstIdx
    if(maxX < lastIdx) maxX = lastIdx;
}

const row = maxY - minY;
const col = maxX - minX;

console.log(minY === Infinity ? 0 : row * col);