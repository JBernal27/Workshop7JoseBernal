import GP from '../generalPurpose.js'

const adminUsers = []
const clientUsers = []
let actualUser

//Clase padre Person

function Person(name, email, pass) {
    this.name = name
    this.email = email
    this.pass = pass
}

//Clase padre Person

//User que hereda de Person

function User(name, email, pass, acumulatedPoints) {
    Person.call(this, name, email, pass)
    this.acumulatedPoints = acumulatedPoints
}
  
User.prototype = Object.create(Person.prototype)
User.prototype.constructor = User

User.prototype.acumulatePoints = function(points){
    this.acumulatedPoints += points
}

User.prototype.reedemPoints = function(pointsToReedem){
    if(this.acumulatedPoints >= pointsToReedem){
        let redeemedObject = token.getInfo()
        if(pointsToReedem >= redeemedObject.necessaryPoints){
            GP.impInf(`Haz canjeado tus puntos por un token de RIWI (${redeemedObject.necessaryPoints}pts)`)
            this.acumulatedPoints -= redeemedObject.necessaryPoints
        }
        else{
            GP.impErr("Estos puntos no son suficientes para canjear algo")
        }
    }else{
        GP.impErr(`No tienes la cantidad de puntos que intentas redimir\n Tus puntos: ${this.acumulatedPoints}\n Intentaste canjear: ${pointsToReedem}`)
    }
}

const juan = new User("Juan", "juan@example.com", "password123", 0)
clientUsers.push(juan)

//User que hereda de Person

//Admin que hereda de Person

const products = []


function Admin(name, email, pass) {
    Person.call(this, name, email, pass)
}
  
Admin.prototype = Object.create(Person.prototype)
Admin.prototype.constructor = Admin

const admin = new Admin("Admin","Admin@gmail.com","1234")
adminUsers.push(admin)

Admin.prototype.addNewProduct = function(){
    let newProduct 
    let productName = GP.textInput("Ingrese el nombre de producto")
    let necessaryPoints = GP.numberInput("Ingrese el numero de puntos necesarios para canjear el producto")
    let avaliableQuantity = GP.numberInput("Ingrese las unidades disponibles para este producto")
    let stock = avaliableQuantity 
    if(confirm("Pulse Aceptar para crear un nuevo producto fisico o cancelar para crear un producto digital")){
        let price = GP.numberInput("Ingrese el precio del producto")
        newProduct = new PhysicalProduct(productName,necessaryPoints,avaliableQuantity,stock,price)
    }else{
        let url = GP.textInput("Ingresa la url del producto")
        newProduct = new DigitalProduct(productName,necessaryPoints,avaliableQuantity,stock,url)
    }
    products.push(newProduct)
    console.log(products)
}

Admin.prototype.editProduct = function(){
    let productToSea
}

//Admin que hereda de Person

//Clase padre Product

function Product(productName, necessaryPoints, avaliableQuantity, stock){
    this.productName = productName
    this.necessaryPoints = necessaryPoints
    this.avaliableQuantity = avaliableQuantity
    this.stock = stock
}

//Clase padre Product

//PhysicalProduct que hereda de Product

function PhysicalProduct(productName, necessaryPoints, avaliableQuantity, stock,price){
    Product.call(this,productName, necessaryPoints, avaliableQuantity, stock)
    this.price = price
}

PhysicalProduct.prototype = Object.create(Product.prototype)
PhysicalProduct.prototype.constructor = PhysicalProduct

PhysicalProduct.prototype.getInfo = function() {
    return {
      productName: this.productName,
      necessaryPoints: this.necessaryPoints, 
      avaliableQuantity: this.avaliableQuantity,
      stock: this.stock,
      price: this.price
    }
}

PhysicalProduct.prototype.setStock = function(){
    let quantitySold = 1 //GP.impInf("Ingrese la cantidad de productos vendidos")
    if(this.stock >= quantitySold){
        this.stock -= quantitySold
    }else{
        GP.impErr("Hay una irregularidad, recuenta los vendidos")
    }
}

PhysicalProduct.prototype.sendProduct = function(address){
    GP.impInf("Enviando" + this.productName + "el producto a " + address)
}

//PhysicalProduct que hereda de Product

//DigitalProduct que hereda de Product

function DigitalProduct(productName, necessaryPoints, avaliableQuantity, stock,url){
    Product.call(this,productName, necessaryPoints, avaliableQuantity, stock)
    this.url = url
}

DigitalProduct.prototype = Object.create(Product.prototype)
DigitalProduct.prototype.constructor = DigitalProduct

