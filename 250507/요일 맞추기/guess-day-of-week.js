const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.
const dayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const calcTotalDate = (month, date) => {
    const sum = dayOfMonth.slice(0, month).reduce((acc, cur) => acc += cur);
    const d = dayOfMonth[month - 1] - date;
    return sum - d;
}

const diff = calcTotalDate(m2, d2) - calcTotalDate(m1, d1);
console.log(day[1 + diff]);