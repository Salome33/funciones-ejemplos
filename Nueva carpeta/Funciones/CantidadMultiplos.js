const cantidadMultiplos = (num, rango) => {

    if (!Number.isInteger(num) || !Number.isInteger(rango)) {
        return "Ambos valores deben ser números enteros.";
    }

    num = Math.abs(num);
    rango = Math.abs(rango);

    let count = 0;

    for (let i = 1; i <= rango; i++) {

        if (i % num === 0) {
            count += 1;
        }
    } return count;
};

console.log(cantidadMultiplos(3, 10));  // Output: 3 (3, 6, 9)
console.log(cantidadMultiplos(5, 20));  // Output: 4 (5, 10, 15, 20)
console.log(cantidadMultiplos(-4, 16)); // Output: 4 (4, 8, 12, 16)
console.log(cantidadMultiplos(7, 50));  // Output: 7 (7, 14, 21, 28, 35, 42, 49)
console.log(cantidadMultiplos(2.5, 10));// Output: "Ambos valores deben ser números enteros."
