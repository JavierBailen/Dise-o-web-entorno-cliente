let lista_tareas = [];
let eleccion;
let nueva_tarea;
let indice_tarea_modificar;
let tarea_modificar;
let indice_tarea_borrar;
let tarea_borrar;

do {
    eleccion = prompt("Dime opcion: \n" +
        "1. Introducir tarea\n" +
        "2. Modificar tarea \n" +
        "3. Eliminar tarea\n" +
        "4. Ver tareas \n" +
        "5. Salir");

    switch (eleccion) {
        case "1": 
            nueva_tarea= prompt("Dime una nueva tarea");
            lista_tareas.push(nueva_tarea);
            alert("Tarea introducida!");

            break;


            case "2":
                
                indice_tarea_modificar = prompt("Dime el índice de la tarea a modificar (De 1 a " + lista_tareas.length + "):");
                tarea_modificar = lista_tareas[indice_tarea_modificar - 1];
    
                if (tarea_modificar) {
                    nueva_tarea = prompt("Modificar la tarea: " + tarea_modificar);
                    if (nueva_tarea) {
                        lista_tareas[indice_tarea_modificar - 1] = nueva_tarea;
                        alert("Tarea modificada!");
                    } else {
                        alert("No se puede modificar a una tarea vacía.");
                    }
                } else {
                    alert("Número de tarea inválido.");
                }
                break;

            case "3":
                indice_tarea_borrar = prompt("Dime el indice de la tarea a borrar (De 1 a"+lista_tareas.length+")");
                tarea_borrar = lista_tareas[indice_tarea_borrar-1];
                if(tarea_borrar){
                    lista_tareas.splice(indice_tarea_borrar-1,1);// el 1 despues de la coma indica el numero de elementos que se van a borrar.
                    alert("Tarea borrada");
                }
                break;




        case "4":
            alert("Lista de tareas \n");
            if(lista_tareas.length===0){
                alert("No hay tareas que mostrar");
            }else{
                alert("Lista de tareas: \n" +lista_tareas.join("-"+"\n"));
            }

            break;
    }

} while (eleccion !== "5");
