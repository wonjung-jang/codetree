const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
const printNumToOne = (n) => {
    if(n === 0) return;

    printNumToOne(n - 1);
    process.stdout.write(n + " ");
}

const printNumFromOne = (n) => {
    if(n === 0) return;
    
    process.stdout.write(n + " ");
    printNumFromOne(n - 1);
}

printNumToOne(n);
console.log();
printNumFromOne(n);
