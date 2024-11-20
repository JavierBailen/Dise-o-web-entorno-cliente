//crear un WeakMap para el sistema de caché
const cache = new WeakMap();

//funcion para obtener datos con almacenamiento en cache
function getCachedData(obj) {
    if (cache.has(obj)) {
        console.log("Cargando desde caché...");
        return cache.get(obj);
    } else {
        console.log("Generando nuevos datos...");
        // Supongamos que el dato es derivado del objeto
        const data = `Datos procesados para ${JSON.stringify(obj)}`;
        cache.set(obj, data); // Guardar en cach
        return data;
    }
}

//objetos clave
const obj1 = { id: 1, name: "Objeto 1" };
const obj2 = { id: 2, name: "Objeto 2" };

//usar función con los objetos
console.log(getCachedData(obj1)); // generara y almacenará los datos
console.log(getCachedData(obj1)); // cargara los datos desde la caché

console.log(getCachedData(obj2)); //generara y almacenara los datos
console.log(getCachedData(obj2)); //cargará los datos desde la caché

//Eliminar referencia a obj1
console.log("Eliminando referencia a obj1...");
obj1 = null; //ahora el recolector de basura puede eliminarlo

