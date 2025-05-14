const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

// Please Write your code here.
const fieldMap = {};

for(let num = 0; num < 2; num++){
    const [startX, startY, endX, endY] = [rectA, rectB][num];

    for(let i = startX; i < endX; i++){
        for(let j = startY; j < endY; j++){
            fieldMap[`${i}, ${j}`] = 1;
        }
    }
}

const [startX, startY, endX, endY] = rectM;

for(let i = startX; i < endX; i++){
    for(let j = startY; j < endY; j++){
        delete fieldMap[`${i}, ${j}`];
    }
}

console.log(Object.values(fieldMap).length);