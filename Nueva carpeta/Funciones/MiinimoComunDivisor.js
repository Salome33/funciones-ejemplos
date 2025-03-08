const mcm = (a, b) => {

    if (a === 0 || b === 0) {
        return 0;
    }

    const mcd = (x, y) => {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    };

    return (a * b) / mcd(a, b);
};

console.log(mcm(4, 5));   // Output: 20
console.log(mcm(6, 8));   // Output: 24
console.log(mcm(7, 3));   // Output: 21
console.log(mcm(0, 10));  // Output: 0
