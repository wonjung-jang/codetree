const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.
const tileMap = {};
const result = [];

let endPoint = 0;
for(let i = 0; i < n; i++){
    let [num, direct] = commands[i];
    num = Number(num);
    const startPoint = endPoint;
    let color = "";
    if(direct === "R") {
        endPoint += num;
        color = "B";
    }
    if(direct === "L"){
        endPoint -= num;
        color = "W"
    }

    let [start, end] = [startPoint, endPoint].sort((a, b) => a - b);

    while(start < end){
        if(!tileMap[start]) tileMap[start] = [];
        tileMap[start].push(color);
        start++;
    }
}

let bCnt = 0;
let wCnt = 0;
let gCnt = 0;
Object.values(tileMap).forEach(tile => {
    if(tile.length >= 4) {
        return gCnt++;
    }

    const color = tile.pop();
    if(color === "B") return bCnt++;
    if(color === "W") return wCnt++;
});

console.log(wCnt, bCnt, gCnt);