let animal = {
    hablar: function(){
        console.log("sonido");
    },
    
};
let perro = Object.create(animal);

perro.hablar = function(){
    console.log("Guau!");
}

console.log(perro.hablar());
