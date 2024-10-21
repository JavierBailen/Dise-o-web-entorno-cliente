class Rectangulo{
    #ancho;
    #alto;

    constructor(ancho,alto){
        this.#alto = alto;
        this.#ancho = ancho;
    }
    calcularAreaRectangulo(){
        let area = this.#alto*this.#ancho;

        console.log("El area del rectangulo de "+this.#alto +" Centímetros de alto y "+this.#ancho+" Centímetros de ancho es : "+area+" Centímetros cuadrados");

    }


}

let rectangulo = new Rectangulo(20,30);

rectangulo.calcularAreaRectangulo();

let rectangulo2 = new Rectangulo(55,60);

rectangulo2.calcularAreaRectangulo();