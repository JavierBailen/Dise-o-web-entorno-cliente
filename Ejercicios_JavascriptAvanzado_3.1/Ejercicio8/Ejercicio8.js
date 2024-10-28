let nombre = prompt("Dime nombre");

fetch(`https://api.nationalize.io/?name=${nombre}`)
.then(response => {
    return response.json();
})
.then(data =>{
    console.log(data);
    let pais_probable = data.country.reduce((max,pais)=>max.probability > pais.probability ? max:pais);

    console.log(`El nombre ${nombre} tiene mas probabilidades de ser de ${pais_probable.country_id} con una probabilidad de ${pais_probable.probability*100} `);
})
