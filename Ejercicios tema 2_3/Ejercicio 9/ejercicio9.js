let numero = Number(prompt("Dime un numero y te digo si es par o impar"));

if(isNaN(numero)){
    alert("No has introducido un numero válido");
}else if(numero===0){
    alert("Has introducido 0");
}else if(numero%2===0){
    alert("El numero "+numero+" Es par");
}else{
    alert("El numero "+numero+" Es impar");
}


