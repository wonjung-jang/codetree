const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push([height, weight, i]);
}

// Please Write your code here.
class Student {
    constructor(height, weight, number){
        this.height = height;
        this.weight = weight;
        this.number = number;
    }

    get info(){
        return console.log(`${this.height} ${this.weight} ${this.number}`);
    }
}

const compare = (a, b) => {
    if(a instanceof Student && b instanceof Student){
        return b.height - a.height || b.weight - a.weight || a.number - b.number;
    }
}

students.map(student => new Student(...student)).sort(compare).map(student => student.info);