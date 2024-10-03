let nombre = prompt("Introduce un nombre");

if(nombre.length==0){
    nombre=prompt("No se ha introducido ningun nombre, introduce uno");
}
alert("Bienvenido "+nombre);