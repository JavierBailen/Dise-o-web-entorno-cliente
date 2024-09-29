const contraseña = "KIWI";
let numeroIntentos = 3;

let contraIntroducida;

do {
    contraIntroducida = prompt("Dime contraseña"); 
    if (contraIntroducida !== contraseña) {
        numeroIntentos--;
        alert("Te quedan " + numeroIntentos + " intentos");

        if(numeroIntentos<=0){
            alert("Bloqueado");
        }
    } else {
        alert("¡Bienvenido!!!");
    }

    
} while (numeroIntentos > 0); 
