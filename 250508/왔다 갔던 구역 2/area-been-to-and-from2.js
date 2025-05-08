const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
const section = {};

let position = 0;
for(let i = 0; i < n; i++){
    let [num, direct] = commands[i].split(" ");
    num = Number(num);
    while(num > 0){
        num--;
        position = direct === "R" ? position + 1 : position - 1;
        if(!section[position]){
            section[position] = 1;
            continue;
        }
        section[position]++;
    }
}
// Object.entries(section).forEach(([key, value]) =>console.log(key, value));
console.log(Object.values(section).filter(num => num >= 2).length);
