import Cantidad from "./cantidad.js";

class Main{
    constructor(){
        this.cantidad = new Cantidad(50, "gramos")
    }

    testCantidad(){
        console.log(this.cantidad.getDescripcion())
    }
}

let tester = new Main()
tester.testCantidad()