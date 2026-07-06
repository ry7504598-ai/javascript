// premitive

// 7 types: String , Number, Boolean , null, undefinded, symbol, BigInt

const score  = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null;
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigInt = 483948589493059n


// Reference (Non primitive)

//array, objects, Functions

const heros  = ["shaktiman","naagraj","doga"]

let myObj = {
    name:"hitesh",
    age:22,
}
const myFunction = function(){
    console.log("hello world")
}