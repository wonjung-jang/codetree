const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Math.floor(Number(heightStr) * 10) / 10;
  const weight = Number(weightStr);
  students.push({ name, height, weight });
}

const printStudentInfp = (student) => console.log(`${student.name} ${student.height} ${student.weight}`)

// Please Write your code here.
console.log("name");
students.sort((a, b) => a.name.localeCompare(b.name)).map(printStudentInfp);
console.log("");
console.log("height");
students.sort((a, b) => b.height - a.height).map(printStudentInfp);