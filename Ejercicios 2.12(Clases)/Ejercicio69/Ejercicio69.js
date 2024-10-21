class Persona{
    #nombre;
    #edad;
    #trabajo;

    constructor(nombre,edad,trabajo){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#trabajo = trabajo;

    }

     getInfo(){
        return "Nombre: "+ this.#nombre+"\n"+"Edad: "+this.#edad+"\n"+"Trabajo: "+this.#trabajo;
     }

     cambiarTrabajoPersona(nuevoTrabajo){
        this.#trabajo = nuevoTrabajo;
    }
    
}

let persona1 = new Persona("Javier",28,"Probador de colchones");
console.log(persona1);
persona1.cambiarTrabajoPersona("Probador de profilacticos");
console.log(persona1);
