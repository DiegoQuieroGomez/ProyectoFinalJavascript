class Cuadro{
    constructor(categoria, genero, medida, color, precio){
    this.categoria =categoria
    this.genero = genero
    this.medida = medida
    this.color = color
    this.precio = precio
    }
}

const cuadro1 = new Cuadro("Recien Nacido","Niño","Pequeño", "Celeste", 35000)
const cuadro2 = new Cuadro("Recien Nacido","Niño","Mediano", "Celeste", 45000)
const cuadro3 = new Cuadro("Recien Nacido","Niño","Grande", "Celeste", 55000)
const cuadro4 = new Cuadro("Recien Nacido","Niña","Pequeño", "Rosa", 35000)
const cuadro5 = new Cuadro("Recien Nacido","Niña","Mediano", "Rosa", 45000)
const cuadro6 = new Cuadro("Recien Nacido","Niña","Grande", "Rosa", 55000)

/*
const mostrarPorConsola = (cuadro) =>{
    console.log("El cuadro para " + cuadro.categoria + ", "+ cuadro.genero + ", tamaño " + cuadro.medida + 
                ", de color "+ cuadro.color + ", tiene un precio de $" + cuadro.precio)

}
mostrarPorConsola(cuadro1)
*/