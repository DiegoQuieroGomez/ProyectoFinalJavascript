

//Declaraciones
let carro = []
let descuento
//Spread de data.producto de API en array local
let todosMisProductos = []

const fotosInicio = ["https://image.api.playstation.com/vulcan/img/rnd/202010/1003/aEXbirwnPkBmgJtqr5FizxCg.png","https://i.ytimg.com/vi/8HFkzLNCrRo/maxresdefault.jpg","https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_FinalFantasyXX2HDRemaster_image1600w.jpg","https://as01.epimg.net/meristation/imagenes/2022/07/01/avances/1656691551_996476_1656691982_noticia_normal.jpg"]

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

//const oferContainer = document.querySelector("#ofertas")
const buscador = document.querySelector("#buscador")

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
mostrarInicio(fotosInicio)

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

        //Añade listeners al contenido generado dinámicamente
        listenersContenido(".buttonCTA", agregarProducto)

    })
    
}

//Devuelve 3 objetos random del un array
/*
function mostrarOfertas(array){
    const oferta =  [...array].sort(()=> Math.random() > 0.5 ? 1 : -1).slice(0,3)
    oferContainer.innerHTML=""
    oferta.forEach((producto)=> {
        
        if(producto.tipoProducto == "consola") {
            descuento = 0.93
        }if (producto.tipoProducto == "juego"){
            descuento = 0.91
        }if(producto.tipoProducto == "accesorio"){
            descuento = 0.95
        }if(producto.tipoProducto == "otro"){
            descuento = 0.05  
        }

        const ofer = document.createElement("div")
        ofer.className = "oferta"
        ofer.innerHTML =`         
        <img src="${producto.imagen}" class="productImg">
        <h2 class="productName"> ${producto.nombreProducto} </h2>
        <span class="productPrice"> $ ${Math.round(producto.precio * descuento)} </span>
        <button id= "${producto.sku}" class="buttonCTA"> Agregar al carro </button>
     `  
        oferContainer.append(ofer)

        
        listenersContenido("buttonCTA", agregarProducto)
    });
    
}
*/


function mostrarInicio(array){
    const inicio = [...array].sort(()=> Math.random() > 0.5 ? 1 : -1).slice(0,3)
    inicio.forEach((foto)=> {
    
        const fotoIni = document.createElement("div")
        fotoIni.className = "inicio"
        fotoIni.innerHTML =`         
        <img src="${foto}" class="fotoIni">
        `
        productContainer.append(fotoIni)
    
    })
    
}

//Buscador
function buscar(array){
    
}

//---------------------------------------------------------------------------------------------------------------------------------------------------

//Añadir al Carro
const agregarProducto = (e) =>{
    
    const productoElegido = e.target.getAttribute("id")
    const producto = todosMisProductos.find((producto) => producto.sku == productoElegido)
    carro.push(producto)
    guardarCompra = JSON.stringify(carro)
    localStorage.setItem("guardarCompra", guardarCompra)
    Toastify({
        text: "Producto añadido",
        duration: 3000,
        destination:"",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
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




  