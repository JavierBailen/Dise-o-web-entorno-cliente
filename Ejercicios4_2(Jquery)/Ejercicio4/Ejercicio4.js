document.getElementById('loadUsers').addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET' , 'https://jsonplaceholder.typicode.com/users', true );

    xhr.onreadystatechange = function(){
        if(xhr.status===200){
            var datos = JSON.parse(xhr.responseText);
            var tabla = document.querySelector('#usersTable tbody');
            tabla.innerHTML = '';

            datos.forEach(function(usuario){
                var fila = tabla.insertRow();
                var nombre = fila.insertCell();
                var email = fila.insertCell(1);
                nombre.innerText= usuario.name;
                email.innerText = usuario.email;

                

            })
        }
        
    }
    xhr.send();
})