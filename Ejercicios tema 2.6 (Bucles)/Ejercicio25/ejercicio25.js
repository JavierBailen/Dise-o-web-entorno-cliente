let vidaJugador = 100;
let vidaMonstruo = 150;
let cantidadPociones = 3;
let ataqueMaximoJugador;
let ataqueMaximoMonstruo;
let curacionPocion = 35;
let prob_pocion;

let opcion;
let mensajeAccion;

function ataqueMonstruo(){
    ataqueMaximoMonstruo= Math.floor(Math.random()*20)+1;
    vidaJugador-=ataqueMaximoMonstruo;
    alert("El monstruo hace: "+ataqueMaximoMonstruo+" Puntos de daño");
    alert("Al jugador le quedan: "+vidaJugador+" Puntos de vida"); 
}




do {
    // Generar un ataque máximo entre 1 y 30
    ataqueMaximoJugador = Math.floor(Math.random() * 30) + 1;


    mensajeAccion = prompt("Dime qué quieres hacer en tu turno: \n" +
        "1.- Atacar \n" +
        "2.- Tomar una poción \n" +
        "3.- Buscar una poción \n" +
        "6.-Ver la vida del monstruo \n"+
        "7.-Ver vida del jugador\n"+
        "4.- Salir");

    switch (mensajeAccion) {
        case "1":
            vidaMonstruo -= ataqueMaximoJugador;
            alert("Has atacado al monstruo, le has quitado: " + ataqueMaximoJugador + " puntos de vida. Le quedan: " + vidaMonstruo + " puntos de vida.");
            if(vidaMonstruo<=0){
                alert("HAS MATADO AL MONSTRUO!!! HAS GANADO!!");
                break;
            }
            alert("Ha terminado tu turno. ");
            ataqueMonstruo();
            break;

        case "2":
            
            alert("Vas a tomarte una poción de salud");
            alert("Te quedan :"+vidaJugador+" Puntos de vida");
            vidaJugador+=curacionPocion;

            if(vidaJugador>100){
                vidaJugador=100;
            }
            alert("Te tomas la poción y ahora tienes: "+vidaJugador+" Puntos de vida");
            alert("Ha terminado tu turno. ");
            ataqueMonstruo();
            break;

        case "3":

            prob_pocion = Math.floor(Math.random()*4)+1;
            if(prob_pocion===1){
                alert("Tienes una poción extra");
                cantidadPociones++;
                alert("Tienes "+cantidadPociones+" Pociones");
                
                
                
            }else{
                alert("No hay poción, has sacado un "+ prob_pocion);
                
                
                
            }
            alert("Ha terminado tu turno. ");
            ataqueMonstruo();
            break;
            

        case "6":
            alert("Al monstruo todavía le quedan: "+vidaMonstruo+" Puntos de vida ");
            break;
        case "7":
            alert("Te quedan :"+vidaJugador+" Puntos de vida");
            break;

        // Otros casos (2, 3, 4) pueden ser añadidos aquí...
    }
    if(vidaMonstruo<=0){
        alert("HAS MATADO AL MONSTRUO!!! HAS GANADO!!!");
    }

} while (mensajeAccion !== "4");