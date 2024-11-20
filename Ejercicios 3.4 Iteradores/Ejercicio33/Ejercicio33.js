// Generador con caché de potencias utilizando WeakMap
function* generadorPotencias() {
    // WeakMap para almacenar los resultados de las potencias
    const cache = new WeakMap();

    // Función interna para calcular la potencia y almacenarla en cache
    function calcularPotencia(base, exponente) {
        // Creamos un objeto que contendrá la base como propiedad
        const baseObj = { base };

        // Si el resultado ya está en el cache, lo devolvemos
        if (cache.has(baseObj)) {
            const baseCache = cache.get(baseObj);
            if (baseCache.has(exponente)) {
                console.log(`Uso del cache para: ${base} ^ ${exponente}`);
                return baseCache.get(exponente);
            }
        } else {
            cache.set(baseObj, new Map()); // Inicializamos el Map para la base
        }

        // Si no está en el cache, calculamos el resultado
        const resultado = Math.pow(base, exponente);

        // Guardamos el resultado en el cache
        cache.get(baseObj).set(exponente, resultado);

        console.log(`Cálculo de: ${base} ^ ${exponente}`);
        return resultado;
    }

    // Yield resultados de potencias calculadas
    let base = 2;
    let exponente = 1;

    while (true) {
        // Yield el resultado de la potencia y luego se incrementa el exponente
        yield calcularPotencia(base, exponente);
        exponente++;
        if (exponente > 5) {  // Solo generamos potencias hasta 5 para este ejemplo
            base++;
            exponente = 1;
        }
    }
}

// Crear el generador de potencias
const generador = generadorPotencias();

// Obtener los primeros 10 resultados de potencias
for (let i = 0; i < 10; i++) {
    console.log(generador.next().value);
}
