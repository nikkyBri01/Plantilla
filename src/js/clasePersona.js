export class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre,
        this.edad = edad,
        this.genero = genero
    }

    datos(){
        return `Hola soy ${this.nombre} tengo ${this.edad} y soy ${this.genero}`
    }
}

