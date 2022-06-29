

//Declaraciones

let carro = []

let todosMisProductos = []
let mix = []

//Array Ultima Compra en Local Storage
let compraPrevia = []
compraPrevia = JSON.parse(localStorage.getItem('historialDeCompra'))

let guardarCompra = []

const historialDeBusqueda = []



//<--------------------------------------------------------------------------------------------------------->

//Query de elementos

const cardContainer = document.querySelector("#cardContainer")
const productContainer = document.querySelector("#contentContainer")
const historialDeCompra = document.getElementById("historial")
const botCarro = document.getElementById("carro")

//<------------------------Funciones------------------------------------->

//Confirma evento escuchado
const mostrarNombre = () =>{
    console.log("evento Escuchado")
}

//Aplicacion Fetch

const productosApi = async () => {
    const response = await fetch ("data/productos.json")
    const data = await response.json()
    mix = data
    todosMisProductos = [...data.data[0].producto,...data.data[1].producto,...data.data[2].producto]
    
}

productosApi()  


const renderizarProductos = (e) => {
    const fabricanteElegido = e.target.getAttribute("data-id")
    const productosElegidos = e.target.getAttribute("class")
    const productos = mix.data[fabricanteElegido].producto.filter((productos) => productos.tipoProducto == productosElegidos)
    listarProductosPorTipo(productos)
}

//Listeners al Menú
function listenerMenu(clase,funcion){
    const botonesMenu = document.querySelectorAll(clase)
    botonesMenu.forEach((botonesMenu) => {
        botonesMenu.addEventListener("click", funcion)
    })
    
}
//Ejecución Menú
listenerMenu(".consola",renderizarProductos)
listenerMenu(".juego",renderizarProductos)
listenerMenu(".accesorio",renderizarProductos)
listenerMenu(".otro",renderizarProductos)


//-----------------Lista productos dependiendo de la marca------------------------------------  ARREGLAR

function listarProductosPorTipo(array){
    productContainer.innerHTML =""
    array.forEach((producto) => {
        
        const item = document.createElement("div")
        item.className = "product"
        item.innerHTML =`         
            <img src="${producto.imagen}" class="productImg">
            <h2 class="productName"> ${producto.tipoProducto} ${producto.nombre} </h2>
            <span class="productPrice"> $ ${producto.precio} </span>
            <button id= "${producto.sku}" class="buttonCTA"> Agregar al carro </button>
         `
        productContainer.append(item)
        //Añade listeners al contenido generado dinámicamente
        listenersContenidoGenerado(".buttonCTA", agregarProducto)

    })

    
}


//---------------------------------------------------------------------------------------------------------------------------------------------------

//Añadir al Carro
const agregarProducto = (e) =>{
   
    const productoElegido = e.target.getAttribute("id")
    const producto = todosMisProductos.find((producto) => producto.sku == productoElegido)
    carro.push(producto)
    guardarCompra = JSON.stringify(carro)
    localStorage.setItem("guardarCompra", guardarCompra)
   
}


//<--------------------------------Listeners----------------------------------------->

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
            <input type="image" src="sources/trash.svg" data-id="${producto.sku}" class="buttonEliminar">
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
carro = carro.filter((product) => product.sku != producto)
console.log(carro)
listarCarro()

}
//Confirmación de pago con SweetAlert
const pagar = () =>{

    let total = 0
    for(i=0;i < carro.length;i++){ 
        total = total + carro[i].precio
    }

    Swal.fire({
        title: '¿Deseas ir a la página del banco?',
        text: "Dejaremos tu carrito intacto si quieres ir mas tarde",
        icon: 'question',
        iconColor:"yellow",
        width:"20%",
        background:"black",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vamos al Banco'
      }).then((result) => {
        if (result.isConfirmed) {
            
            const historial = JSON.stringify(carro)
            localStorage.setItem('historialDeCompra',historial)
            carro = []
            productContainer.innerHTML = ""  

            Swal.fire(
            'Pago exitoso',
            'Gracias por tu compra',
            'success'
            )
        }
      })


}

