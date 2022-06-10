
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
const consola1a = new Consola("sk1",playStation5,"cfi-1100b","PlayStation 5","consola","blanco",300000,"https://n9.cl/601zz")
const consola1b = new Consola("sk2",playStation5,"cfi-1100b","PlayStation 5","consola","negro",320000,"https://n9.cl/oo549")
const consola1c = new Consola("sk3",playStation5,"cfi-11015b","PlayStation 5","consola","blanco",300000,"https://n9.cl/thl4i")
const consola1d = new Consola("sk4",playStation5,"cfi-11015b","PlayStation 5","consola","negro",300000,"https://n9.cl/oo549")

//PS4
const consola1f = new Consola("sk5",playStation4,"slim","PlayStation 4","consola", "negro",200000,"https://n9.cl/odacqu")
const consola1g = new Consola("sk6",playStation4,"pro","PlayStation 4","consola", "blanco",200000,"")


//XBOX 
const consola2a = new Consola("sk7",xboxSeries,"s","XBOX Series","consola", "negro",350000,"https://n9.cl/7nbf7")
const consola2b = new Consola("sk8",xboxSeries,"s","XBOX Series","consola", "blanco",350000,"https://n9.cl/ensy6")
//<------------ hasta aqui con foto real------>
//XBOX MODELO X
const consola2c = new Consola("sk9",xboxSeries,"x","XBOX Series","consola", "negro",450000,"https://n9.cl/odacqu")
const consola2d = new Consola("sk10",xboxSeries,"x","XBOX Series","consola", "blanco",450000,"https://n9.cl/odacqu")


//XBOX ONE
const consola2e = new Consola("sk11",xboxOne,"classic","XBOX ONE","consola", "verde",250000,"https://n9.cl/odacqu")
const consola2f = new Consola("sk12",xboxOne,"classic","XBOX ONE","consola",  "rojo",250000,"https://n9.cl/odacqu")


//Nintendo Oled
const consola3a = new Consola("sk13",nintendoSwitch,"oled","Nintendo Switch","consola", "negro",450000,"https://n9.cl/odacqu")
const consola3b = new Consola("sk14",nintendoSwitch,"oled","Nintendo Switch","consola",  "blanco",450000,"https://n9.cl/odacqu")
//Nintendo Switch classic
const consola3c = new Consola("sk15",nintendoSwitch,"classic","Nintendo Switch","consola",  "negro",380000,"https://n9.cl/odacqu")
const consola3d = new Consola("sk16",nintendoSwitch,"classic","Nintendo Switch","consola",  "blanco",380000,"https://n9.cl/odacqu")

//Nintendo DS XL
const consola3e = new Consola("sk17",nintendoDS,"xl","Ninentendo DS","consola", "azul",250000,"https://n9.cl/odacqu")
//Nintendo DS
const consola3f = new Consola("sk18",nintendoDS,"ds","Nintendo DS","consola", "gold",180000,"https://n9.cl/odacqu")
