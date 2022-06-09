
//Clases

class Fabricante{
    constructor(nombre, marca,producto){
        this.nombre = nombre
        this.marca = marca
        this.producto = producto
    }
}

class Consola{
    constructor(id,Fabricante,modelo, tipoProducto,color, precio, imagen){
        this.id = id
        this.Fabricante = Fabricante
        this.modelo = modelo
        this.tipoProducto = tipoProducto
        this.color = color
        this.precio = precio
        this.imagen = imagen

    }
        
}

class VideoJuego{
       constructor(id,categoria,nombre,tipoProducto,Fabricante,precio, imagen){
        this.id = id
        this.categoria = categoria
        this.nombre = nombre
        this.tipoProducto = tipoProducto
        this.Fabricante = Fabricante
        this.precio = precio
        this.imagen = imagen
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
const consola1a = new Consola("sk1",playStation5,"cfi-1100b","consola","blanco",300000,"https://n9.cl/601zz")
const consola1b = new Consola("sk2",playStation5,"cfi-1100b","consola","negro",320000,"https://n9.cl/oo549")
const consola1c = new Consola("sk3",playStation5,"cfi-11015b","consola","blanco",300000,"https://n9.cl/thl4i")
const consola1d = new Consola("sk4",playStation5,"cfi-11015b","consola","negro",300000,"https://n9.cl/oo549")

//PS4
const consola1f = new Consola("sk5",playStation4,"slim","consola", "negro",200000,"https://n9.cl/odacqu")
const consola1g = new Consola("sk6",playStation4,"pro","consola", "blanco",200000,"")


//XBOX 
const consola2a = new Consola("sk7",xboxSeries,"s","consola", "negro",350000,"https://n9.cl/7nbf7")
const consola2b = new Consola("sk8",xboxSeries,"s","consola", "blanco",350000,"https://n9.cl/ensy6")
//<------------ hasta aqui con foto real------>
//XBOX MODELO X
const consola2c = new Consola("sk9",xboxSeries,"x","consola", "negro",450000,"https://n9.cl/odacqu")
const consola2d = new Consola("sk10",xboxSeries,"x","consola", "blanco",450000,"https://n9.cl/odacqu")


//XBOX ONE
const consola2e = new Consola("sk11",xboxOne,"classic","consola", "verde",250000,"https://n9.cl/odacqu")
const consola2f = new Consola("sk12",xboxOne,"classic","consola",  "rojo",250000,"https://n9.cl/odacqu")


//Nintendo Oled
const consola3a = new Consola("sk13",nintendoSwitch,"oled","consola", "negro",450000,"https://n9.cl/odacqu")
const consola3b = new Consola("sk14",nintendoSwitch,"oled","consola",  "blanco",450000,"https://n9.cl/odacqu")
//Nintendo Switch classic
const consola3c = new Consola("sk15",nintendoSwitch,"classic","consola",  "negro",380000,"https://n9.cl/odacqu")
const consola3d = new Consola("sk16",nintendoSwitch,"classic","consola",  "blanco",380000,"https://n9.cl/odacqu")

//Nintendo DS XL
const consola3e = new Consola("sk17",nintendoDS,"xl","consola", "azul",250000,"https://n9.cl/odacqu")
//Nintendo DS
const consola3f = new Consola("sk18",nintendoDS,"ds","consola", "gold",180000,"https://n9.cl/odacqu")

//<-----------------------------------------------Video Juegos--------------------------------------------------->

const juego1a = new VideoJuego("pj1","Pelea","Mortal Combat X","video juego",playStation5, 30000,"https://n9.cl/xid9s")
const juego1b = new VideoJuego("pj2","Pelea","Mortal Combat XI","video juego",xboxSeries, 35000,"https://n9.cl/xid9s")
const juego1c = new VideoJuego("pj3","Pelea","Dragon ball Super","video juego",playStation4, 30000,"https://n9.cl/xid9s")
const juego1d = new VideoJuego("pj4","Pelea","Soul Calibur 80000","video juego",xboxOne, 30000,"https://n9.cl/zkbki")
const juego1e = new VideoJuego("pj5","Pelea","Super Smash","video juego",nintendoSwitch, 30000,"https://n9.cl/zkbki")
const juego1f = new VideoJuego("pj6","Pelea","superlo que sea","video juego",nintendoSwitch, 30000,"https://n9.cl/zkbki")


const juego2a = new VideoJuego("pj7","shooter","","video juego",playStation5, 30000,"")
const juego2b = new VideoJuego("pj8","shooter","","video juego",xboxSeries, 30000,"")
const juego2c = new VideoJuego("pj9","shooter","","video juego",playStation4, 30000,"")
const juego2d = new VideoJuego("pj10","shooter","","video juego",xboxOne, 30000,"")
const juego2e = new VideoJuego("pj11","shooter","","video juego",nintendoSwitch, 30000,"")
const juego2f = new VideoJuego("pj12","shooter","","video juego",nintendoDS, 30000,"")

const juego3a = new VideoJuego("pj13","Racing","","video juego",playStation5, 30000,"")
const juego3b = new VideoJuego("pj14","Racing","","video juego",xboxSeries, 30000,"")
const juego3c = new VideoJuego("pj15","Racing","","video juego",playStation4, 30000,"")
const juego3d = new VideoJuego("pj16","Racing","","video juego",xboxOne, 30000,"")
const juego3e = new VideoJuego("pj17","Racing","","video juego",nintendoSwitch, 30000,"")
const juego3f = new VideoJuego("pj18","Racing","","video juego",nintendoDS, 30000,"")

//<------------------------------------------------Arrays--------------------------------------------------------->


//Arrays
const consolas = [consola1a,consola1b,consola1c,consola1d,consola1f,consola1g,consola2a,
    consola2b,consola2c,consola2d,consola2e,consola2f,consola3a,consola3b,consola3c,consola3d,
    consola3e,consola3f]

const juegos = [juego1a,juego1b,juego1c,juego1d,juego1e,juego1f,juego2a,juego2b,juego2c,juego2d,
    juego2e,juego2f,juego3a,juego3b,juego3c,juego3d,juego3e,juego3f]

const consolasPrueba = [consola1a,consola1b,consola1c,consola1d]

const ofertas = [consola1a,consola1b,consola1c,consola1d]

const carro = []

const historialDeBusqueda = []

const todosMisProductos = []


llenarArrayMisProductos(consolas,juegos)
//<--------------------------------------------------------------------------------------------------------->

//Insertar Html

//Creador de cartas ofertas
const cardContainer = document.querySelector("#cardContainer")

function mostrarOfertas(){
    ofertas.forEach((producto) => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <h3 class="cardTitle"> Consola ${producto.Fabricante.marca}</h3>
            <img src="${producto.imagen}" class="cardImg">
            <p class="cardDesc"> Modelo ${producto.modelo} - Color ${producto.color}
            <span class="cardPrice"> $${producto.precio*0.75}<BR>25% desc.</span>
            <buttol data-id="${producto.Fabricante.marca}" class="buttonCTA"> Agregar al carro </button>
            `
        cardContainer.append(card)
    })
}

//Listar productos

const mostrarNombre = () =>{
    console.log("evento Escuchado")
}
const productContainer = document.querySelector("#contentContainer")
function listarProductosPorMarca(array){
    productContainer.innerHTML =""
    array.forEach((producto) => {
        
        const item = document.createElement("div")
        item.className = "product"
        item.innerHTML =`         
            <img src="${producto.imagen}" class="productImg">
            <h2 class="modelo"> ${producto.tipoProducto} ${producto.Fabricante.marca}</h2>
            <h1 class="producto">  ${producto.Fabricante.producto} - SKU: ${producto.id}</h1>
            <span class="price"> $${producto.precio}>
            <button type=""button class="agregarAlCarro">Añade al carrito </button>
         `
        productContainer.append(item)
    })
    
}

const mostrarProductos = (e) => {
    const productosElegidos = e.target.getAttribute("data-id")
    const productos = todosMisProductos.filter((productos) => productos.Fabricante.marca == productosElegidos)
    listarProductosPorMarca(productos)
}


const botonesLista = document.querySelectorAll(".lista")
botonesLista.forEach((botonlista) =>{
    botonlista.addEventListener("click", mostrarProductos)
})






//llena mi array con los productos creados
function llenarArrayMisProductos(primerArray, segundoArray){
    primerArray.forEach((producto) => {
            todosMisProductos.push(producto)
    })
    
    segundoArray.forEach((producto) => {
            todosMisProductos.push(producto)
    
    })
}  
