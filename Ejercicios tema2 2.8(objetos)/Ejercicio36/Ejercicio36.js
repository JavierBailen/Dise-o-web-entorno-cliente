let alumnos = [
    {nombre: "Javier",edad: 28,nota: 9},
    {nombre: "Juan",edad:32,nota:7},
    {nombre: "Estibaliz",edad: 19,nota: 8}
];

for(alumno of alumnos){
    if(alumno.nota>7){
        console.log(alumno.nombre+": "+alumno.nota);
    }
}