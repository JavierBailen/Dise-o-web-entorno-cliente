class Coche{
    //Metemos las propiedades de la clase
    #marca;
    #modelo;
    #año;

    constructor(marca,modelo,año){
        this.marca= marca,
        this.#modelo=modelo,
        this.#año = año

    }
    descripcionCoche(marca,modelo,año){
        console.log(
            this.marca,
            this.#modelo,
            this.#año
        );
    }
}

let coche = new Coche("Mitsubishi","Pajero",1996);

coche.descripcionCoche();
