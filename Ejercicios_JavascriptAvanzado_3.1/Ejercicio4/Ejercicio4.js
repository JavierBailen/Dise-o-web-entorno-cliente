let datos = [
    {"nombre":"Laptop","precio":1500,"stock":5},
    {"nombre":"Teclado","precio":50,"stock":15},
    {"nombre":"Monitor","precio":200,"stock":8}

];

let datosFiltrados = datos.filter(elemento => elemento.precio>100);

console.log(datosFiltrados);

console.log("Nombres de los productos que valen +100");
datosFiltrados.forEach(element => {
    console.log(element.nombre);
});

