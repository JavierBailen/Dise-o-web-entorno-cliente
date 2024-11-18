//

//Ejercicio 17
function cambiarTexto(){
   
        let frase = "Texto modificado mediante javascript";
        document.getElementById('text1').textContent = frase;
 
}

//Ejercicio 18

function cambiarEstilo(){
    let element = document.body;
    element.style.color = 'red';
    element.style.fontSize = '20px';
    element.style.fontWeight = 'bold';

    
}

//Ejercicio 19
function toggleVisibilidad(){
    let parrafo = document.getElementById("text3");
    if(!parrafo.classList.contains('hidden')){
        parrafo.classList.add('hidden');
    }else{
        parrafo.classList.remove('hidden');
    }
    

    

}

//Ejercicio 20
let contador = 1;
function agregarElemento(){
    
    let lista = document.getElementById("lista");

    let elementoLista = document.createElement("li");

    elementoLista.textContent = "Elemento "+contador++;

    lista.appendChild(elementoLista);

     

}

//Ejercicio 21


window.addEventListener('mousemove', function(){
    let mouseArea = document.getElementById("mouseArea");

    mouseArea.onmousemove = function(evento){
        let x = evento.clientX;
        let y = evento.clientY;

        mouseArea.innerHTML = `Coord eje x: ${x}, coord eje y: ${y}`;
    }
})
