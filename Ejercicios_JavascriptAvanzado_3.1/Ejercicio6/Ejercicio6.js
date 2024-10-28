let datos_json = [
    {"nombre":"Javier","edad":29,"nota":8},
    {"nombre":"Benjamín","edad":22,"nota":5},
    {"nombre":"Vanessa","edad":25,"nota":7}
];

datos_json.forEach((dato => {
    dato.nota +=1;
    console.log(dato.nombre);
    console.log("Nueva nota: "+dato.nota);
}));


let datos_javascript = JSON.stringify(datos_json);

console.log(datos_javascript);


