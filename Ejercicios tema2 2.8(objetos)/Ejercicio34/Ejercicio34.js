let empresa = {
    nombre : "Infojaén",
    ubicacion: "La bobadilla",

    empleados: {
        nombre: "Javier",
        puesto: "Informático",
        salario: "3000€"
    }  
};


for(let empleado in empresa.empleados){
    console.log(empleado+":"+empresa.empleados[empleado]);
}