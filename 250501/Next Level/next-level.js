const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

// Please Write your code here.
class User{
    constructor(id = "codetree", level = 10){
        this.id = id;
        this.level = level;
    }

    printUserInfo(){
        return `user ${this.id} lv ${this.level}`;
    }
}

const user1 = new User();
const user2 = new User(user_id, level);
console.log(user1.printUserInfo());
console.log(user2.printUserInfo());

