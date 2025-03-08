const calcularRaiz = (num, raiz) => {

    if (!Number.isInteger(num) || !Number.isInteger(raiz) || num < 0 || raiz <= 0) {
        return "Ambos valores deben ser enteros positivos.";
    }

    if (raiz === 1) {
        return num;
    }

    let aproximacion = num / 2;
    let precision = 0.00001;

    while (Math.abs(Math.pow(aproximacion, raiz) - num) > precision) {
        aproximacion = ((raiz - 1) * aproximacion + num / Math.pow(aproximacion, raiz - 1)) / raiz;
    }

    return aproximacion;
};

console.log(calcularRaiz(27, 3));  // Output: 3 (raíz cúbica de 27)
console.log(calcularRaiz(16, 4));  // Output: 2 (raíz cuarta de 16)
console.log(calcularRaiz(81, 2));  // Output: 9 (raíz cuadrada de 81)
console.log(calcularRaiz(-8, 3));  // Output: "Ambos valores deben ser enteros positivos."
console.log(calcularRaiz(10, -2)); // Output: "Ambos valores deben ser enteros positivos."
