const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const records = [];
for (let i = 1; i <= n; i++) {
  const [name, height, weight] = input[i].split(" ");
  records.push([name, Number(height), Number(weight)]);
}

// Please Write your code here.
class Person {
  constructor(name, height, weight){
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  getInfo(){
    return console.log(`${this.name} ${this.height} ${this.weight}`);
  }
}

records.map(record => new Person(...record)).sort((a, b) => a.height - b.height || b.weight - a.weight).map(person => person.getInfo());