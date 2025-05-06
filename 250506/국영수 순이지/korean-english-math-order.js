const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);

class Student {
    constructor(name, kor, en, math){
        this.name = name;
        this.kor = Number(kor);
        this.en = Number(en);
        this.math = Number(math);
    }

    get info(){
        return console.log(`${this.name} ${this.kor} ${this.en} ${this.math}`);
    }
}

// Please Write your code here.
const students = rawStudentData.map(student => new Student(...student.split(" ")));
students.sort((a, b) => b.kor - a.kor || b.en - a.en || b.math - a.math);
students.map(student => student.info);
