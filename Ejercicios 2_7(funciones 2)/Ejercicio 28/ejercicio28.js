let num_rondas;
let modo_juego = "";
let colores = ["🟥", "🟨", "🟦", "🟩"];
let rondas = 0;
let colores_seleccionados = [];
let has_perdido = false;
let has_ganado = false;
let combinacion = [];




do {
    modo_juego = prompt("Dime El modo en el que quieres jugar \n 1.-MODO CLASICO \n 2.-MODO SUPERVIVENCIA \n 3.-SALIR");

    switch (modo_juego) {

        case "1":
            
            rondas = parseInt(prompt("modo juego 1 CLASICO, DIME LAS RONDAS DE JUEGO: "));
            has_perdido = false;
            has_ganado = false;

            for (let i = 0; i < rondas; i++) {
                let colores_mezclados = "";
                for (let i = 0; i < 4; i++) {
                    let num_random = Math.floor(Math.random() * 4);
                    colores_mezclados += colores[num_random];
                }
                alert("Tienes que adivinar esto: " + colores_mezclados);

                combinacion = prompt("Dime la combinación");

                if (combinacion === colores_mezclados) {
                    alert("Correcto!");

                } else {
                    alert("Has perdido, has llegado a la ronda "+i);
                    has_perdido=true;
                    break;
                }
                if(i+1===rondas){
                    has_ganado=true;
                    break;
                }
            }

            if(has_ganado){
                alert("Has ganado la partida!");
            }
            if(has_perdido){
                break;
            }






            break;

        case "2":
            alert("Modo juego 2");
            do{
                has_ganado=false;
                has_perdido=false;
                let colores_mezclados = "";

                for(let i = 0;i<4;i++){
                    let num_random = Math.floor(Math.random()*4);
                    colores_mezclados+= colores[num_random];
                }
                alert("Tienes que adivinar esto: "+colores_mezclados);

                combinacion = prompt("Dime la combinación");

                if(combinacion===colores_mezclados){
                    alert("Correcto");
                    continue;
                }else{
                    alert("Has perdido, la combinacion era "+colores_mezclados);
                    has_perdido=true;
                }
                if(has_perdido){
                    break;
                }

            }while(!has_perdido);
            break;
        case "3":
            alert("Saliendo...");
        
            break;

    }

} while (modo_juego !== "3");

