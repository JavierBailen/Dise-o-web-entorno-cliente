

$('#registroForm').on('submit',function(event){

    const nombre = $('#nombre').val();
    const email = $('#email').val();
    const password = $('#password').val();
    const emailPrueba = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    event.preventDefault();

    if(nombre==''){
        $('#nombreError').show();
    }else{
        $('#nombreError').hide();
    }

    if(password.length<6){
       $('#passwordError').show();
    }else{
        $('#passwordError').hide();
    }


    if(emailPrueba.test(email)===true){
        $('#emailError').hide();
    }else{
        $('#emailError').show();
    }

})