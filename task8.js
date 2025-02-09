function isSquareNumber(n) {
    return Math.sqrt(n) % 1 === 0;
}
let i = 1;
while (i <= 100) {
    i++;
    if (isSquareNumber(i)) {
        break;
    }
    console.log(i);
}
