const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
const segements = [];

const offset = 1000;

let start = 0;
let end = 0;
for(let i = 0; i < n; i++){
    let [num, direct] = commands[i].split(" ");
    num = Number(num);
    start = end;

    if(direct === "R"){
        end += num;
    }

    if(direct === "L"){
        end -= num;
    }

    segements.push([start, end].sort((a, b) => a - b));
}

const section = Array.from({length: 2000}, () => 0);

for(let i = 0; i < segements.length; i++){
    let [start, end] = segements[i];

    while(start < end){
        section[start + offset]++;
        start++;
    }
}

console.log(section.filter(n => n >= 2).length);