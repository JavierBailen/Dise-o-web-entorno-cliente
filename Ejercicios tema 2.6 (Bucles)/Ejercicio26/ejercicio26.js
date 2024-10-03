let colores = ["rojo","azul","amarillo","verde"];

let mensaje_accion;
let num_prob;
let num_rondas;
let num_random;
let respuesta;
let secuencia_colores;

let aciertos = true;


do{
    

mensaje_accion=prompt("Selecciona modo de juego\n"+
    "1-Por rondas\n"+
    "2-Hasta el fallo"
);

switch(mensaje_accion){
    case "1":
        
       num_rondas=parseInt(prompt("Dime el numero de rondas que quieres jugar"));
        secuencia_colores = [];
       

       for(let i =0;i<num_rondas;i++){
        num_random = Math.floor(Math.random()*colores.length);
            secuencia_colores.push(colores[num_random]);
            alert("Simon dice: "+secuencia_colores.join(","));




            for(let j=0;j<secuencia_colores.length;j++){
                respuesta = prompt("Cual es el color "+(j+1)+"?");

                if(respuesta!==secuencia_colores[j]){
                    alert("HAS FALLADO!! el color era: "+secuencia_colores[j]);
                    aciertos= false;
                    break;
                }
            }

            if(!aciertos){
                alert("HAS PERDIDO!. Has llegado hasta la ronda"+(i+1));
                break;
               }else{
                alert("Has acertado, pasas a la siguiente ronda");
               }
                

       }
       if(aciertos){
        alert("Felicidades, has completado todas las rondas");
        break;
       }

       
        break;
}
}while(mensaje_accion!=="3");