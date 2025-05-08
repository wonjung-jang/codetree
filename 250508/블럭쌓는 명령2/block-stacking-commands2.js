const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
const kans = Array.from({length: n}, () => 0);

for(let i = 0; i < k; i++){
    let [from, to] = segments[i];
    while(from <= to){
        kans[from]++;
        from++;
    }
}

console.log(Math.max(...kans));