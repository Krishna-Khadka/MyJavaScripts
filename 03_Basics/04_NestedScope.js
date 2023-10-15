// nested function
function one(){
    const name = "hari"

    function two(){
        const password = 12345
        console.log(name);
    }
    // console.log(password)
    two()
}
one()

// hositing in js

console.log(add(5)); //executes successfully
function add(num){
    return num+1
}


////////////// but ///////////////


console.log(sub(5)); //doesn't execute because cannot be used before initialization
const sub = function(num){
    return num - 1
}
