const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}

// Please Write your code here.
const offset = 100;
const arr = Array.from({length: 200}, () => Array.from({length: 200}, () => 0));
for(let num = 0; num < n; num++){
    const [x1, y1, x2, y2] = rectangles[num];

    for(let i = x1; i < x2; i++){
        for(let j = y1; j < y2; j++){
            if(num % 2 === 0){
                arr[i + offset][j + offset] = 0;
            }else{
                arr[i + offset][j + offset] = 1;
            }
        }
    }
}

const result = arr.reduce((acc, cur) => acc += cur.filter(num => num === 1).length, 0);
console.log(result);