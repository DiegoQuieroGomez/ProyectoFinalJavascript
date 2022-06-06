
//Clases

class Fabricante{
    constructor(nombre, marca,producto){
        this.nombre = nombre
        this.marca = marca
        this.producto = producto
        

    }
}

class Consola{
    constructor(Fabricante,modelo, color, precio, imagen){
        this.Fabricante = Fabricante
        this.modelo = modelo
        this.color = color
        this.precio = precio
        this.imagen = imagen

    }
        
}

class VideoJuego{
       constructor(titulo, categoria, Fabricante,precio, imagen){
        this.titulo = titulo
        this.categoria = categoria
        this.Fabricante = Fabricante
        this.precio = precio
        this.imagem = imagen
       }
}

//Objetos

//<----------------------------------Consolas de Video Juegos-------------------------------------------->

//Fabricante ----->

const playStation5 = new Fabricante("Sony","playStation", "PS5")
const playStation4 = new Fabricante("Sony","playStation","PS4")
const xboxSeries = new Fabricante("Microsoft","xbox", "XBOX Series")
const xboxOne = new Fabricante("Microsoft","xbox","Xbox One")
const nintendoSwitch = new Fabricante("Nintendo Company","nintendo","Switch")
const nintendoDS = new Fabricante("Nintendo Company","nintendo","DS")


