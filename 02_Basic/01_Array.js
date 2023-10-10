
// ways to declare array

const firstArray = [10,15,52,45,20]
const secArray = ["Krishna","Chris","Krish"]
const thirdArray = new Array(10,8,2,5,12)

// console.table([firstArray[0],secArray[1],thirdArray[2]])

// ******************  Methods in Array   **************

// firstArray.push(99) //Add values
//firstArray.unshift(8) //add value from start
//firstArray.shift() //Remove the unshift value

//secArray.pop() //remove last value

// console.log(firstArray);
//console.log(firstArray.includes(60)); //ask whether the value is included or not
//console.log(firstArray.indexOf(15)); //ask for index
// console.log(secArray);

// to add all array element into String
//it changes in data type
const newValue = firstArray.join()
// console.log(firstArray);
// console.log(newValue);
// console.log(typeof newValue);

// common methods [slice, splice]


const array1 = [5,10,15,20,25,30]
console.log("A", array1);

const array2 = array1.slice(1,4)
console.log(array2);
console.log("B", array1);

const array3 = array1.splice(1,4)
console.log("C", array1);
console.log(array3);

// in splice the original array changes removing the splice value from the original array
