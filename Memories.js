// Stack and Heap

// Stack (Primitive Data Type)  (Changes in the Copy)
let myName = "Krishna Khadka"
let newName = myName
newName = "Krishna"
// console.log(myName);
// console.log(newName);

// Heap (Non-Primitive Data Type) (change in original value/Reference)

let myDetail = {
    Id: 10,
    name: "Krishna Khadka"
}

let newDetail = myDetail

newDetail.name="Chris Khadka"

console.log(myDetail.name);
console.log(newDetail.name);