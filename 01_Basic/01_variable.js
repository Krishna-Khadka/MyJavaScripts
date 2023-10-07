// ALways prefer let over var because of block scope and functional scope // i.e { .. }

const userID = 101
let userName = "Krishna Khadka"
var userPassword = "Chris12345@#"
userEmail = "krishkhadka2059@gmail.com"

// userID = 102 //value declared in const cannot be change

console.log(userID);

// To console in tabular form 
console.table([userID,userName,userPassword,userEmail])

