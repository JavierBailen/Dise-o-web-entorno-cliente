let array_canciones = [];
let eleccion;
let cancion;
let nombre_artista;


//Hago una función que me devuelve el numero del indice en el que se encuentre una ","
function indexComa(frase) {
    let indiceComa = -1;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === ',') {
            indiceComa = i;
            break;
        }
    }
    return indiceComa;
}
//Hago un bucle que se estará repitiendo hasta pulsar la tecla 5
do {
    eleccion = prompt("1.- AGREGAR CANCION \n" +
        "2.- BUSCAR CANCIONES POR ARTISTA\n" +
        "3.- LISTAR ARTISTAS\n" +
        "4.- VER LISTADO COMPLETO DE CANCIONES\n" +
        "5.- SALIR"
    );

    switch (eleccion) {

        case "1":
            cancion = prompt("Dime canción (formato: artista, canción)");
            if (cancion.includes(",")) {
                array_canciones.push(cancion);
                alert("Vas a añadir la canción: " + cancion);

                alert("Lista de canciones: \n" + array_canciones.join("\n"));
            } else {
                alert("Formato incorrecto (artista, canción)");
            }
            break;

        case "2":
            //Hago un array para guardar a los artistas mas adelante
            let artista_encontrados = [];
            //preguntamos al usuario por un nombre de artista
            nombre_artista = prompt("Dime el nombre del artista").trim().toLowerCase();
            
            for (let i = 0; i < array_canciones.length; i++) {
                //Determino el indice de la coma de cada cancion
                let indiceComa = indexComa(array_canciones[i]);
                //Si el indice de la coma es un numero diferente a -1
                if (indiceComa !== -1) {
                    //Guardo en la variable filtro_artista el resultado de aplicar un slice al array_canciones[i] desde el indice 0 hasta el de la "," 
                    let filtro_artista = array_canciones[i].slice(0, indiceComa).trim().toLowerCase();
                    //Ahora ya se supone que tengo el nombre de los artistas, si el nombre del artista resultante es igual al que se pregunta al usuario
                    if (filtro_artista === nombre_artista) {
                        //Introducimos al artista en el array artista_encontrados
                        artista_encontrados.push(array_canciones[i]);
                    }
                }
            }
            if (artista_encontrados.length > 0) {
                //Mostramos la lista
                alert("Canciones encontradas: \n" + artista_encontrados.join("\n"));
            } else {
                alert("No hay ocurrencias del artista " + nombre_artista);
            }
            break;

        case "3":
            //Creo un array para guardar elementos a continuación
            let listaArtistas = [];
            //Hago un bucle que se repetirá tantas veces como la longitud del array de canciones
            for (let i = 0; i < array_canciones.length; i++) {
                //Determino el indice de la coma en cada cancion utilizando la función que cree en el principio
                //Si el indice de la coma es diferente a -1 guardaremos en la variable filtro_artista el resultado de recorrer el array de canciones y cortar cada cancion desde el indice 0 hasta el "indiceComa"
                let indiceComa = indexComa(array_canciones[i]);
                if (indiceComa !== -1) {
                    let filtro_artista = array_canciones[i].slice(0, indiceComa);
                    //Si el array en el que guardamos a los artistas no incluye el artista que hemos "encontrado" se añade al array de artistas
                    if (!listaArtistas.includes(filtro_artista)) {
                        listaArtistas.push(filtro_artista);
                    }

                }
            }
            if (listaArtistas.length > 0) {
                //Si hay contenido se muestra la lista si no no 
                alert("Listado de artistas \n" + listaArtistas.join("\n"));
            } else {
                alert("No hay artistas en la lista");
            }
            break;

        case "4":
            alert("LISTADO DE CANCIONES:\n" + array_canciones.join("\n"));
            break;
    }

} while (eleccion !== "5");
