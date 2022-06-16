

//Declarraciones

const consolas = [consola1a,consola1b,consola1c,consola1d,consola1f,consola1g,consola2a,consola2b,consola2e,
    consola2f,consola3a,consola3b,consola3c,consola3d,consola3e,consola3f]

const juegos = [juego1a,juego1b,juego1c,juego1d,juego1e,juego1f,juego1g,juego2a,juego2b,juego2c,juego2d,
    juego2e,juego2f,juego2g,juego3a,juego3b,juego3c,juego3d,juego3e,juego3f,juego3g]

const ofertas = [consola1a,consola1b,consola1c,consola1d]

let carro = []

let compraPrevia = []

compraPrevia = JSON.parse(localStorage.getItem('historialDeCompra'))

const historialDeBusqueda = []

const todosMisProductos = [...consolas,...juegos]


//<--------------------------------------------------------------------------------------------------------->

//Query de elementos

const cardContainer = document.querySelector("#cardContainer")
const productContainer = document.querySelector("#contentContainer")
const botonesLista = document.querySelectorAll(".lista")
const historialDeCompra = document.getElementById("historial")
const botCarro = document.getElementById("carro")

//<------------------------Funciones------------------------------------->

//Confirma evento escuchado
const mostrarNombre = () =>{
    console.log("evento Escuchado")
}


//Muestra ofertas
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

//Lista productos dependiendo de la marca

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




//Añadir al Carro
const agregarProducto = (e) =>{
    const productoElegido = e.target.getAttribute("data-id")
    const producto = todosMisProductos.find((prod) => prod.id == productoElegido)
    carro.push(producto)
    console.log(carro)
}


//<--------------------------------Listeners----------------------------------------->

botonesLista.forEach((botonlista) =>{
    botonlista.addEventListener("click", mostrarProductos)
})


historialDeCompra.addEventListener("click",ultimaCompra)

botCarro.addEventListener("click", listarCarro)

//Añade Listeners al contenido generado dinámicamente
function listenersContenidoGenerado(clase, funcion){
    const botonesCompra = document.querySelectorAll(clase)
    botonesCompra.forEach((botonCompra) => {
        botonCompra.addEventListener("click", funcion)
    })

}
    
//Verificar Ultima Compra

function ultimaCompra(){

    if (localStorage.getItem('historialDeCompra')){
       productContainer.innerHTML = ""
        compraPrevia = JSON.parse(localStorage.getItem('historialDeCompra'))
        compraPrevia.forEach((producto) =>{
            
            const ultima = document.createElement("div")
            ultima.className = "historialDeCompra"
            ultima.innerHTML = `
                <img src="${producto.imagen}" class="productImg2">
                <h1 class="producto"> ${producto.tipoProducto} ${producto.nombre} - SKU: ${producto.id}</h1>
                
            `
            productContainer.append(ultima)

        })

    }else{
        const ultima1 = document.createElement("div")
        ultima1.className = " productHistorial"
        ultima1.innerHTML = `
            <h1> No tenemos registros de compras previas. Bienvenido!! </h1>
        `
        productContainer.append(ultima1)
    }

}

//listar Carro

function listarCarro(){
    productContainer.innerHTML =""
    carro.forEach((producto) => {
        
        const item = document.createElement("div")
        item.className = "productsCarrito"
        item.innerHTML =`         
            <img src="${producto.imagen}" class="productImg2">
            <h1 class="producto"> ${producto.tipoProducto} ${producto.nombre} - SKU: ${producto.id}</h1>
            <span class="productPrice2"> $${producto.precio}</span>
            <input type="image" src="sources/trash.svg" data-id="${producto.id}" class="buttonEliminar">
         `
        productContainer.append(item)
        //Añade listeners al contenido generado dinámicamente
        listenersContenidoGenerado(".buttonEliminar", eliminarDelCarro)
    })
    //Boton finaliza compra al final del Carro
    const finalizarCompra = document.createElement("div")
    finalizarCompra.className = "finalizarCompra"
    finalizarCompra.innerHTML = `
        <button class= "pagar" data-id="pagar">Pagar</button>
    `
    productContainer.append(finalizarCompra)
    listenersContenidoGenerado(".pagar",pagar)

}

const eliminarDelCarro = (e) => {
const producto = e.target.getAttribute("data-id")
carro = carro.filter((product) => product.id != producto)
console.log(carro)
listarCarro()

}

const pagar = () =>{

    let total = 0
    for(i=0;i < carro.length;i++){ 
        total = total + carro[i].precio
    }
    //Pretendo cambiarlo por un Pop Up o Dialog que estuve viendo
    const alBanco = confirm("Desea ir a la pagina del Banco?")
    
    if (alBanco == true) {
        const historial = JSON.stringify(carro)
        localStorage.setItem('historialDeCompra',historial)
        carro = []
        productContainer.innerHTML = ""
    }
    
}

