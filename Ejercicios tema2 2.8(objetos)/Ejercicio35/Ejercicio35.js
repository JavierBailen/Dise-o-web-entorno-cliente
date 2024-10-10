let rectangulo = {
    ancho: 25,
    alto: 25,

    calcularArea: function(){
        return this.ancho*this.alto;
    }
};


console.log(rectangulo.calcularArea());