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
    let quantitySold = 1 //impInf("Ingrese la cantidad de productos vendidos")
    if(this.stock >= quantitySold){
        this.stock -= quantitySold
    }else{
        impErr("Hay una irregularidad, recuenta los vendidos")
    }
}

PhysicalProduct.prototype.sendProduct = function(address){
    impInf("Enviando" + this.productName + "el producto a " + address)
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
    impInf("Descargando " + this.productName)
}

DigitalProduct.prototype.getProductEmail = function(){
    return "email" //Corregir, no se que es lo que se debe retornar
}

//DigitalProduct que hereda de Product

export { PhysicalProduct, DigitalProduct };