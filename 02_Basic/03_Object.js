
// create
const obj = {
    Id : 1,
    name : "Krishna",
    email: "krishkhadka06@gmail.com",
    isLoggedIn: true,
    lastLogin: ["Sunday","Monday","Friday"]
}

// access
console.log(obj.name);
console.log(obj["email"]);

// change
obj.email="demo321@gmail.com"
console.log(obj.email);

// freeze
// Object.freeze(obj);

// For symbol
// declare symbol
const sym1 = Symbol["key1"]

// use symbol as key
const symbol = {
    [sym1]: "newKey1"
}

console.log(symbol[sym1]);

console.log(symbol);


// adding function
obj.fun1 = function(){
    console.log("Hello World");
}
console.log(obj.fun1());

obj.fun2 = function(){
    console.log(`Hello ${this.name}`);
}
console.log(obj.fun2());


