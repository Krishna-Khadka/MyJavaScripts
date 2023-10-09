
// JavaScript DataTypes

// JavaScript is dynamically typed language as we dont need to specify the datatype of variable

// Primitive data types: String, number, bigint, boolean, Symbol, null, undefined

let myName = "Krishna"  //String
let age = 21 //number
const bigNumber = 2364846377387n //bigint
const isLoggedIn = true //Boolean
const temperature = null //null
let  address //undefined
const Id = Symbol('101') // Symbol

console.table([myName,age,bigNumber,isLoggedIn,temperature,address,Id])



// Reference data Type (Non Primitive): Array, Objects, Functions

const students = ["Krishna", "Suman", "Puja"]; //Array


//Objects
let myDetail = {
    Id:1,
    name: "Krishna",
    isLoggedIn: true,
}


// Functions
let myGrade = function(){
    console.log("I am BCA Student");
}





