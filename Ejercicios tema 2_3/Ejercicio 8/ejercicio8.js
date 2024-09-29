let nombre = prompt("Dime tu nombre");

while(nombre.length===0){
    nombre = prompt("No has introducido ningun nombre, Dime un nombre valido");

    if(nombre.length!=0){
        alert("Bienvenido "+nombre);
        break;
    }
}

/**
 if(nombre.length===0){
    alert("No has introducido ningun nombre");
    nombre = prompt("Vuelve a introducir un nombre válido esta vez");
}else{
    alert("Bienvenido "+nombre);
}
 */
