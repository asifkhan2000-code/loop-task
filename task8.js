// 1st method
for (let num = 2; num <= 100; num++) {
    if (Math.sqrt(num) % 1 === 0) {
        console.log("First square number encountered:", num);
        break;
    }
}
// second method
let i = 2;
while (true) {
    if (Number.isInteger(Math.sqrt(i))) {
        console.log("First square number encountered, it is", i);
        break;
    }
    i++;
}