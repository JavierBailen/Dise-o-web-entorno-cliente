let tablero = [
    ["✅","❌","❌"],
    ["✅","✅","✅"],
    ["❌","✅","✅"]
];

let descubiertas =  [
    ["⏺","⏺","⏺"],
    ["⏺","⏺","⏺"],
    ["⏺","⏺","⏺"]
];

let totalCasillasVacias = 0;
let totalCasillasDescubiertas = 0;


function jugar(){
    while(true){
        1,5
        let coordenadas_usuario = prompt("Dime coordenadas formato fila-columna (1,2) o escribe 'salir' para terminar:");
        if(coordenadas_usuario === "salir"){
            alert("Saliendo");
            break;
        }

        // Obtener las coordenadas
        let coordenadas = coordenadas_usuario.split(",");
        
        // Validar que se ingresaron dos coordenadas
        if (coordenadas.length !== 2) {
            alert("Formato incorrecto. Usa fila,columna (ej: 1,2)");
            continue;
        }
        
        // Convertir las coordenadas a números
        let fila = Number(coordenadas[0]) - 1; // Restar 1 para ajustar al índice 0
        let columna = Number(coordenadas[1]) - 1; // Restar 1 para ajustar al índice 0

        // Verificamos si las coordenadas son válidas
        if(fila < 0 || fila >= tablero.length || columna < 0 || columna >= tablero[fila].length){
            alert("Coordenadas inválidas");
            continue;
        }

        // Verificamos si la casilla ya fue levantada
        if(descubiertas[fila][columna] !== "⏺"){
            alert("Ya has descubierto esa casilla, intenta otras coordenadas");
            continue;
        }

        // Descubrimos la casilla
        descubiertas[fila][columna] = tablero[fila][columna];

        // Mostramos el estado actual del tablero
        mostrarTablero(descubiertas);

        // Comprobamos si el jugador ha encontrado una mina
        if(tablero[fila][columna] === "❌"){
            alert("Has encontrado una mina, GAME OVER!");
            break;
        } else {
            totalCasillasDescubiertas++;
            // Comprobamos si el jugador ha ganado
            if(totalCasillasDescubiertas === totalCasillasVacias){
                alert("ENHORABUENA HAS GANADO!!!");
                break;
            }
        }
    }
}


function mostrarTablero(tableroMostrar){
    let mostrar = "";
    for(let fila of tableroMostrar){
        mostrar += fila.join(" ") + "\n";
    }
    alert(mostrar);
}

// Contar las casillas vacías
for(let fila of tablero){
    for(let columna of fila){
        if(columna === "✅"){
            totalCasillasVacias++;
        }
    }
}





// Iniciar el juego
jugar();
