let palabras = [ "oreja","ataulfo"];
let num_intentos = 6;
let num_random = Math.floor(Math.random() * palabras.length);

let palabra_random = palabras[num_random]; 
let palabra_oculta = "";


for (let i = 0; i < palabra_random.length; i++) {
    palabra_oculta += "*";    
}


while(num_intentos>0){
    
    
    
        let opcion = prompt("La palabra a adivinar es: "+palabra_oculta+" Te quedan "+num_intentos+" Restantes");
        let palabra_array = palabra_oculta.split("");
        let acierto = false;
    
        for(let i=0;i<palabra_random.length;i++){
            let caracter = palabra_random.charAt(i);
            if(opcion===caracter){
                palabra_array[i]= opcion;
                acierto=true;
            }
        }
    
        palabra_oculta = palabra_array.join("");
        if(!acierto){
            num_intentos--;
        }
    
        if(!palabra_oculta.includes("*")){
            alert("Enhorabuena has ganado! Has adivinado la palabra"+palabra_oculta);
            break;
            
        }
        if(num_intentos===0){
            alert("Lo siento, has fallado la palabra era: "+palabra_random);
        }
}










