const contenedor = document.getElementById('contenedor');
const addButton = document.getElementById('addButton');
let contadorBotones = 1;

addButton.addEventListener('click',()=>{
    const button = document.createElement('button');
    button.textContent= `Boton ${contadorBotones}`;
    button.id = `btn-${contadorBotones}`;
    contenedor.appendChild(button);
    contadorBotones++;
})

//Eventos en el contenedor
contenedor.addEventListener('click',(e)=>{
    if(e.target.tagName==='BUTTON'){
        alert(`Id del boton ${e.target.id}`);
    }
})

