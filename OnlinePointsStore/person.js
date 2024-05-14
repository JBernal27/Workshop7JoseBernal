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
    if(this.acumulatedPoints >= pointsToReedem && this.acumulatedPoints >= 25){
        impInf("Haz canjeado tus puntos por un token de RIWI (25pts)")
        let redeemedObject = token.getInfo()
        impInf(`Product Name: ${redeemedObject.productName}, Necessary Points: ${redeemedObject.necessaryPoints}, Available Quantity: ${redeemedObject.avaliableQuantity}, Stock: ${redeemedObject.stock}, URL: ${redeemedObject.url}`)
        this.acumulatedPoints -= 25
    }
    else{
        impErr("Estos puntos no son suficientes para canjear algo")
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

Admin.prototype.addProduct = function(product){
    products.push(product)
}

const admin = new Admin("Admin","Admin@gmail.com","1234")
adminUsers.push(admin)

//Admin que hereda de Person

export {User, Admin}