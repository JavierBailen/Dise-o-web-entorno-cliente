let json = JSON.stringify([
    {"nombre":"Javier","edad":29},
    {"nombre":"Benjamín","edad":25},
    {"nombre":"Ataulfo","edad":3}
]);

let datos = JSON.parse(json);

datos.forEach(element => {
    console.log(element.nombre);
    console.log(element.edad);
});


