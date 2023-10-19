
// simple for loop
for (let i = 0; i <= 10; i++) {
    console.log(`The value of i is ${i}`);
}

// nested loop
for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication for ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i + "*" + j + "=" + i * j);
    }
}

// Array in Loop

const supes = ["Homelander", "ATrain", "Starlight", "Deep"]

for (let i = 0; i < supes.length; i++) {
    const element = supes[i];
    console.log(element);
}

// ****************** break and continue ***************************

// break exit the code after true condition
for (let i = 0; i < 10; i++) {
    if(i>= 5 && i<8){
        console.log("Unwanted Number");
        break
    }
    console.log(`The value of i is ${i}`);
}

// doesn't leave the loop insted of leaving it gives a chance if the condition is true
for (let i = 0; i < 10; i++) {
    if(i>= 5 && i<8){
        console.log("Unwanted Number");
        continue
    }
    console.log(`The value of i is ${i}`);
}