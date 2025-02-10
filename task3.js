const prompt = require("prompt-sync")();
let i = 81;
let sum = 0;
while (i <= 131) {
    sum = sum + i;
    console.log(i);
    i += 2;
}
console.log("sum of all the odd numbers from 81 to 131", sum);

let j = 206;
let Sum = 0;
while (j <= 311) {
    Sum = Sum + j;
    console.log(j);
    j += 2;
}
console.log("sum of all the even numbers from 206 to 311", Sum);
