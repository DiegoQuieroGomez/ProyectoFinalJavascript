
//Clases

class Fabricante{
    constructor(nombre, marca){
        this.nombre = nombre
        this.marca = marca

    }
}

class Consola{
    constructor(Fabricante,modelo, marca, color, precio, imagen){
        this.Fabricante = Fabricante
        this.modelo = modelo
        this.marca = marca
        this.color = color
        this.precio = precio
        this.imagen = imagen

    }
        
}

class VideoJuego{
       constructor(titulo, categoria, Consola,precio, imagen){
        this.titulo = titulo
        this.categoria = categoria
        this.Consola = Consola
        this.precio = precio
        this.imagem = imagen
       }
}

//Objetos

//<----------------------------------Consolas de Video Juegos-------------------------------------------->

//Fabricante ----->

const playStation = new Fabricante("Sony","PlayStation")
const xbox = new Fabricante("Microsoft","Xbox")
const nintendo = new Fabricante("Nintendo","Nintendo")


//Consola ------>
const consola1a = new Consola = (playStation,"CFI-1100B","PS5","Blanco",300000)
const consola1b =

//PSX ----->
/*
//PS5 MODELO CFI-1100B
const consola1a = new ConsolaVideoJuego("Play Station 5", "Sony","CFI-1100B", "Blanca",300000,"")
const consola1b = new ConsolaVideoJuego("Play Station 5","Sony","CFI-1100B", "Negra",300000,"")
//PS5 MODELO CFI-11015B
const consola1c = new ConsolaVideoJuego("Play Station 5", "Sony","CFI-11015B", "Blanca",350000,"")
const consola1d = new ConsolaVideoJuego("Play Station 5", "Sony","CFI-11015B", "Negra",350000,"")
//PS5 MODELO FFVII ESPECIAL EDITION
const consola1e = new ConsolaVideoJuego("Play Station 5", "Sony","CFI-1100B", "FFVII ESPECIAL EDITION",500000,"")


//PS4 MODELO Slim 
const consola1f = new ConsolaVideoJuego("Play Station 4", "Sony","Slim", "Blanca",200000,"")
//PS4 MODELO PRO
const consola1g = new ConsolaVideoJuego("Play Station 4", "Sony","PRO", "Negra",250000,"")


//XBOX----->

//XBOX MODELO S
const consola2a = new ConsolaVideoJuego("XBOX Series", "Microsoft","S", "Negra",350000,"")
const consola2b = new ConsolaVideoJuego("XBOX Series", "Microsoft","S", "Blanca",350000,"")
//XBOX MODELO X
const consola2c = new ConsolaVideoJuego("XBOX Series", "Microsoft","X", "Negra",450000,"")
const consola2d = new ConsolaVideoJuego("XBOX Series", "Microsoft","X", "Blanca",450000,"")


//XBOX ONE
const consola2e = new ConsolaVideoJuego("XBOX ONE","Microsoft", "Classic", "Verde",200000,"")
const consola2f = new ConsolaVideoJuego("XBOX ONE","Microsoft", "Classic", "Azul",200000,"")
//XBOX ONE MODELO S
const consola2g = new ConsolaVideoJuego("XBOX ONE","Microsoft", "S", "Roja",200000,"")


//NINTENDO----->

//Nintendo Oled
const consola3a = new ConsolaVideoJuego("Nintendo Switch","Nintendo","Oled", "Blanca", 450000,"")
const consola3b = new ConsolaVideoJuego("Nintendo Switch","Nintendo","Oled", "Negra", 450000,"")
//Nintendo Switch classic
const consola3c = new ConsolaVideoJuego("Nintendo Switch","Nintendo","Classic", "Blanca", 350000,"")
const consola3d = new ConsolaVideoJuego("Nintendo Switch","Nintendo","Classic", "Azul", 350000,"")

//Nintendo DS XL
const consola3e = new ConsolaVideoJuego("Nintendo DS","Nintendo","XL", "Silver", 150000,"")
//Nintendo DS
const consola3f = new ConsolaVideoJuego("Nintendo DS","Nintendo","Classic", "Gold", 150000,"")
*/
//<-----------------------------------------------Video Juegos--------------------------------------------------->

//PELEA ----->

const juego1 = new VideoJuego = ("accion","Mortal Combat X",consola1a, 30000,"")
const juego2 = new VideoJuego = ("accion","Mortal Combat XI",consola1a, 35000,"")
const juego3 = new VideoJuego = ("accion","",consola1a, 30000,"")

//<------------------------------------------------Arrays--------------------------------------------------------->


//Array de consolas
const consolas = [consola1a,consola1b,consola1c,consola1d,consola1e,consola1f,consola1g,consola2a,
    consola2b,consola2c,consola2d,consola2e,consola2f,consola2g,consola3a,consola3b,consola3c,consola3d,
    consola3e,consola3f]


//<--------------------------------------------------------------------------------------------------------->

function mostrarConsolas(){

    consolas.forEach((consola)=>{
        console.log(consola.marca)

    })

}

const carro = [consola1a, consola1b]

mostrarConsolas()

function agregarAlCarroConDescuento(array, funcion){
    for (const producto of array) {
        funcion(producto)
        console.log(array)
    }

}

agregarAlCarroConDescuento(carro, () =>{ carro.push( 0.80)})

function descuento (producto) {
        carro.push(producto * 0.80)
    
}


function comprarConsola(){
    
    const seleccion = prompt("Que consola buscas? Nintendo, PlayStation XBOX").toLocaleLowerCase()
    
    switch(seleccion){
        case "nintendo":
            
            consolas.forEach((consola) =>{
                console.log(consola.nombre, consola.modelo, consola.color, consola.precio)
                
            }) 
        
        case "playstation":
            consolas.forEach((consola) =>{
                console.log(consola.nombre, consola.modelo, consola.color, consola.precio)
                
            }) 

        case "xbox":
            consolas.forEach((consola) =>{
                console.log(consola.nombre, consola.modelo, consola.color, consola.precio)
                
            }) 

    }   
        



}
    




/*
const mostrarPorConsola = (cuadro) =>{
    console.log("El cuadro para " + cuadro.categoria + ", "+ cuadro.genero + ", tamaño " + cuadro.medida + 
                ", de color "+ cuadro.color + ", tiene un precio de $" + cuadro.precio)

}
mostrarPorConsola(cuadro1)
*/