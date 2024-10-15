

function comparar(mapa1,mapa2){
    for(let[clave,valor] of mapa1){
        if(!mapa2.has(clave) || mapa2.get(clave)!==valor){
            return false;
        }
    }
    return true;
}


let mapa1 = new Map();
mapa1.set("nombre","Javier"),
mapa1.set("apellidos", "Bailén Guardia");

let mapa2 = new Map();
mapa2.set("nombre","Javier"),
mapa2.set("apellidos", "Bailén Guardia");

console.log(comparar(mapa1,mapa2));

