let albumes = fetch("https://jsonplaceholder.typicode.com/albums")
.then(response => {
    return response.json();
})
.then(data =>{
    let albumes_filtrados = data.filter(elemento => elemento.userId === 3);
    console.log(albumes_filtrados);
});


