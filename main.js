import Cantidad from "./cantidad.js";
import Ingrediente from "./ingrediente.js";
import Receta from "./receta.js";

class Main{
    constructor(){
        this.cantidad = new Cantidad(10, "gramos")
        this.cantidad2 = new Cantidad(1, "litro")
        this.ingrediente = new Ingrediente(this.cantidad, "azucar", 10)
        this.ingrediente2 = new Ingrediente(this.cantidad2, "agua", 20)
        this.receta = new Receta("Agua con azucar", "Leonardo Isordia")
    }

    testCantidad(){
        console.log(this.cantidad.getDescripcion())
    }
    testIngrediente(){
        console.log(this.ingrediente.getDescripcion())
    }

    testReceta(){
        this.receta.agregarIngrediente(this.ingrediente)
        this.receta.agregarIngrediente(this.ingrediente2)
        console.log(this.receta.getNumeroIngredientes())
        console.log(this.receta.getCosto())
        this.receta.imprimirEnConsola()
    }
}

let tester = new Main()
tester.testCantidad()
tester.testIngrediente()
tester.testReceta()