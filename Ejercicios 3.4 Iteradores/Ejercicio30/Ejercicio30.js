
function fibonacci() {
    let a = 0;   
    let b = 1;  

    while (true) {
        yield a;  // devuelve el valor de a
        [a, b] = [b, a + b]; // calcula el siguiente valor 
    }
}

const generador = fibonacci();

// Obtengo los 10 primeros nums
for (let i = 0; i < 10; i++) {
    console.log(generador.next().value); // llama al generador para obtener el siguiente número
}
