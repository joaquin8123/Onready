//CLASES
class vehiculo {
constructor(marca, precio,modelo,tipo){
    this.marca = marca
    this.precio = precio
    this.modelo = modelo
    this.tipo = tipo
}
}

class moto extends vehiculo {
    constructor(cilindrada,marca,precio,modelo,tipo){
        super(marca, precio,modelo,tipo)
        this.cilindrada = cilindrada
    }
}
class auto extends vehiculo {
    constructor(puertas,marca,precio,modelo,tipo){
        super(marca, precio,modelo,tipo)
        this.puertas = puertas
    }
}
//VARIABLES
var moto1 = new moto('125cc','Yamaha',100000,'Ybr','M')
var moto2 = new moto('150cc','Motomel',70000,'Skua','M')
var auto1 = new auto('3','Volkswagen',350000,'Gol','A')
var auto2 = new auto('5','Chevrolet',705000,'Onix','A')
var vehiculos = []
var max
var min
vehiculos.push(moto1,moto2,auto1,auto2);


//FUNCIONES
function mayorPrecio(){
    let aux = 0
    vehiculos.forEach(vehiculo => {
        if(vehiculo.precio > aux){
            aux = vehiculo.precio
            max = vehiculo
        }
    });
    console.log(`El vehiculo mas caro: ${max.marca} ${max.modelo} `)
}
function menorPrecio(){
    let aux = 0
    aux = vehiculos[0].precio
    vehiculos.forEach(vehiculo => {
        if(vehiculo.precio < aux){
            aux = vehiculo.precio
            min = vehiculo
        }
    });
    console.log(`El vehiculo mas barato: ${min.marca} ${min.modelo} `)
}
function listaVehiculos(){
    vehiculos.forEach(vehiculo => {
        if(vehiculo.tipo == 'M'){
            console.log(`Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Cilindrada: ${vehiculo.cilindrada} // Precio: $${vehiculo.precio}`)
        }
        if(vehiculo.tipo == 'A'){
            console.log(`Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Puertas: ${vehiculo.puertas} // Precio: $${vehiculo.precio}`)
        }
    });
    
}
function contieneLetra(){
    vehiculos.forEach(vehiculo => {
        let modelo = vehiculo.modelo
        if(modelo.indexOf("x") >= 0){
            console.log(`Vehículo que contiene en el modelo la letra ‘x’: ${vehiculo.marca} ${vehiculo.modelo} $${vehiculo.precio}`)
        }
    });
    
}
function ordenaLista(){
    vehiculos.sort(((a, b) => b.precio - a.precio))
    vehiculos.forEach(vehiculo => {
        console.log(` ${vehiculo.marca} ${vehiculo.modelo}`)
    });
    }

listaVehiculos()
console.log(`==============================`)
mayorPrecio()
menorPrecio()
contieneLetra()
console.log(`==============================`)
ordenaLista()