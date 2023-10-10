const male = ["Ram","Shyam","Hari"]
const female = ["sita","gita","rita"]

// it occurs problemtic situation as merging 2 array leads to insert whole array into a single array
// male.push(female)
// console.log(male)

// concat creates a new array combining two array
const newmale = male.concat(female)
// console.log(newmale);

// spread operator can also be used
const nextMale = [...male,...female]
// console.log(nextMale);

const mulArray = [5, 10, 15, [2, 8, 16,[30,15]]]
const newMul = mulArray.flat(Infinity)
console.log(newMul); 

// check whether it is array or not
console.log(Array.isArray("Krishna"));

//convert to array
console.log(Array.from("Krishna"));
console.log(Array.from({id:10})); //return empty array

let score1 = 50
let score2 = 100
let score3 = 150

// we can use Array.of instead of array.from
console.log(Array.of(score1,score2,score3));



