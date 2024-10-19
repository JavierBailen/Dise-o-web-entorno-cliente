function parImpar(num){

    try{
        if(typeof num !=='number'){
            throw new Error("No es numerico");
        }
        if(num%2===0){
            console.log("Es par");
        }else{
            console.log("Es impar");
        }

    }catch(error){
        console.error("Error",error.message);
    }finally{
        console.log("Consulta realizada");
    }

}

parImpar("8");