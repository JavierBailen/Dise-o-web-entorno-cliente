document.getElementById('formulario').addEventListener('input', validarFormulario);


function validarFormulario(e){
    e.preventDefault();

    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('telefono');
    const email = document.getElementById('email');

    //Mensajes de error
    const errorNombre = document.getElementById('error-nombre');
    const errorTelefono = document.getElementById('error-telefono');
    const errorEmail = document.getElementById('error-email');

    //valido nombre
    if(nombre.value.lenght <3){
        errorNombre.textContent ='El nombre al menos tiene que tener tres letras';

    }else{
        errorNombre.textContent='';
    }

    //valido telefono

    const telefonoRegex =  /^\d{9}$/;

    if(!telefonoRegex.test(telefono.value)){
        errorTelefono.textContent='El telefono debe tener exactamente 9 digitos';
    }else{
        errorTelefono.textContent='';
    }

    //valido Email

    const emailRegex=  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email.value)){
        errorEmail.textContent='El email no tiene el formato esperado';
    }else{
        errorEmail.textContent="";
    }
}