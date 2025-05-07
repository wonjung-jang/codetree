const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

// Please Write your code here.
const dateOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const calcTotalDate = (month, date) => {
    const sum = dateOfMonth.slice(0, month).reduce((acc, cur) => acc += cur);
    const d = dateOfMonth[month - 1] - date;
    return sum - d;
}

const diff = calcTotalDate(m2, d2) - calcTotalDate(m1, d1);

let count = parseInt(diff / 7);

if(diff % 7 >= dayOfWeek.indexOf(A)) count++;

console.log(count);