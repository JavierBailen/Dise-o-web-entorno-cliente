let num1 = 5;
let num2 = 6;
let sum;



function operacionAritmetica(num1,num2,operador){
    try{
        let resultado;
        switch(operador){
            case "+":
                resultado = num1+num2;
                console.log(resultado);
                break;
            case "-":
                resultado= num1-num2;
                console.log(resultado);
                break;
            case "*":
                resultado = num1*num2;
                console.log(resultado);
                break;
            case "/":
                if(num2===0){
                    throw new Error("No se puede dividir entre 0");
                }
                resultado= num1/num2;
                console.log(resultado);
                break;
        }
    }catch(error){
        console.error("Ha ocurrido un error");
    }finally{
        console.log("La operacion ha sido resuelta");
    }
}

operacionAritmetica(5,0,"/");


