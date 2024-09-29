let numeroSecreto = 15;

let numero_adivinar = parseInt(prompt("Dime un numero y lo adivino"));

if(numero_adivinar===numeroSecreto){
    alert("Has adivinado el numero!");
}else{
    if(numero_adivinar>numeroSecreto){
        alert("El numero a adivinar es menor que el que has introducido");
    }else if(numero_adivinar <numeroSecreto){
        alert("El numero a adivinar es mayor que el que tu has introducido")
    }
}

