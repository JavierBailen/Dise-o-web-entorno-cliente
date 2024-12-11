function ruleta(){
    console.log("La ruleta esta girando....");

    return new Promise((resolve,reject)=>{
        //tiempo aleatorio entre 1 y 3
        const tiempo = Math.floor(Math.random()*3000)+1000;
        //numero aleatorio entre 1 y 10
        const numAleatorio = Math.floor(Math.random()*11);

        setTimeout(()=>{
            if(numAleatorio===0){
                reject("La ruleta no funciona");
            }else{
                resolve(numAleatorio);
            }

        },tiempo);



    });

    

    

} 
function calcularPuntos(numero){
    return numero*10;
}

//consumir promesa

ruleta()
.then((numero)=>{
    console.log("Tenemos ganador");
    const puntos = calcularPuntos(numero);
    console.log(`Numero obtenido: ${numero}--Puntuacion:${puntos}  `);
})
.catch((error)=>{
    console.error(error);
})


ruleta();