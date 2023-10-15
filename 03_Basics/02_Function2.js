
// logic used in cart price calculation
// we use rest operator
// it bind all the arguments into the array

function calculateCartPrice(...num){
    return num
}
// console.log(calculateCartPrice(50,100,150,200));

// pass object in function

const obj1 = {
    id: 4,
    name: "Krishna"
}

function newObj(myFunction){
    console.log(`the id of user is ${myFunction.id} and name is ${myFunction.name}`); 
}

newObj(obj1)

// or 

// newObj({
//     id:10,
//     name:"thor"
// })



// passing array in function

const myArray = [100,180,300,400]

function newFunction(array1){
    return array1[2]
}

console.log(newFunction(myArray))

// or

// console.log(newFunction([50,100,200,300]))