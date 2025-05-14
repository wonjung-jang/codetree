const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

// Please Write your code here.
const offset = 1000;
const arr = Array.from({length: 2000}, () => Array.from({length: 2000}, () => 0));

const [startX, startY, endX, endY] = rect1;
for(let i = startX; i < endX; i++){
    for(let j = startY; j < endY; j++){
        const [minX, minY, maxX, maxY] = rect2;

        if(i >= minX && i < maxX && j >= minY && j < maxY) continue;
        arr[i + offset][j + offset] = 1;
    }
}

const a = arr.filter(array => array.includes(1));
const col = a.length;
const row = Math.max(...a.map(arr => arr.filter(num => num === 1).length));


console.log(row * col);