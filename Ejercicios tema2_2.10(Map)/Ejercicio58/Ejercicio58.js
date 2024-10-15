let mapa1 = new Map();
mapa1.set("Nombre","Javier");
mapa1.set("Edad",28);

let mapa2 = new Map();
mapa2.set("Ciudad","Madrid");
mapa2.set("Pais","España");

let mapaTotal = new Map([...mapa1,...mapa2]);

for(elemento of mapaTotal){
    console.log(elemento);
}