let producto = {
    nombre: "Lampara",
    precio: 30,
    cantidad: 2
};




console.log("Copia:");

let copia_producto = Object.assign({},producto);
copia_producto.cantidad = 18;
console.log(copia_producto);

console.log("Original");
console.log(producto);

