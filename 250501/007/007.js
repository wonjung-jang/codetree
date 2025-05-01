const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');
// Please Write your code here.
class SecretMeet{
    constructor(s_code, m_point, time){
        this.s_code = s_code;
        this.m_point = m_point;
        this.time = time;
    }

    printMeetData(){
        return `secret code : ${this.s_code}\nmeeting point : ${this.m_point}\ntime : ${this.time}`;
    }
}

const secretMeet = new SecretMeet(s_code, m_point, time);
console.log(secretMeet.printMeetData());
