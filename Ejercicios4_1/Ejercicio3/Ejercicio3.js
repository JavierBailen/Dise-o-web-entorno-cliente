//obtengo el valor del contador de visitas
let contador = parseInt(getCookie("visitas"));
if(isNaN(contador)){
    contador= 0;
}
let fecha = new Date();



//declaro las cookies
document.cookie=`fecha=${fecha.toUTCString()}; path=/`;
document.cookie=`visitas=${contador}; path=/`;



let totalVisits = document.getElementById('totalVisits');
let firstVisitDate = document.getElementById('firstVisitDate');



//funcion que me va a dar el valor de una cookie buscandola  por su nombre
function getCookie(nombreCookie){
    let cookiesArray = document.cookie.split("; ");
    //recorro el array de cookies y parto en dos cuando se encuentre el caracter =, asi me quedo con la clave por un lado y el valor por otro
    for(let cookie of cookiesArray){
        let [key, valor] = cookie.split("=");
        //si la key es igual al nombre de la cookie que busco, me devuelve valor, si no null
        if(key==nombreCookie){
            return valor;
        }
    }

    return null;
}

function borrarCookie(nombreCookie){
    //pongo la fecha en pasado para borra la cookie
    document.cookie = `${nombreCookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

function resetVisits(){
    //borro las cookies y a los elementos html donde se muestran las visitas y la fechas las pongo de nuevo
    borrarCookie("visitas");
    borrarCookie("fecha");

    let totalVisits = document.getElementById("totalVisits");
    let firstVisitDate = document.getElementById("firstVisitDate");

    totalVisits.innerText= "0";
    firstVisitDate.innerText= "-";
}

function mostrarEstadisticas(){
    
    let totalVisits = document.getElementById("totalVisits");
    let firstVisitDate = document.getElementById("firstVisitDate");
    let lastVisitDate = document.getElementById("lastVisitDate");

    if(contador===1){
        firstVisitDate.innerText= getCookie("fecha");
    }

    totalVisits.innerText= getCookie("visitas");
    
    lastVisitDate.innerText = getCookie("fecha");
}

function iniciarVisitas(){
    let visitasAntiguas = getCookie("visitas");

    if(visitasAntiguas){
        contador = parseInt(visitasAntiguas)+1;
        document.cookie=`visitas=${contador}; path=/`;
    }else{
        //primera visita
        contador = 1;
        document.cookie=`visitas=${contador}; path=/`;
        document.cookie=`fecha=${fecha.toUTCString()}; path=/`;
    }
}

iniciarVisitas();
mostrarEstadisticas();



