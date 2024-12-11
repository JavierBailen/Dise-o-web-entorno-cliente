const usuario = {
    nombre: "Usuario",
    edad: 20,
    email: "usuario@test.com",
    password: "12345678"
};
const actualizarProgreso = (paso)=>
    console.log(`Paso ${paso} completado`);

const verificarEdad = (usuario)=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(usuario.edad >18){
                resolve(usuario);
            }else{
                reject("Debes ser mayor de 18 años");
            }
        },1000);
    });


const verificarEmail = (usuario)=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(usuario.email.includes("@")){
                resolve(usuario);
            }else{
                reject("El email introducido debe contener @");
            }
        },1000);
    });

const verificarPassword = (usuario)=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(usuario.password.length>=6){
                resolve(usuario);
            }else{
                reject("La contraseña introducida debe tener una longitud minima de 6 caracteres");
            }
        },1000);
    });


//Encadeno las validaciones
verificarEdad(usuario)
.then((user)=>{
    actualizarProgreso(1);
    return verificarEmail(user);
})
.then((user)=>{
    actualizarProgreso(2);
    return verificarPassword(usuario);
})
.then((user)=>{
    actualizarProgreso(3);
    console.log("Registro exitoso",user);
})

