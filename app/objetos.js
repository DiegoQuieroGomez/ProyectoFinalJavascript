
//Clases
class ConsolaVideoJuego{
        constructor(nombre, fabricante, modelo, color, precio){
        this.nombre = nombre
        this.fabricante = fabricante
        this.modelo = modelo
        this.color = color
        this.precio = precio
    }
}

class VideoJuego{
       constructor(categoria, titulo,ConsolaVideoJuego,precio){
        this.categoria = categoria
        this.titulo = titulo
        this.ConsolaVideoJuego = ConsolaVideoJuego
        this.precio = precio
       }
}

//Objetos

//<----------------------------------Consolas de Video Juegos-------------------------------------------->

//PSX ----->

//PS5 MODELO CFI-1100B
const consola1a = new ConsolaVideoJuego("Play Station 5", "Sony","CFI-1100B", "Blanca",300000)
const consola1b = new ConsolaVideoJuego("Play Station 5","Sony","CFI-1100B", "Negra",300000)
//PS5 MODELO CFI-11015B
const consola1c = new ConsolaVideoJuego("Play Station 5", "Sony","CFI-11015B", "Blanca",350000)
const consola1d = new ConsolaVideoJuego("Play Station 5", "Sony","CFI-11015B", "Negra",350000)
//PS5 MODELO FFVII ESPECIAL EDITION
const consola1e = new ConsolaVideoJuego("Play Station 5", "Sony","CFI-1100B", "FFVII ESPECIAL EDITION",500000)


//PS4 MODELO Slim 
const consola1f = new ConsolaVideoJuego("Play Station 4", "Sony","Slim", "Blanca",200000)
//PS4 MODELO PRO
const consola1g = new ConsolaVideoJuego("Play Station 4", "Sony","PRO", "Negra",250000)


//XBOX----->

//XBOX MODELO S
const consola2a = new ConsolaVideoJuego("XBOX Series", "Microsoft","S", "Negra",350000)
const consola2b = new ConsolaVideoJuego("XBOX Series", "Microsoft","S", "Blanca",350000)
//XBOX MODELO X
const consola2c = new ConsolaVideoJuego("XBOX Series", "Microsoft","X", "Negra",450000)
const consola2d = new ConsolaVideoJuego("XBOX Series", "Microsoft","X", "Blanca",450000)


//XBOX ONE
const consola2e = new ConsolaVideoJuego("XBOX ONE","Microsoft", "Classic", "Verde",200000)
const consola2f = new ConsolaVideoJuego("XBOX ONE","Microsoft", "Classic", "Azul",200000)
//XBOX ONE MODELO S
const consola2g = new ConsolaVideoJuego("XBOX ONE","Microsoft", "S", "Roja",200000)


//NINTENDO----->

//Nintendo Oled
const consola3a = new ConsolaVideoJuego("Nintendo Switch","Nintendo","Oled", "Blanca", 450000)
const consola3b = new ConsolaVideoJuego("Nintendo Switch","Nintendo","Oled", "Negra", 450000)
//Nintendo Switch classic
const consola3c = new ConsolaVideoJuego("Nintendo Switch","Nintendo","Classic", "Blanca", 350000)
const consola3d = new ConsolaVideoJuego("Nintendo Switch","Nintendo","Classic", "Azul", 350000)

//Nintendo DS XL
const consola3e = new ConsolaVideoJuego("Nintendo DS","Nintendo","XL", "Silver", 150000)
//Nintendo DS
const consola3f = new ConsolaVideoJuego("Nintendo DS","Nintendo","Classic", "Gold", 150000)

//<-----------------------------------------------Video Juegos--------------------------------------------------->



//<------------------------------------------------Arrays--------------------------------------------------------->


const consolas = [consola1a,consola1b,consola1c,consola1d,consola1e,consola1f,consola1g,consola2a,
    consola2b,consola2c,consola2d,consola2e,consola2f,consola2g,consola3a,consola3b,consola3c,consola3d,
    consola3e,consola3f]


//<--------------------------------------------------------------------------------------------------------->

consolas.forEach((consola)=>{
    console.log(consola.fabricante)

})

const seleccion = prompt("Elige una marca").toLocaleLowerCase()

switch(seleccion){
    case "nintendo":
        consolas.forEach((consola) =>{
            console.log(consola.nombre, consola.modelo, consola.color)
            
        }) 

}
    consolas.forEach((consola) =>{
        console.log(consola.nombre, consola.modelo, consola.color)
        
    })





/*
const mostrarPorConsola = (cuadro) =>{
    console.log("El cuadro para " + cuadro.categoria + ", "+ cuadro.genero + ", tamaño " + cuadro.medida + 
                ", de color "+ cuadro.color + ", tiene un precio de $" + cuadro.precio)

}
mostrarPorConsola(cuadro1)
*/