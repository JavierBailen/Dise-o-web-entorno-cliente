function temporizador(){
    console.log("Inicio del programa");
    setTimeout(()=>{
        console.log("Han pasado 2 segundos");
        console.log("Fin del programa");
    },2000);

    
}

function temporizador2(){
    console.log("Inicio del programa");
    let contador =1;

    let intervalo = setInterval(()=>{
        console.log(contador);
        contador++;
        if(contador>5){
           clearInterval(intervalo); 
        }

    },1000);
    
}

temporizador2();