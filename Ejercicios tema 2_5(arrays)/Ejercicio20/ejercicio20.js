let todoList= ["comprar pan","pasear al perro","entrenar","hacer la comida","estudiar"];

let pregunta;

let indice;

pregunta= prompt("Dime una tarea y te digo su índice");
indice = todoList.indexOf(pregunta);
alert("El índice de la tarea especificada es: " + indice);

//Se pregunta al usuario por un numero, el cual sera el indice del array que queremos eliminar mas adelante
//si el indice es diferente a -1 (es decir, si el indice introducido es valido) la tarea a eliminar sera igual al array(todoList) iterado con nuestra variable indice

if(indice!==-1){

    let tareaEliminada = todoList[indice];
    //Utilizo el metodo splice para eliminar el elemento en el indice correspondiente del array, el 1 especifica el numero de elementos a borrar
    todoList.splice(indice,1);
    alert("Se ha borrado la tarea: "+tareaEliminada);
}else{
    alert("La tarea no se encuentra en la lista");
}
//Mostramos para comprobar

for(let tarea of todoList){
    alert(tarea);
}








