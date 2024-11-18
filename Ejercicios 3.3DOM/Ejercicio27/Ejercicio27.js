const archivoInput = document.getElementById('inputArchivo');
const mensaje = document.getElementById("mensaje");
const preview = document.getElementById('preview');

const TAMAÑO_MAXIMO = 1*1024*1024;

archivoInput.addEventListener('change',()=>{
    const archivo = archivoInput.files[0];
    mensaje.textContent='';
    preview.innerHTML ='';

    if(!archivo){
        mensaje.textContent = 'No se ha seleccionado archivo alguno';
        return;
    }
    if(!archivo.type.startsWith('image/')){
        mensaje.textContent = "El archivo qeu quieres subir no es una imagen";
        return;
    }
    if(archivo.size >TAMAÑO_MAXIMO){
        mensaje.textContent = 'El archivo supera la capacidad maxima permitida';
        return;
    }


    mensaje.textContent = 'El archivo no es valido';
    const img = document.createElement('img');
    img.src= URL.createObjectURL(archivo);
    img.style.maxWidth = '300px';
    preview.appendChild(img);

});

