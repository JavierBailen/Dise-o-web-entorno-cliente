let mapa = new Map();
mapa.set("nombre","Javier");
mapa.set("apellido","Bailen Guarida");
mapa.set("edad",29);
console.log("Mapa antes de borrar la edad: ")
for(let elemento of mapa){
    console.log(elemento);
}

mapa.delete("edad");
console.log("Mapa despues de borrar la edad: ")

for(let elemento of mapa){
    console.log(elemento);
}