let array = [
    {id:5486},
    {nombre:"Javier"}
];

let mapa = new Map();

array.forEach(obj =>{
    for(let key in obj){
        mapa.set(key,obj[key]);
    }
});

for(let[clave,valor] of mapa){
    console.log(`${clave}:${valor}`);
}