

//Declaraciones

let carro = []

//Spread de data.producto de API en array local
let todosMisProductos = []

//Contienen data total
let mix = []

//Contiene Ultima Compra Finalizada LocalStorage
let compraPrevia = []
compraPrevia = JSON.parse(localStorage.getItem('historialDeCompra'))

//Contiene ultimo carro guardado Local Storage
let guardarCompra = []
guardarCompra = JSON.parse(localStorage.getItem('guardarCompra'))

//sin funcionamiento de momento
const historialDeBusqueda = []



//<--------------------------------------------------------------------------------------------------------->

//Query de elementos

const cardContainer = document.querySelector("#cardContainer")
const productContainer = document.querySelector("#contentContainer")
const historialDeCompra = document.getElementById("historial")
const botCarro = document.getElementById("carro")

//<-----------------------------------------------------------------Funciones------------------------------------------------------------->





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
//------------------------------------------Ejecucion ----------------------------------------------------
productosApi()  

//Ejecución Menú

const renderizarProductos = (e) => {
    const fabricanteElegido = e.target.getAttribute("data-id")
    const productosElegidos = e.target.getAttribute("class")
    const productos = mix.data[fabricanteElegido].producto.filter((productos) => productos.tipoProducto == productosElegidos)
    listarProductosPorTipo(productos)
}

//Funcionalidad menu
listenersContenido(".consola",renderizarProductos)
listenersContenido(".juego",renderizarProductos)
listenersContenido(".accesorio",renderizarProductos)
listenersContenido(".otro",renderizarProductos)
historialDeCompra.addEventListener("click",ultimaCompra)
botCarro.addEventListener("click", confirmarCarro)

//Listeners selectarAll
function listenersContenido(clase,funcion){
    const botones = document.querySelectorAll(clase)
    botones.forEach((botones) => {
        botones.addEventListener("click", funcion)
    })
}

//lista productos por tipo (CONSOLA/JUEGO/ACCESORIO/OTRO) -ARREGLAR DATOS SOLICITADOS-
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
        listenersContenido(".buttonCTA", agregarProducto)

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


//Trae ultima compra
function ultimaCompra(){
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
}

//Localstorage y carro vacio
function confirmarCarro(){
    if (carro.length ===0 ){
        productContainer.innerHTML =`
            <h1> carro vacio</h1>
            <button id= "buttonLocal" class="buttonLocal">cargar local storage puto?</button>
        `

        listenersContenido(".buttonLocal", reemplazarCarroVacio)
        /*
        () => {carro =guardarCompra
        listarCarro(carro)})
        */
    }else{
        listarCarro(carro)
    }

}
function reemplazarCarroVacio(){
        carro = guardarCompra
        listarCarro(carro)

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
        listenersContenido(".buttonEliminar", eliminarDelCarro)
    })

    //Boton finaliza compra al final del Carro
    const finalizarCompra = document.createElement("div")
    finalizarCompra.className = "finalizarCompra"
    finalizarCompra.innerHTML = `
        <button class= "pagar" data-id="pagar">Pagar</button>
    `
    productContainer.append(finalizarCompra)
    listenersContenido(".pagar",pagar)

}

//Elimina producto del carro y LocalStorage
const eliminarDelCarro = (e) => {
const producto = e.target.getAttribute("data-id")
carro = carro.filter((product) => product.sku != producto)
guardarCompra = JSON.stringify(carro)
localStorage.setItem("guardarCompra", guardarCompra)
confirmarCarro(carro)
}


//Confirmación de pago con SweetAlert
const pagar = () =>{

    let total = 0
    for(i=0;i < carro.length;i++){ 
        total = total + carro[i].precio
    }

    Swal.fire({
        title: '¿Deseas ir a la página del banco?',
        text: "El total es de $" + total +" Pesos",
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

