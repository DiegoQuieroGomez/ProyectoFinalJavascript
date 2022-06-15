
class Consola{
    constructor(id,Fabricante,categoria,nombre,tipoProducto,color, precio, imagen){
        this.id = id
        this.Fabricante = Fabricante
        this.categoria = categoria
        this.nombre = nombre
        this.tipoProducto = tipoProducto
        this.color = color
        this.precio = precio
        this.imagen = imagen

    }
        
}

//PS5
const consola1a = new Consola("sk1",playStation5,"cfi-1100b","PlayStation 5","Consola","blanco",300000,"https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21")
const consola1b = new Consola("sk2",playStation5,"cfi-1100b","PlayStation 5","Consola","negro",320000,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJ8efRbsygB31fjs-oMq0GsSsy_zhfJAvm4Hq8bdgtjixk7V5c_DOrKvDnqoJDc7ob7g&usqp=CAU")
const consola1c = new Consola("sk3",playStation5,"cfi-11015b","PlayStation 5","Consola","blanco",300000,"https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21")
const consola1d = new Consola("sk4",playStation5,"cfi-11015b","PlayStation 5","Consola","negro",300000,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJ8efRbsygB31fjs-oMq0GsSsy_zhfJAvm4Hq8bdgtjixk7V5c_DOrKvDnqoJDc7ob7g&usqp=CAU")

//PS4
const consola1f = new Consola("sk5",playStation4,"slim","PlayStation 4","Consola", "negro",200000,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWeD0Ndczg_NYzWOc0toQ2h7BqU-hW3DLog&usqp=CAU")
const consola1g = new Consola("sk6",playStation4,"pro","PlayStation 4","Consola", "blanco",200000,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgy2IQq2i04ITFj-xWmnEpDONFmV2vFisDAw&usqp=CAU")


//XBOX 
const consola2a = new Consola("sk7",xboxSeries,"s","XBOX Series","consola", "blanco",350000,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoA_0pSy_9OzmcLUilPtyfJw_eWMDnmsbipw&usqp=CAU")
//<------------ hasta aqui con foto real------>
//XBOX MODELO X
const consola2b = new Consola("sk8",xboxSeries,"x","XBOX Series","Consola", "negro",450000,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUpsLeAfrouzrbA-ecfPGSzdsQhLIU2CE-g&usqp=CAU")



//XBOX ONE
const consola2e = new Consola("sk11",xboxOne,"classic","XBOX ONE","Consola", "verde",250000,"https://m.media-amazon.com/images/I/51I9bYDTbXL._AC_SX522_.jpg")
const consola2f = new Consola("sk12",xboxOne,"classic","XBOX ONE","Consola",  "rojo",250000,"https://m.media-amazon.com/images/I/51ImoaJ0PrL._AC_SX355_.jpg")


//Nintendo Oled
const consola3a = new Consola("sk13",nintendoSwitch,"oled","Nintendo Switch","Consola", "Tradicional",450000,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrg1dWL-RsedTIgyacO3wRluFRfidJGMG1-wVe-4OqnUK4GU9v9GdfxFiuAaHt7z8Xms&usqp=CAU")
const consola3b = new Consola("sk14",nintendoSwitch,"oled","Nintendo Switch","Consola",  "blanco",450000,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gpFmb6Np3yWFbsqf6ZNuvvl-eRJMzXjanw&usqp=CAU")
//Nintendo Switch classic
const consola3c = new Consola("sk15",nintendoSwitch,"classic","Nintendo Switch","Consola",  "Gris",380000,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMk79itWp_PlVZts_WxX-kcwEP20vx7GK8zxf8Lnc4ygbUlK5TR5SAev6afImdzQPHhNQ&usqp=CAU")
const consola3d = new Consola("sk16",nintendoSwitch,"classic","Nintendo Switch","Consola",  "Gold",380000,"https://m.media-amazon.com/images/I/71dRZaxtVzL._SX425_.jpg")

//Nintendo DS XL
const consola3e = new Consola("sk17",nintendoDS,"xl","Ninentendo DS","Consola", "Negra",250000,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsV5KyVt3KSsr3q_mYdN1cO-hFH2Bl8qNz3Q&usqp=CAU")
//Nintendo DS
const consola3f = new Consola("sk18",nintendoDS,"ds","Nintendo DS","Consola", "Rosa",180000,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFKKL1hRGSKuQRylJknm_Wu92hGRJw7rfl5Q&usqp=CAU")
