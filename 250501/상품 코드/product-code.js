const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [prod2_id, code2] = input[0].split(' ');
// Please Write your code here.
class Product{
    constructor(name = "codetree", code = 50){
        this.name = name;
        this.code = code;
    }

    get info(){
        return `product ${this.code} is ${this.name}`;
    }
}

const prod1 = new Product();
const prod2 = new Product(prod2_id, code2);

console.log(prod1.info);
console.log(prod2.info);