//Consola ------>
//PS5
const consola1a = new Consola(playStation5,"cfi-1100b","blanco",300000,"https://nissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/p/l/playstation_5_perfil_-_1_1.jpg")
const consola1b = new Consola(playStation5,"cfi-1100b","negro",320000,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDmftCHl-SAV9ZS1TlOeXJIOTvrk0vGBkICk-OMrMcydrjTVqPCb1-iq7X9wLMPz2H5Nk&usqp=CAU")
const consola1c = new Consola(playStation5,"cfi-11015b","blanco",300000,"https://www.google.com/imgres?imgurl=https%3A%2F%2Fnissei.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F82488c8dc45c4819d3542b60fadf1fa9%2Fp%2Fl%2Fplaystation_5_perfil_-_1.jpg&imgrefurl=https%3A%2F%2Fnissei.com%2Far%2Fsony-playstation-5-825-gb-cfi-1015a&tbnid=5Kp2nZXdOL0-VM&vet=12ahUKEwis45OU2Zf4AhWmFbkGHRLxA98QMygAegUIARCNAg..i&docid=up_dpVT-E34huM&w=270&h=270&q=playstation%205%20cfi-101%20blanca%20imagen&ved=2ahUKEwis45OU2Zf4AhWmFbkGHRLxA98QMygAegUIARCNAg")
const consola1d = new Consola(playStation5,"cfi-11015b","negro",300000,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDmftCHl-SAV9ZS1TlOeXJIOTvrk0vGBkICk-OMrMcydrjTVqPCb1-iq7X9wLMPz2H5Nk&usqp=CAU")

//PS4
const consola1f = new Consola(playStation4,"slim", "blanco",200000,"")
const consola1g = new Consola(playStation4,"pro", "negro",200000,"")


//XBOX 
const consola2a = new Consola(xboxSeries,"s", "negro",350000,"")
const consola2b = new Consola(xboxSeries,"s", "blanco",350000,"")

//XBOX MODELO X
const consola2c = new Consola(xboxSeries,"x", "negro",450000,"")
const consola2d = new Consola(xboxSeries,"x", "blanco",450000,"")


//XBOX ONE
const consola2e = new Consola(xboxOne,"classic", "verde",250000,"")
const consola2f = new Consola(xboxOne,"classic",  "rojo",250000,"")


//Nintendo Oled
const consola3a = new Consola(nintendoSwitch,"oled", "negro",450000,"")
const consola3b = new Consola(nintendoSwitch,"oled",  "blanco",450000,"")
//Nintendo Switch classic
const consola3c = new Consola(nintendoSwitch,"classic",  "negro",380000,"")
const consola3d = new Consola(nintendoSwitch,"classic",  "blanco",380000,"")

//Nintendo DS XL
const consola3e = new Consola(nintendoDS,"xl", "azul",250000,"")
//Nintendo DS
const consola3f = new Consola(nintendoDS,"ds", "gold",180000,"")

//<-----------------------------------------------Video Juegos--------------------------------------------------->

//PELEA ----->

const juego1 = new VideoJuego("accion","Mortal Combat X",playStation5, 30000,"")
const juego2 = new VideoJuego("accion","Mortal Combat XI",playStation4, 35000,"")
const juego3 = new VideoJuego("accion","Crisis 3",playStation4, 30000,"")
const juego4 = new VideoJuego("Racing","Mario Kart",nintendoDS,40000,"")

//<------------------------------------------------Arrays--------------------------------------------------------->


//Arrays
const consolas = [consola1a,consola1b,consola1c,consola1d,consola1f,consola1g,consola2a,
    consola2b,consola2c,consola2d,consola2e,consola2f,consola3a,consola3b,consola3c,consola3d,
    consola3e,consola3f]

const consolasPrueba = [consola1a,consola1b,consola1c,consola1d]

const carro = []

const historialDeBusqueda = []


//<--------------------------------------------------------------------------------------------------------->

const contenedorBuscador = document.querySelector("#buscador")


//Creador de Buscadores
function crearBuscador(contenedor){

    const buscador = document.createElement("div")
    buscador.className =" buscador"
    buscador.innerHTML= `
            <input type="text" id="busca">
    `
    contenedor.append(buscador)
}

crearBuscador(contenedorBuscador)


const cardContainer = document.querySelector("#cardContainer")

consolasPrueba.forEach((producto) => {
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
        <h3 class="cardTitle"> Consola ${producto.Fabricante.marca}</h3>
        <img src="${producto.imagen}" class="cardImg">
        <p class="cardDesc"> Modelo ${producto.modelo} - Color ${producto.color}
        <span class="cardPrice"> $${producto.precio}</span>
        <buttol data-id="${producto.Fabricante.marca}" class="buttonCTA"> Agregar al carrito </button>
        `
    cardContainer.append(card)

})

const agregarProducto = (e) => {
    const productoElegido = e.target.getAttribute("data-id") 
    const producto = consolasPrueba.find((producto) => producto.Fabricante.marca == productoElegido)
    carro.push(producto)
    console.log(carro)
}

const botonesCompra = document.querySelectorAll(".buttonCTA")
botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener("click",agregarProducto)

})


function mostrarConsolas(){
    consolas.forEach((consola)=>{
        console.log(consola.Fabricante.marca,consola.modelo,consola.color)

    })
}

mostrarConsolas()

/////MAÑANA CREA EL MOSTRAR CARRO QLO

/*
function comprarConsola(){
    
    let seguirCompra = true

    while ( seguirCompra == true) {
        
        const seleccion = prompt("Que consola buscas? Nintendo, PlayStation o XBOX").toLocaleLowerCase()

        if(seleccion == "nintendo" || seleccion == "playstation" || seleccion == "xbox") {
            
            const busqueda = consolas.filter((consola) => consola.Fabricante.marca.includes(seleccion))
                console.log(busqueda)
            
            const especificacion = prompt("Cual quieres llevar al carro?").toLocaleLowerCase()
            
            if(consolas.find((consola) => consola.modelo == especificacion)){
                const agregar = consolas.find((consola) => consola.modelo.includes(especificacion))
                carro.push(agregar)  
                
            }else{

                alert("No tenemos que producto que indica")
            }

        }else{

            alert("Debe indicar una marca existente")
        }
        
        seguirCompra = confirm("Desea agregar algu producto adiconal?")
    }  
        
}

comprarConsola()
console.log(carro)

let resultadoFuncion

//recorreObjeto(consola3f,especificacion,resultadoFuncion)
//buscandoElObjeto(consolas,resultadoFuncion)

function buscandoElObjeto(array,variable){
    array.forEach((objeto) => {
        if(variable == array[objeto.modelo]){
            variable = array[objeto]
        }
    })
        
}


function recorreObjeto(objeto, variable, resultado){
    for (const propiedad in objeto) {
        if(variable == objeto[propiedad]){
           resultado = objeto[propiedad]
            
        }
        
    }

    console.log(resultado)
} 
       
*/ 


    