

//Declarraciones

const consolas = [consola1a,consola1b,consola1c,consola1d,consola1f,consola1g,consola2a,
    consola2b,consola2c,consola2d,consola2e,consola2f,consola3a,consola3b,consola3c,consola3d,
    consola3e,consola3f]

const juegos = [juego1a,juego1b,juego1c,juego1d,juego1e,juego1f,juego2a,juego2b,juego2c,juego2d,
    juego2e,juego2f,juego3a,juego3b,juego3c,juego3d,juego3e,juego3f]

const ofertas = [consola1a,consola1b,consola1c,consola1d]

const carro = []

const historialDeBusqueda = []

const todosMisProductos = []

llenarArrayMisProductos(consolas,juegos)
//<--------------------------------------------------------------------------------------------------------->

//Query de elementos

const cardContainer = document.querySelector("#cardContainer")
const productContainer = document.querySelector("#contentContainer")



//Funciones

function mostrarOfertas(){
    ofertas.forEach((producto) => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <h3 class="cardTitle">${producto.nombre}</h3>
            <img src="${producto.imagen}" class="cardImg">
            <p class="cardDesc"> Modelo ${producto.modelo} - Color ${producto.color}
            <span class="cardPrice"> $${producto.precio*0.75}<BR>25% desc.</span>
            <buttol data-id="${producto.Fabricante.marca}" class="buttonCTA"> Agregar al carro </button>
            `
        cardContainer.append(card)
    })
}

const mostrarNombre = () =>{
    console.log("evento Escuchado")
}

function listarProductosPorMarca(array){
    productContainer.innerHTML =""
    array.forEach((producto) => {
        
        const item = document.createElement("div")
        item.className = "product"
        item.innerHTML =`         
            <img src="${producto.imagen}" class="productImg">
            <h2 class="productName"> ${producto.tipoProducto}</h2>
            <h1 class="producto">  ${producto.nombre} - SKU: ${producto.id}</h1>
            <span class="price"> $${producto.precio}>
            <button type="button" class="agregarAlCarro">Añade al carrito </button>
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
//EJECUCIONES
