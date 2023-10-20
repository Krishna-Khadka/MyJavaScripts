
const hero = ["superman","spiderman","batman","ironman","hulk"]

hero.forEach( (item) => {
    console.log(item);
} )

// hero.forEach( (item, index, arr) => {
//     console.log(item,index,arr);
// } )

// function myprint(item) {
//     console.log(item);
// }
// hero.forEach(myprint)


// **************  objects inside array  *****************
const mobile = [
    {
        name: "Iphone",
        brand: "Apple",
        price: 200000
    },
    {
        name: "Samsung Galaxy Note 20",
        brand: "Samsung",
        price: 180000
    },
    {
        name: "Redmi Note 12 Pro",
        brand: "Xiaomi",
        price: 35000
    }
]
mobile.forEach( (item) => {
    console.log(`${item.name} is made by ${item.brand}. It's price is roughly around ${item.price}`)
} )

