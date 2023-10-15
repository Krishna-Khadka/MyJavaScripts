
//syntax of arrow function
//() => {} 

const add = (num1,num2) => {
    return num1+num2
}
console.log(add(5,5));

// next way to define arrow function [implicit return]

const add1 = (num1,num2) => ( num1 + num2 )
console.log(add1(10,10))

// implicit is used mostly while returning object
const obj = () => ({username: "Krishna"})
console.log(obj());