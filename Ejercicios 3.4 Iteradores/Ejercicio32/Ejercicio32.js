//sistema de seguimiento de paginas visitadas
class SeguimientoPaginas {
    constructor() {
      this.paginasVisitadas = new WeakSet();
    }
  
    //mmetodo para registrar una pagina visitada
    registrarPagina(pagina) {
      this.paginasVisitadas.add(pagina); // Aaade el objeto pagina al WeakSet
    }
  
    //metodo para verificar si una pagina ya ha sido visitada
    haSidoVisitada(pagina) {
      return this.paginasVisitadas.has(pagina); //verifica si la pagina esta en el WeakSet
    }
  }
  
  //creamos algunos objetos que representaran pginas
  let pagina1 = { url: "https://pagina1.com", nombre: "Página 1" };
  let pagina2 = { url: "https://pagina2.com", nombre: "Página 2" };
  let pagina3 = { url: "https://pagina3.com", nombre: "Página 3" };
  
  //instanciamos el sistema de seguimiento de paginas
  let seguimiento = new SeguimientoPaginas();
  
  //Registramos algunas paginas visitadas
  seguimiento.registrarPagina(pagina1);
  seguimiento.registrarPagina(pagina2);
  
  //comprobamos si una pagina ha sido visitada
  console.log(seguimiento.haSidoVisitada(pagina1)); 
  console.log(seguimiento.haSidoVisitada(pagina3));
  
  //eliminar una referencia a la página1 para ver que WeakSet permite el GC
  pagina1 = null; //dejamos de referenciar pagina1
  
  // Como WeakSet mantiene referencias debiles, si no hay ms referencias a pagina1,
  // esta podría ser eliminada por el garbage collector ,para verificarlo, podemos ver
  // que la pagina1 ya no esta registrada.
  setTimeout(() => {
    console.log(seguimiento.haSidoVisitada(pagina1)); // false, debería ser recogida por el recolector de basurra
  }, 1000);
  