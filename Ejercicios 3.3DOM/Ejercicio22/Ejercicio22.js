//Ejercicio23

let elementoMovible = document.getElementById('draggable');
let ladoX= false;
let ladoY = false;
let moviendose = false;

//para empezar a arrastrar el elemento
elementoMovible.onmousedown = function(event){
    ladoX = event.clientX - elementoMovible.getBoundingClientRect().left;
    ladoY = event.clientY - elementoMovible.getBoundingClientRect().top;
    moviendose= true;
}

document.onmousemove = function(event){
    if(moviendose){
        elementoMovible.style.left = event.clientX - ladoX + 'px';
        elementoMovible.style.top = event.clientY - ladoY +'px';
    }
}
document.onmouseup = function(){
    moviendose = false;
    
}


//Ejercicio 24