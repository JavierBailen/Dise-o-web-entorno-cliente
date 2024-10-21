class Empleado {
    #nombre;
    #salario;

    constructor(nombre, salario) {
        this.#nombre = nombre;
        this.#salario = salario;
    }

    trabajar() {
        console.log(`${this.#nombre} se va a trabajar`);
    }

    get nombre() {
        return this.#nombre;
    }

    get salario() {
        return this.#salario;
    }
}

class Gerente extends Empleado {
    constructor(nombre, salario) {
        super(nombre, salario);
    }

    dirigir() {
        console.log(`${this.nombre} está dirigiendo`);
    }
}

// Crear instancias de ambas clases
let empleado = new Empleado("Juan", 3000);
let gerente = new Gerente("María", 5000);

// Mostrar cómo interactúan entre ellas

empleado.trabajar(); // Output: "Juan se va a trabajar"
gerente.trabajar();  // Output: "María se va a trabajar"
gerente.dirigir();   // Output: "María está dirigiendo"
