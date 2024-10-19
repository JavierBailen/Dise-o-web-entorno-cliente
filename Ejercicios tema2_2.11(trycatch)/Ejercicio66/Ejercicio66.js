function lecturaEscritura(readFile, writeFile){
    let file = null;

    

    try{
        console.log("Abriendo el archivo....");

        if(readFile){
            console.log("Leyendo archivo...");
            if(Math.random()<0.5){
                throw new Error("Error al leer el archivo");
            }
            console.log("Lectura de archivo exitosa");

        }

        if(writeFile){
            console.log("Escribiendo en el archivo...");
            console.log("Archivo escrito correctamente");
        }

    }catch(error){
        console.log("Ocurrió un error: "+error.message);
    }finally{
        //Esto siemmpre se ejecuta al final 
        console.log("Cerrando el archivo...");
        file = null;

    }

}

//lecturaEscritura(true, false); // Simula solo la lectura
//lecturaEscritura(true, true);  // Simula lectura y escritura
lecturaEscritura(false, true); //solo escritura