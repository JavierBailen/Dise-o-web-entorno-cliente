
let peliculaElegida = prompt("Selecciona el número de tu película favorita \n" +
    "1.- Shrek \n" +
    "2.- Robocop \n" +
    "3.- El planeta de los simios"
);



    

    switch(peliculaElegida){
        case '1':
            document.write(
                "<h1> Tu ticket ha sido remitido!!!!</h1> \n" +
                "<h2>Pelicula: Shrek</h2> \n" +
                "<img src='Shrek-poster-1.webp'>"
            );
            break;
    
        case '2':
            document.write(
               "<h1> Tu ticket ha sido remitido!!!!</h1> \n" +
                "<h2>Robocop</h2> \n" + 
                " <img src='robocop.jpg'>"
            );
            break;
    
        case '3':
            document.write(
               "<h1> Tu ticket ha sido remitido!!!!</h1> \n" +
                "<h2>El planeta de los simios</h2> \n" + 
                " <img src='simios.jpg'>" 
            );
            break;
    }




