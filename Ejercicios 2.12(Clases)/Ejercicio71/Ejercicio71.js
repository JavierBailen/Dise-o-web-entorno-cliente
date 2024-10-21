class Banco{
    #balance;

    constructor(balance){
        if(balance<0){
            console.log("El balance inicial no puede ser negativo");
            this.#balance = 0;
        }else{
            this.#balance = balance;
        }
        
    }
     depositar(cantidadDinero){
        if(cantidadDinero<0){
            console.log("La cantidad de dinero a ingresar no puede ser negativa");
            return;
        }
        this.#balance += cantidadDinero;
        console.log(`Has depositado ${cantidadDinero}€. Balance actual : ${this.#balance} `);
        
    }

    retirar(cantidadDineroRetirar){
        this.#balance -= cantidadDineroRetirar;
    }
    
}

let banco = new Banco();

banco.depositar(1500);