const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.
const sumMin = (date, hour, min) => {
    return (date * 24 * 60) + (hour * 60) + min;
}

const diff = sumMin(A - 11, B - 11, C - 11);

console.log(diff >= 0 ? diff : -1);