const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// Please Write your code here.
class Yowon{
    constructor(code, score){
        this.code = code;
        this.score = score;
    }

    printInfo(){
        return `${this.code} ${this.score}`
    }
}

const yowons = [];

input.forEach(data => {
    const [code, score] = data.split(' ');
    yowons.push(new Yowon(code, Number(score)));
});

yowons.sort((a, b) => b.score - a.score);

console.log(yowons.pop().printInfo());