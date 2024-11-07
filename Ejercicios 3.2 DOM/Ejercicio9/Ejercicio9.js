function cambiarColor(){
    let element = document.body;
    element.style.backgroundColor = 'lime';
}
function restaurarColor(){
    let element = document.body;
    element.style.backgroundColor = 'white';
}

function mostrarAlerta(){
    let ancho = window.innerWidth;
    let alto = window.innerHeight;

    window.alert(`Ancho: ${ancho}px, Alto: ${alto}px`);
}
//Ejercicio11
document.getElementById("showAlertButton").addEventListener("click", function(){
    let urlActual = window.location.href; 
    document.getElementById("paragraph").innerText = `La url actual es: ${urlActual}`;
});

//Ejercicio12
let displayInfo = document.getElementById("displayInfo");

let navegadorInfo = `
   <strong> Navegador:</strong> ${navigator.appName}<br>
   <strong> Version: </strong> ${navigator.appVersion}<br>
   <strong> Plataforma: </strong>  ${navigator.platform}<br>
   <strong> User:</strong> ${navigator.userAgent}<br>
`;

displayInfo.innerHTML = navegadorInfo;
