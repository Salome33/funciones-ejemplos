const noEsPrimo = num => {

    if (num < 2) {
        return true;
    }

    if (num === 2) {
        return false;
    }

    if (num % 2 === 0) {
        return true;
    }

    const limite = Math.sqrt(num);
    for (let i = 3; i <= limite; i += 2) {
        if (num % i === 0) {
            return true;
        }
    } return false;
}

console.log(noEsPrimo(7));  // Output: false
console.log(noEsPrimo(10)); // Output: true
console.log(noEsPrimo(17)); // Output: false
console.log(noEsPrimo(0));  // Output: true

