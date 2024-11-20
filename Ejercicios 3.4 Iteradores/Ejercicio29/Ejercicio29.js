const evenNumbers = {
    start: 0, // Valor inicial de los números pares
    end: 20, // Valor final de los números pares

    //protocolo de iteración
    [Symbol.iterator]() {
        let current = this.start; // desde el inicio
        const end = this.end; // dfefine el limite

        return {
            next() {
                if (current <= end) {
                    const value = current; // Obtén el valor actual
                    current += 2; // Incrementa en 2 para obtener el siguiente número par
                    return { value, done: false }; // Devuelve el valor actual y done: false
                }
                return { value: undefined, done: true }; //  finaliza la iteración
            }
        };
    }
};

//  uso
for (const number of evenNumbers) {
    console.log(number); //numeros pares desde 0 hasta 20
}