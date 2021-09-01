// Object Constructor
// functioanal ObjectConstructor

function User(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.description = function () {
        console.log(this.firstName + " " + this.lastName)
    }
}

let superman = new User("Superman", "Clark")
console.log(superman)
superman.city = "Metropolis"
console.log({ superman })

superman.description()

let batman = new User("Batman", "Robin")
console.log(batman)

User.prototype.isLoggedIn = true
console.log(batman.isLoggedIn)

class User1 {
    constructor(firstNameParam, lastNameParam) {
        this.firstName = firstNameParam
        this.lastName = lastNameParam
    }
    description() {
        console.log(this.firstName.toString() + " " + this.lastName)
    }
}

let ironMan = new User1("Iron", "Man")
console.log(ironMan)

let someNumbers = new Array(1, 4, 56, 77)
console.log(someNumbers)

Array.prototype.isCool = function () {
    console.log("tets")
}

someNumbers.isCool()

// Class Surface 
class Surface {
    constructor(height, width) {
        this.height = height
        this.width = width
    }
    calcSurface() {
        return this.height * this.width
    }
}

let house1 = new Surface(20, 30)
console.log(house1)
console.log(house1.calcSurface())

class SurfaceCubic extends Surface {
    constructor(height, width, depthParam) {
        super(height, width)
        //this.height = height
        // this.width = width
        this.depth = depthParam
    }
    calcSurfaceCubic() {
        return this.height * this.width * this.depth
    }
}

let house2 = new SurfaceCubic(10, 20, 2)
console.log(house2)
console.log(house2.calcSurface())
console.log(house2.calcSurfaceCubic())

let house3 = new Surface(20, 30)

console.log(house3.calcSurface())
//will not work because calcSurfaceCubic() exist only on the prototype of SurfaceCubic
// console.log(house3.calcSurfaceCubic())

//test
class magicArray extends Array {
    constructor(...args) {
        super(args)
    }
    magic() {
        console.log("I hope")
    }
}

let newArr = new magicArray(334, 56, 88)

console.log(newArr)
console.log(newArr[0].map(elt => elt * 2))
console.log(newArr.magic())

// Math: Object
console.log(Math)
console.log(Math.ceil(3.2))
console.log(Math.floor(3.2))

//Date: Object Constructor
let datum = new Date()
console.log(datum)