const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const cloneArr = [...arr];
const map = cloneArr.sort((a, b) => a - b).reduce((acc, cur, idx) => {
    if(!acc[cur]){
        acc[cur] = [idx + 1];
        return acc;
    }
    acc[cur].push(idx + 1);
    return acc;
}, {});

const result = [];
arr.forEach(num => {
    const seq = map[num].shift();
    result.push(seq);
})
console.log(result.join(" "));