
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

//Consolas de Video Juegos

//PSX ----->

//PS5 MODELO CFI-1100B
const consola1a = new ConsolaVideoJuego("Play Station 5", "Sony","CFI-1100B", "Blanca",300000)
const consola1b = new ConsolaVideoJuego("Play Station 5","Sony","CFI-1100B", "Negra",300000)
//PS5 MODELO CFI-11015B
const consola1c = new ConsolaVideoJuego("Play Station 5", "Sony","CFI-11015B", "Blanca",350000)
const consola1d = new ConsolaVideoJuego("Play Station 5", "Sony","CFI-11015B", "Negra",350000)
//PS5 MODELO FFVII ESPECIAL EDITION
const consola1e = new ConsolaVideoJuego("Play Station 4", "Sony","CFI-1100B", "FFVII ESPECIAL EDITION",500000)


//PS4 MODELO Slim 
const consola2a = new ConsolaVideoJuego("Play Station 4", "Sony","Slim", "Blanca",200000)
//PS4 MODELO PRO
const consola2b = new ConsolaVideoJuego("Play Station 4", "Sony","PRO", "Negra",250000)


//XBOX----->

//XBOX MODELO S
const consola3a = new ConsolaVideoJuego("XBOX Series", "Microsoft","S", "Negra",350000)
const consola3b = new ConsolaVideoJuego("XBOX Series", "Microsoft","S", "Blanca",350000)
//XBOX MODELO X
const consola3c = new ConsolaVideoJuego("XBOX Series", "Microsoft","X", "Negra",450000)
const consola3D = new ConsolaVideoJuego("XBOX Series", "Microsoft","X", "Blanca",450000)


//XBOX ONE
const consola4a = new ConsolaVideoJuego("XBOX ONE","Microsoft", "Classic", "Verde",200000)
const consola4b = new ConsolaVideoJuego("XBOX ONE","Microsoft", "Classic", "Azul",200000)
//XBOX ONE MODELO S
const consola4c = new ConsolaVideoJuego("XBOX ONE","Microsoft", "S", "Roja",200000)


//NINTENDO----->

//Nintendo Oled
const consola5a = new ConsolaVideoJuego("Nintendo Switch","Nintendo","Oled", "Blanca", 450000)
const consola5b = new ConsolaVideoJuego("Nintendo Switch","Nintendo","Oled", "Negra", 450000)
//Nintendo Switch classic
const consola5c = new ConsolaVideoJuego("Nintendo Switch","Nintendo","Classic", "Blanca", 350000)
const consola5d = new ConsolaVideoJuego("Nintendo Switch","Nintendo","Classic", "Azul", 350000)

//Nintendo DS XL
const consola5e = new ConsolaVideoJuego("Nintendo DS","Nintendo","XL", "Silver", 150000)
//Nintendo DS
const consola5f = new ConsolaVideoJuego("Nintendo DS","Nintendo","Classic", "Gold", 15000)





/*
const mostrarPorConsola = (cuadro) =>{
    console.log("El cuadro para " + cuadro.categoria + ", "+ cuadro.genero + ", tamaño " + cuadro.medida + 
                ", de color "+ cuadro.color + ", tiene un precio de $" + cuadro.precio)

}
mostrarPorConsola(cuadro1)
*/