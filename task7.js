let i = 1;
let sum = 0;
while (true) {
    sum = sum + i;
    if (sum >= 100) {
        console.log(i);
        console.log(`new sum is ${sum} which is above 100 so let's break`);
        break;
    }
    console.log(i);
    console.log("Sum is:", sum);
    i++;
}
