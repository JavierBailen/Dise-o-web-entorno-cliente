


    $('#addTask').on('click',function(){

        let textoTarea = $('#newTask').val();
    

        if(textoTarea!=''){

            

            let nuevaTarea = $('<li>' +textoTarea).hide();
            let checkbox = $("<input type='checkbox' name='tareaCompletada'>");
            $('#taskList').append(nuevaTarea);
            nuevaTarea.fadeIn(2000);

            let botonBorrar = $('<button>').text('borrar');   
            nuevaTarea.append(textoTarea).append(checkbox).append(botonBorrar);        

            $('#newTask').val('');


            botonBorrar.on('click',function(){
                nuevaTarea.fadeOut(2000);
            })

         }

    })

    
