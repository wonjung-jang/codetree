const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.
const tileMap = {};

let current = 0;
for(let i = 0; i < n; i++){
    let [num, direct] = commands[i];
    num = Number(num);
    while(num > 0){
        if(!tileMap[current]) tileMap[current] = [];

        if(direct === "R"){
            tileMap[current].push("B");
            if(num !== 1) current++;
        }

        if(direct === "L"){
            tileMap[current].push("W");
            if(num !== 1) current--;
        }
        
        num--;
    }
}

let wCnt = 0;
let bCnt = 0;
let gCnt = 0;
Object.values(tileMap).forEach(tile => {
    if(tile.length >= 4) {
        const colorCnt = { B: 0, W: 0 }
        tile.forEach(color => colorCnt[color]++);
        if(colorCnt.W >= 2 && colorCnt.B >= 2) return gCnt++;
    }

    const color = tile.pop();

    if(color === "W") return wCnt++;
    if(color === "B") return bCnt++;
});

console.log(wCnt, bCnt, gCnt);