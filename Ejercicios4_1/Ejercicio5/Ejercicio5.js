//escuchar el evento submit



document.getElementById("locationForm").addEventListener("submit", function(event){

    event.preventDefault();
    let q = document.getElementById("cityInput").value;
    console.log(q);


    //solicitud a la api
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&APPID=269aeb530ff1ea76d39a5e99b171c2cf`)
    .then((response) => response.json())
    .then(datos=>{
        console.log(datos);
        let divMostrarDatos = document.getElementById("weatherResult")
        divMostrarDatos.innerHTML= `<ul>
                                        <li>Nombre de la ciudad: ${datos.name}</li>
                                        <li>Pais: ${datos.sys.country}</li>
                                        <li>Descripcion del clima: ${datos.weather[0].description}</li>
                                        <li>Humedad: ${datos.main.humidity}</li>
                                        <li>Velocidad del Viento: ${datos.wind.speed}</li>
                                        <li>Temperatura máxima: ${datos.main.temp_max}c</li>
                                        <li>Temperatura mínima: ${datos.main.temp_min}c</li>
                                    </ul>`
})
})







