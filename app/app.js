

//Declaraciones
let carro = []
let descuento
//Spread de data.producto de API en array local
let todosMisProductos = []

//Parce para slide XD No me dio tiempo
const fotosInicio = [ "https://i.ytimg.com/vi/6bpmHn5qMHU/maxresdefault.jpg", "https://img.finalfantasyxiv.com/lds/h/6/UZckNxeRDupGDdyGfpN9f-r7xc.jpg?_ga=2.54078056.1367577568.1657996467-1729104679.1657996467", "https://img.finalfantasyxiv.com/lds/h/h/tc-V3QoRPlpbVmgIZRTAtiy2kU.jpg?_ga=2.75247058.1367577568.1657996467-1729104679.1657996467"]

//Contienen data totals
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
const buscador = document.querySelector("#buscador")
const botonBuscar = document.querySelector("#botonBuscar")

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
    //buscar(todosMisProductos)
}
//------------------------------------------Ejecucion ----------------------------------------------------
productosApi()  

//Ejecuci??n Men??
mostrarInicio(fotosInicio)

const renderizarProductos = (e) => {
    const fabricanteElegido = e.target.getAttribute("data-id")
    const productosElegidos = e.target.getAttribute("class")
    const productos = mix.data[fabricanteElegido].producto.filter((productos) => productos.tipoProducto == productosElegidos)
    listarProductosPorTipo(productos)
}

//Buscador
const searchBar = () => {
    const busqueda = buscador.value.toLowerCase()
    const filtrado = todosMisProductos.filter((producto) => producto.nombreProducto.toLowerCase().includes(busqueda) || producto.tipoProducto.toLowerCase().includes(busqueda) )
    listarProductosPorTipo(filtrado)

}

//Funcionalidad menu
listenersContenido(".consola",renderizarProductos)
listenersContenido(".juego",renderizarProductos)
listenersContenido(".accesorio",renderizarProductos)
listenersContenido(".otro",renderizarProductos)
botonBuscar.addEventListener("click", searchBar)
historialDeCompra.addEventListener("click",ultimaCompra)
botCarro.addEventListener("click", confirmarCarro)
//buscador.addEventListener("onchange",)

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
            <h2 class="productName"> ${producto.nombreProducto} </h2>
            <span class="productPrice"> $ ${producto.precio} </span>
            <button id= "${producto.sku}" class="buttonCTA"> Agregar al carro </button>
         `
        productContainer.append(item)

        //A??ade listeners al contenido generado din??micamente
        listenersContenido(".buttonCTA", agregarProducto)

    })
    
}

function mostrarInicio(array){
    const inicio = [...array].sort(()=> Math.random() > 0.5 ? 1 : -1).slice(0,1)
    inicio.forEach((foto)=> {
    
        const fotoIni = document.createElement("div")
        fotoIni.className = "inicio"
        fotoIni.innerHTML =`         
        <img src="${foto}" class="fotoIni">
        `
        productContainer.append(fotoIni)
    
    })
    
}

//---------------------------------------------------------------------------------------------------------------------------------------------------

//A??adir al Carro
const agregarProducto = (e) =>{
    
    const productoElegido = e.target.getAttribute("id")
    const producto = todosMisProductos.find((producto) => producto.sku == productoElegido)
    carro.push(producto)
    guardarCompra = JSON.stringify(carro)
    localStorage.setItem("guardarCompra", guardarCompra)
    Toastify({
        text: "Producto a??adido",
        duration: 1000,
        destination:"",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #b9cae7, #97e672)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
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
                <h1 class="producto"> ${producto.nombreProducto} - SKU: ${producto.sku}</h1>
            `
            productContainer.append(ultima)

        })
}

//Localstorage y carro vacio
function confirmarCarro(){
    if (carro.length ===0 ){
        productContainer.innerHTML = ""
        
        const cVacio = document.createElement("div")
        cVacio.className = "carroVacio"
        cVacio.innerHTML =
        `
            <h1 class="tituloCarroVacio"> Tu carro est?? Vacio!!!</h1>
            <h1 class="recuperarCarro"> ??Deseas Recuperar tu ??ltima selecci??n de productos? </h1>
            <button id= "buttonLocal" class="buttonLocal">Recuperar Carro</button>
        `
        productContainer.append(cVacio)

        listenersContenido(".buttonLocal",  () => {carro = JSON.parse(localStorage.getItem("guardarCompra"))
            listarCarro(carro)})
    }else{
            listarCarro(carro)
    }

}

//listar Carro
function listarCarro(){
    console.log(carro)
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

        //A??ade listeners al contenido generado din??micamente
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


//Confirmaci??n de pago con SweetAlert
const pagar = () =>{

    let total = 0
    for(i=0;i < carro.length;i++){ 
        total = total + carro[i].precio
    }

    Swal.fire({
        title: '??Deseas ir a la p??gina del banco?',
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




  