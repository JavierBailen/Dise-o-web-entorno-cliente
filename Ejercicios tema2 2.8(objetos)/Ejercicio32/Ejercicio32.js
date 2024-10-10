let libro = {
    titulo: "El callejon",
    autor: "Isidoro Pomes",
    año: "1996"
};
//la variable pagina es la que va a recoger el nombre de la propiedad dentro del objeto
//luego iteramos el objeto libro con la variable pagina(La cual va pasando por todas las propiedades) e imprimimos el valor asociado a cada propiedad
for(let pagina in libro){
    console.log(pagina+": "+libro[pagina]);
    
}