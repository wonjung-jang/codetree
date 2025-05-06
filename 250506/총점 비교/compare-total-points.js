const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.trim().split(' '));

// Please write your code here.
class Student {
    constructor(name, kor, en, math){
        this.name = name;
        this.kor = Number(kor);
        this.en = Number(en);
        this.math = Number(math);
    }

    get info(){
        return console.log(`${this.name} ${this.kor} ${this.en} ${this.math}`)
    }
}

function compareTotalScore(a, b) {
    if(a instanceof Student && b instanceof Student){
        return (a.kor + a.en + a.math) - (b.kor + b.en + b.math);
    }
}

studentData.map(student => new Student(...student)).sort(compareTotalScore).map(student => student.info);
