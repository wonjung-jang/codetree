const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const personLines = input.slice(1, n + 1);

// Please Write your code here.
class Person{
    constructor(name, num, location){
        this.name = name;
        this.num = num;
        this.location = location;
    }

    get info(){
        return `name ${this.name}\naddr ${this.num}\ncity ${this.location}`;
    }
}

const person = personLines.map(person => {
    const [name, num, location] = person.split(" ");
    return new Person(name, num, location);
}).sort((a, b) => a.name.localeCompare(b.name)).pop();
console.log(person.info);