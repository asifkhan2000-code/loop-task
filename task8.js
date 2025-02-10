for (let num = 2; num <= 100; num++) {
    if (Math.sqrt(num) % 1 === 0) {
        console.log("First square number encountered:", num);
        break;
    }
}
