//Ejercicio 13


function duplicarParrafo(){
    let texto = document.getElementById("inputText").value;
    let div = document.getElementById("textDisplay");



    div.innerHTML = "<p>"+texto+"</p>";

}

//Ejercicio 14

function moverVentana() {
    // Comprobamos si el navegador permite mover la ventana
    if (window.moveBy) {
        window.moveBy(100, 100);
    } else {
        alert("El navegador no permite mover la ventana.");
    }
}

//Ejercicio 15
function mostrarCoordenadas(event){
    let mouseInfo = document.getElementById("mouseInfo");
    let x = event.clientX;
    let y = event.clientY;

    mouseInfo.textContent = `Coordenadas del raton: X:${x}, Y:${y}`;
}
let mouseInfo = document.getElementById("mouseInfo");
mouseInfo.addEventListener('mousemove',mostrarCoordenadas);

//Ejercicio 16
function abrirYcerrarVentana(){
    let nuevaVentana = window.open("https://www.google.com", "_blank", "width=600,height=600");
    //Cerrar ventana
    setTimeout(()=>{
        if(nuevaVentana && !nuevaVentana.closed){
            nuevaVentana.close();
            console.log("Ventana cerrada");
        }
    },3000);
}
let openWindowButton = document.createElement("button");
openWindowButton.innerText = "Abrir y cerrar ventana";
openWindowButton.addEventListener('click',abrirYcerrarVentana);
document.body.appendChild(openWindowButton);




