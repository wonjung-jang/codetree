const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const studentInputs = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(' ').map(Number);
    studentInputs.push([height, weight]);
}

// Please Write your code here.
studentInputs
    .map((student, idx) => [...student, idx + 1])
    .sort((a, b) => a[0] - b[0] || b[1] - a[1])
    .forEach(student => console.log(student.join(" ")));