const obj1 = new Object();

obj1.Id=1
obj1.name="Krishna"
obj1.email="krish@gmail.com"

// console.log(obj1.name);

// Declare object inside object

const obj2 = {
    id: 5,
    address: "khorsane",
    username:{
        userFullName:{
            firstName: "Krishna",
            lastName: "Khadka",
        }
    }
}

// console.log(obj2.username.userFullName.firstName);

// combining multiple objects

const obj3 = {
    1: "a",
    2: "b"
}
const obj4= {
    3: "c",
    4: "d"
}
 
const obj5 = {...obj3,...obj4} //preferred way
    // or
const obj6 = Object.assign({},obj3,obj4)

// console.log(obj5);


// to get key of object
// console.log(Object.keys(obj5))

// to get value of objects
// console.log(Object.values(obj5));



// ******************  object destructuring **************

const subject = {
    subName: "JS",
    subAuthor: "Krishna",
    subPrice: 5000
}

const{subAuthor} = subject
const{subPrice: price} = subject //we can chage the key using :

console.log(subAuthor);
console.log(price);