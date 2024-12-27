//Me creo la variable contadorId para atribuir un id unico a cada usuario porque sino todos tendrian como id el 101
let contadorId= 101;

function aniadirUsuario(event){
      event.preventDefault();
      //Me quedo con el valor de los inputs name y email
      let nombre = document.getElementById('name').value;
      let email = document.getElementById('email').value; 

      const idNuevo = contadorId++;
      //Hago el fetch a la api
      fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            //convierto de objeto a cadena de texto json
            body:JSON.stringify({
                  name: nombre,
                  email: email,
            }),
            //sin añadir esto me ponia el nombre y el email como undefined
            headers: {
                  'Content-type': 'application/json; charset=UTF-8',
            },
      })
      //convierto la respuesta del servidor(json) a un objeto o valor javascript
      .then((response)=> response.json())
      //Creo una fila con lo que me devuelve (user) y creo las filas con los datos del usuario, ademas del boton de borrar 
      .then((user)=>{
            let fila = document.createElement('tr');
            fila.innerHTML = `<td>${idNuevo}</td> <td>${user.name}</td>  <td>${user.email}</td>  <td><button onclick="borrarUsuario(${idNuevo})">Borrar</button></td>`;

            //añado el usuario al final de la lista
            document.querySelector('#userTableFetch tbody').appendChild(fila);
      })
}

//listener que va a estar a la espera de hacer lcick en el boton submit, cuando se pulse se llama a la funcion aniadirUsuario()
document.getElementById('userForm').addEventListener('submit',aniadirUsuario);


function borrarUsuario(id){
      const filas = document.querySelectorAll('#userTableFetch tbody tr');
      filas.forEach((fila)=>{
            let celdaId = fila.querySelector('td').textContent;
            if(celdaId == id){
                  fila.remove();
            }
      })
}




//AXIOS


function fetchDataAxios(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response=>{
            console.log("fetch satisfactorio: ",response.data);
      })
}

fetchDataAxios();

function aniadirUsuarioAxios(event){
      event.preventDefault();

      let nombre = document.getElementById("name").value;
      let email = document.getElementById("email").value;

      let contadorNuevo = contadorId++;

      axios.post('https://jsonplaceholder.typicode.com/posts',{
            name:nombre,
            email:email,
      })
      .then(response=>{
            let usuario = response.data;
            let fila = document.createElement("tr");
            fila.innerHTML=`
                        <td>${usuario.id}</td>
                        <td>${usuario.name}</td>
                        <td>${usuario.email}</td>
                        <td><button onclick="borrarUsuarioAxios(${usuario.id})">Borrar usuario</button></td>
                        `;

            document.querySelector("#userTableAxios tbody").appendChild(fila);
      })

}


function borrarUsuarioAxios(id){
      const filas = document.querySelectorAll('#userTableAxios tbody tr');
      filas.forEach((fila)=>{
            let celdaId = fila.querySelector('td').textContent;
            if(celdaId == id){
                  fila.remove();
            }
      })
}

document.getElementById("userForm").addEventListener('submit',aniadirUsuarioAxios);

