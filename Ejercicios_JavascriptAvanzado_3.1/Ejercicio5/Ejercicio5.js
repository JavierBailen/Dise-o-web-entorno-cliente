let datos_json = {
    nombre: "Javier",
    correo: "fetamacaballo@gmail.com",
    edad: 29
};

let datos_Json = JSON.stringify(datos_json);

fetch("https://api.ejemplo.com/enviar",{
    method:"POST",
    headers: {
        "Content-Type": "application/json"
    },
    body:datos_Json
})
.then(reponse=>reponse.json())
.then(data =>{
    console.log("Respuesta servidor: ",data);

})
.catch(error =>{
    console.error("Ha ocurrido un error");
})



