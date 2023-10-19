const score = 400

if (score >= 300) {
    let rule = "player_substiution";
    console.log(`${rule} rule is added`);
}
else {
    console.log(`No rule is added`);
}

// or we can use ternary operator
//syntax -----> condition?true:false

const Id = 10
Id >= 1 ? console.log("Student") : console.log("Techer");

// Nesting (Multiple Condition)

const rating = 4
if (rating <= 1) {
    console.log(`This is a bead producrt`);
}
else if (rating > 1 && rating <= 3) {
    console.log(`This is an average product`);
}
else if (rating > 3 && rating <= 5) {
    console.log(`This is the excellent product`);
}
else {
    console.log(`Product hasn't been rated`);
}

// ************************   Truthy Values   **************************
// "0", "False", " ", [], {}, function(){}

// ************************   Falsy Values   **************************
// False, 0, "", -0, BigInt 0n, null, undefined, NAN


// ***************   check object is empty or not   ********************

const myObj = {}
if(Object.keys(myObj).length == 0){
    console.log("Object is empty");
}