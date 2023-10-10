
// get current date
let curDate = new Date()
// console.log(curDate);
// console.log(curDate.toString());
// console.log(curDate.toDateString());
// console.log(curDate.toLocaleString);

// make new Date

let newDate = new Date(2025,0,20)
        // or
let nextNew = new Date("2025-01-20")

// console.log(newDate.toString())


let TimeStamp = Date.now()
// console.log(TimeStamp);
// console.log(newDate.getTime());
//console.log(Math.floor(Date.now()/1000)); //conver to seconds

const nextDate = new Date()
// console.log(nextDate.getFullYear());

nextDate.toLocaleString('default',{
    month: "long"
})