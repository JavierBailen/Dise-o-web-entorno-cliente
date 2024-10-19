async function simularApiPeticion(exito){
    try{
        console.log("Iniciando peticion a la api....");

        const respuesta = await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(exito){
                    resolve("Datos recibidos de la api...");

                }else{
                    reject(new Error("Error en la peticioni api"));
                }
            },2000);
        });

        console.log(respuesta);
    }catch(error){
        console.error("Ocurrio un error",error.message);
    }finally{
        console.log("La peticion a la api ha finalizado");
    }
}


simularApiPeticion(false);
