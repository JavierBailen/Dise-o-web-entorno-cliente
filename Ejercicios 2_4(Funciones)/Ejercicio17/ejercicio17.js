function facturacion(precioProducto, medioPago){
    let descuento;
    switch(medioPago){
        case "C":

            if(precioProducto<200){
                descuento = 0;
                alert("El precio asciende a: " + (precioProducto - (precioProducto * descuento)));
            }else{
                if(precioProducto>=200 && precioProducto<=400){
                    descuento=0.10;
                    alert("El precio asciende a: " + (precioProducto - (precioProducto * descuento)));
                }else{
                    if(precioProducto>400){
                        descuento = 0.40;
                        alert("El precio asciende a: " + (precioProducto - (precioProducto * descuento)));
                    }
                }
            }
            break;

        case "E":
            if(precioProducto<200){
                descuento = 0;
                alert("El precio asciende a: " + (precioProducto - (precioProducto * descuento)));
            }else{
                if(precioProducto>=200 && precioProducto<=400){
                    descuento=0.30;
                    alert("El precio asciende a: " + (precioProducto - (precioProducto * descuento)));
                }else{
                    if(precioProducto>400){
                        descuento = 0.40;
                        alert("El precio asciende a: " + (precioProducto - (precioProducto * descuento)));
                    }
                }
            }
            break;


        case "D":
            if(precioProducto<200){
                descuento = 0;
                alert("El precio asciende a: " + (precioProducto - (precioProducto * descuento)));
            }else{
                if(precioProducto>=200 && precioProducto<=400){
                    descuento=0.20;
                    alert("El precio asciende a: " + (precioProducto - (precioProducto * descuento)));
                }else{
                    if(precioProducto>400){
                        descuento = 0.40;
                        alert("El precio asciende a: " + (precioProducto - (precioProducto * descuento)));
                    }
                }
            }
            break;


    }
    
}

facturacion(250,"E");

