let coches = ['🚗', '🏎️', '🚙', '🚓'];

const tiempoDeCarrera = (pista)=>{
    let factorPista;
    if(pista ==="Barro"){
        factorPista = 1.5;

    }else if(pista ==="Asfalto"){
        factorPista = 1;
    }else{
        //predeterminado
        factorPista = 1.2
    }

    let tiempoBase = Math.random()*3000+2000;
    return tiempoBase*factorPista;
    
}

//simular carrera para un solo coche
const carreraCoche = (coche,pista)=>{

   return new Promise((resolve)=>{
        const tiempo = tiempoDeCarrera(pista);
        console.log(`El coche ${coche} comienza la carrera`);
        setTimeout(()=>{
            console.log(`${coche} termina la carrera en ${tiempo}`);
            resolve({coche,tiempo});
        },tiempo);
    })
}

//simular carrera completa con todos los coches
const carreraOficial = async (pista)=>{
    console.log(`Pista seleccionada ${pista}`);
    console.log("Empieza la carrera");


    //promesas para los coches
    const promesasCoches = coches.map((coche)=> carreraCoche(coche,pista));
    //determino quien es el ganador utilizando Promise.race
    const cocheGanador = await Promise.race(promesasCoches);
    console.log(`El ganador es ${cocheGanador.coche} con un tiempo de ${cocheGanador.tiempo}`)

    //mostrar clasificacion final con primise.all
    const resultados = await Promise.all(promesasCoches);
    const clasificacion = resultados.sort((a,b)=>a.tiempo -b.tiempo);

    clasificacion.forEach((resultados,index)=>
        console.log(`${index+1}: ${resultados.coche} ${resultados.tiempo}`)
    );

}


const iniciarSimulacion = () =>{
    const pista = "Barro";
    carreraOficial(pista);
}
iniciarSimulacion();