const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
const offset = 1000;
const section = Array.from({length: 2000}, () => 0);

let position = offset;
for(let i = 0; i < n; i++){
    let [num, direct] = commands[i].split(" ");
    num = Number(num);
    while(num > 0){
        position = direct === "R" ? position + 1 : position - 1;
        section[position]++;
        num--;
    }
}

console.log(section.filter(num => num >= 2).length);
