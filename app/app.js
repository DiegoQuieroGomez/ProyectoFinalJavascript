

//Declarraciones

const consolas = [consola1a,consola1b,consola1c,consola1d,consola1f,consola1g,consola2a,consola2b,consola2e,consola2f,consola3a,consola3b,consola3c,consola3d,
    consola3e,consola3f]

const juegos = [juego1a,juego1b,juego1c,juego1d,juego1e,juego1f,juego1g,juego2a,juego2b,juego2c,juego2d,
    juego2e,juego2f,juego2g,juego3a,juego3b,juego3c,juego3d,juego3e,juego3f,juego3g]

const ofertas = [consola1a,consola1b,consola1c,consola1d]

const carro = []

const historialDeBusqueda = []

const todosMisProductos = [...consolas,...juegos]


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
            <button data-id="${producto.Fabricante.marca}" class="buttonCTA"> Agregar al carro </button>
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
            <h2 class="productName"> ${producto.tipoProducto} ${producto.nombre} </h2>
            <span class="productPrice"> $ ${producto.precio} </span>
            <button data-id="${producto.id}" class="buttonCTA"> Agregar al carro </button>
         `
        productContainer.append(item)
        //Añade listeners al contenido generado dinámicamente
        listenersContenidoGenerado(".buttonCTA", agregarProducto)
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

//Añadir al Carro

const agregarProducto = (e) =>{
    const productoElegido = e.target.getAttribute("data-id")
    const producto = todosMisProductos.find((prod) => prod.id == productoElegido)
    carro.push(producto)
    console.log(carro)
}


//Añade Listeners al contenido generado dinámicamente
function listenersContenidoGenerado(clase, funcion){

    const botonesCompra = document.querySelectorAll(clase)
    botonesCompra.forEach((botonCompra) => {
        botonCompra.addEventListener("click", funcion)
    })

}
    

//listar Carro

function listarCarro(){
    productContainer.innerHTML =""
    carro.forEach((producto) => {
        
        const item = document.createElement("div")
        item.className = "productsCarrito"
        item.innerHTML =`         
            <img src="${producto.imagen}" class="productImg">
            <h2 class="productName"> ${producto.tipoProducto}</h2>
            <h1 class="producto">  ${producto.nombre} - SKU: ${producto.id}</h1>
            <span class="price"> $${producto.precio}>
            <button data-id="${producto.id}" class="buttonEliminar"> Eliminar Del Carro </button>
         `
        productContainer.append(item)
        //Añade listeners al contenido generado dinámicamente
        listenersContenidoGenerado(".buttonEliminar", eliminarDelCarro)
    })
    
}

const eliminarDelCarro = (e) => {
const producto = e.target.getAttribute("data-id")
const productoAEliminar = todosMisProductos.find((product) => product.id == producto)
carro.shift(producto)
listarCarro()

}

const botCarro = document.getElementById("carro")

function mostrarCarro(){
    listarCarro()
}

botCarro.addEventListener("click", mostrarCarro)


