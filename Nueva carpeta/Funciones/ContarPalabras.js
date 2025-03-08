const contarPalabras = str => {

    str = str.trim();

    if (str === "") {
        return 0;
    }
    const palabras = str.split(/\s+/);

    return palabras.length;
};

console.log(contarPalabras("Hola mundo"));       // Output: 2
console.log(contarPalabras("JavaScript es genial")); // Output: 3
console.log(contarPalabras("   Espacios extra   ")); // Output: 2
console.log(contarPalabras(""));               // Output: 0
console.log(contarPalabras("Una sola palabra"));   // Output: 3