DigitalProduct.prototype.getInfo = function() {
    return {
      productName: this.productName,
      necessaryPoints: this.necessaryPoints,
      avaliableQuantity: this.avaliableQuantity,
      stock: this.stock,
      url: this.url
   }
}

DigitalProduct.prototype.download = function(){
    GP.impInf("Descargando " + this.productName)
}

DigitalProduct.prototype.getProductEmail = function(){
    return "email" //Corregir, no se que es lo que se debe retornar
}

//DigitalProduct que hereda de Product

const token = new DigitalProduct("Riwi token",25,3,3,"riwi.com/token")
products.push(token)

//Clase Activity

function Activity(tipe,grantedPoints){
    this.tipe = tipe
    this.grantedPoints = grantedPoints
}

Activity.prototype.completeActivity = function(){
    GP.impInf("Actividad Realizada con exito")
    return(this.grantedPoints)
}

const actividad1 = new Activity(1,30)

//Clase Activity

//Clase ProductCategory

function ProductCategory(categoryName,categoryDescription){
    this.categoryName = categoryName
    this.categoryDescription = categoryDescription
}

ProductCategory.prototype.productList= function(){
    //Recorrer lista de productos y extraer los que tengan esta categoria
}

//Clase ProductCategory

//Clase ExchangeOrder


function ExchangeOrder(user,product,exchangeDate){
    this.user = user
    this.product = product
    this.exchangeDate = exchangeDate
}

ExchangeOrder.prototype.confirmExchangeOrder = function(){
    //Confirmar orden de cancje
    GP.impInf("El canje fue realizado correctamente")
}

ExchangeOrder.prototype.confirmExchangeOrder = function(){
    //Confirmar orden de cancje
    GP.impInf("El canje no fue realizado con exito")
}

//Clase ExchangeOrder

//RECORDAR CAMBIAR EL TITULO DE CANJE

const clientMenu = () =>{
    let op = GP.numberInput("Ingrese una opcion:\n 1. Realizar actividad\n 2. Redimir puntos\n 0. Cerrar Sesion")
    switch (op) {
        case 1:
           actualUser.acumulatePoints(actividad1.completeActivity())
        break;
        case 2:
            actualUser.reedemPoints(GP.numberInput(`Cuantos Puntos deseas redimir? (Tienes ${actualUser.acumulatedPoints})`))
        break;
        case 0:
            return false
        break;
        default:
            GP.impErr("Ingrese una opcion valida")
        break;
    }

    return true
}

const adminMenu = () =>{
    let op = GP.numberInput("Ingrese una opcion:\n 1. Agregar Producto\n 2. Modificar Producto\n 3. Eliminar Producto\n 4. Eliminar Usuario\n 0. Cerrar Sesion")
    switch (op) {
        case 1:
            actualUser.addNewProduct()
        break;
        case 2:
            actualUser.editProduct()
        break;
        case 3:
            actualUser.deleteProduct()
        break
        case 4:
            actualUser.deleteUserClient()
        break
        case 0:
            return false
        break;
        default:
            GP.impErr("Ingrese una opcion valida")
        break;
    }

    return true
}

const menu = () =>{
    let userToCompare
    let user
    let op = GP.numberInput(`Ingrese una opcion:\n 1. Iniciar Sesion como Cliente\n 2. Iniciar Sesion como Administrador\n 0. Salir del programa`)

    switch (op) {
        case 1:
            userToCompare = GP.textInput("Ingrese su usuario")
            user = clientUsers.find(clientUser => clientUser.name == userToCompare);
            console.log(user);
            if(user){
                console.log(user.pass)
                let password = GP.textInput("Ingrese la contraseña");
                console.log(password)
                if(user.pass == password){
                    GP.impInf("Sesion Iniciada Correctamente")
                    actualUser = user
                    while(clientMenu()){}
                }else{
                    GP.impErr("Contraseña incorrecta")
                }
            }else{
                GP.impErr("Usuario invalido")
            }
        break;
        
        case 2:
            userToCompare = GP.textInput("Ingrese su usuario")
            user = adminUsers.find(clientUser => clientUser.name == userToCompare);
            console.log(user);
            if(user){
                console.log(user.pass)
                let password = GP.textInput("Ingrese la contraseña");
                console.log(password)
                if(user.pass == password){
                    GP.impInf("Sesion Iniciada Correctamente")
                    actualUser = user
                    while(adminMenu()){}
                }else{
                    GP.impErr("Contraseña incorrecta")
                }
            }else{
                GP.impErr("Usuario invalido")
            }
        break;

        case 0:
            return false
        break;
    
        default:
            GP.impErr("Ingrese una opcion valida")
        break;
    }

    return true
}

while(menu()){}