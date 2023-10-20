// objects 
const hero = {
    Marvel : "Ironman",
    DC: "Superman",
}
for (const myHero in hero) {
    console.log(`${myHero} superhero name is ${hero[myHero]}`);
}


// Array
const myarr = ["Ram", "Shyam","Hari","Sita","Gita"]
for (const key in myarr) {
    console.log(myarr[key])
}
