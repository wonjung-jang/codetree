const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));

// Please Write your code here.
class Weather{
    constructor(date, day, weather){
        this.date = date;
        this.day = day;
        this.weather = weather;
    }

    get info(){
        return `${this.date} ${this.day} ${this.weather}`;
    }
}

const result = forecasts.map(forecast => {
    const [date, day, weather] = forecast;
    return new Weather(date, day, weather);
}).sort((a, b) => a.date - b.date).find(forecast => forecast.weather === "Rain").info;

console.log(result);