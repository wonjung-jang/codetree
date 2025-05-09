const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.
let current = 0;
const tileMap = {};
for(let i = 0; i < n; i++){
    let [num, direct] = commands[i].split(" ");
    num = Number(num);

    while(num > 0){
        if(direct === "R"){
            tileMap[current] = "B";
            if(num !== 1) current++;
        }

        if(direct === "L"){
            tileMap[current] = "W";
            if(num !== 1) current--;
        }

        num--;
    }
}

let wCnt = 0;
let bCnt = 0;
Object.values(tileMap).forEach(tile => {
    return tile === "B" ? bCnt++ : wCnt++;
})

console.log(wCnt, bCnt);