class Producto{
    id;
    nombre;
    precio;
    stock;

    constructor(id,nombre,precio,stock){
        this.id = id;
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }

    mostrarInfo(){
        let informacion = "";
        informacion = "Id: "+this.id+"\n"+
        "Nombre: "+this.nombre+"\n"+
        "Precio: "+this.precio+"€/ud"+"\n"+
        "Stock: "+this.stock+" Unidades";

        return informacion;
    }
}


class Tienda{
    productos;//map
    clientes;//set
    ventas;//array

    constructor(){
        this.productos = new Map();
        this.clientes = new Set();
        this.ventas = [];
    }

    agregarProducto(producto){
        this.productos.set(producto.id,producto);

    }



    actualizarStock(idProducto,cantidad){
        if(this.productos.has(idProducto)){
            let producto = this.productos.get(idProducto);

            producto.stock+=cantidad;

            this.productos.set(idProducto,producto);
            console.log("Stock actualizado");
        }else{
            console.log("El producto con el id " +`${idProducto}`+" no existe" );
        }
    }



    mostrarInventario(){
        this.productos.forEach((producto,id)=>{
            console.log(producto.mostrarInfo());
        });
    }


    registrarCliente(nombreCliente){
        let clienteRegistrado = false;
        if(this.clientes.has(nombreCliente)){
            clienteRegistrado = true;
            console.log("Este cliente ya está añadido");
        }else{
            clienteRegistrado=true;
            this.clientes.add(nombreCliente);
            console.log("Cliente añadido!");
        }
        return clienteRegistrado;
        
    }

    mostrarClientes(){
        this.clientes.forEach((cliente)=>{
            console.log(cliente);
        });
    }

    realizarVenta(nombreCliente, idProducto, cantidad){
        
        if(!this.clientes.has(nombreCliente)){
            this.registrarCliente(nombreCliente);
            
        }
        if(this.productos.has(idProducto)){
            let producto = this.productos.get(idProducto);

            if(producto.stock <=0){
                console.log("No hay stock de este producto");
            }else{
                producto.stock -=cantidad;
                this.productos.set(idProducto,producto);

                let venta = {
                    cliente:nombreCliente,
                    producto: producto.nombre,
                    cantidad: cantidad,
                    total: producto.precio * cantidad
                };
                this.ventas.push(venta);
                
                console.log(`Venta realizada: Producto: ${producto.nombre} , Cantidad: ${producto.cantidad}, Precio/ud: ${producto.precio}€ ,  Total: ${cantidad*producto.precio}€,  Cliente: ${nombreCliente}`)
            }
        }
        
    }

    mostrarVentas(){
        this.ventas.forEach((venta)=>{
            console.log(venta);
        });
    }


    productosSinStock(){

        //let proSinStock = Array.from(this.productos.values()).filter(producto => producto.stock <=0);

        let productosSinStock = [];
        this.productos.forEach((valor,clave)=>{
            let producto = this.productos.get(clave,valor);
            if(producto.stock<=0){
                productosSinStock.push(producto);
            }
        });
        console.log(productosSinStock);
        return productosSinStock;
    }

    ventasPorCliente(nombreCliente){
        let venta = this.ventas.filter(venta => venta.nombre === nombreCliente);
        
        venta.forEach(venta =>{
            console.log(`Venta hecha a ${nombreCliente}
                Producto: ${venta.producto} , Cantidad: ${venta.cantidad}, Total: ${venta.total}€`);
        });

        return venta;
    }

    totalIngresos(){
        let total=0;

        this.ventas.forEach((venta=>{
            total += venta.total;
        }));
        return total;
    }
}

let tienda = new Tienda();
let producto = new Producto(1,"LAMPARA",15,1);
let producto2 = new Producto(2,"ESCOBILLA DE WATER",10,2);
let producto3 = new Producto(3,"Botella de Whisky",30,5);
let producto4 = new Producto(4,"Escritorio de Oficina",85,10);
let producto5 = new Producto(5,"Teclado Wireless",33,7);


tienda.agregarProducto(producto);
tienda.agregarProducto(producto2);
tienda.agregarProducto(producto3);
tienda.agregarProducto(producto4);
tienda.agregarProducto(producto5);

tienda.registrarCliente("Javier Bailén");
tienda.registrarCliente("Benjamín Arjonilla");
tienda.realizarVenta("Ataulfo Gutierrez",4,2);








tienda.realizarVenta("Javier Bailén",1,1);
tienda.realizarVenta("Javier Bailén",3,1);
tienda.realizarVenta("Ataulfo Gutierrez",5,2);
tienda.realizarVenta("Benjamín Arjonilla",2,1);

tienda.mostrarInventario();
tienda.mostrarVentas();
console.log(tienda.totalIngresos()+"€");





