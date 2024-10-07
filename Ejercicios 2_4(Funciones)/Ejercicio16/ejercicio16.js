function calculoMayor(num1, num2){
    if(num1>num2){
        alert(num1+" Es mayor que "+num2);

    }else{
        if(num2>num1){
            alert(num2+" Es mayor que "+num1);
        }else{
            if(num1===num2){
                alert("Los numeros son iguales");
            }
        }
    }
}

calculoMayor(22,23);

