const myarr = ["Ram", "Shyam","Hari","Sita","Gita"]

for (const valArray of myarr) {
    // console.log(valArray);
}


const welcome = "Hello Users"

for (const wel of welcome) {
    // console.log(wel);
}


// ************** Maps  ******************
const map = new Map()
map.set("Id",1)
map.set("Name","Krishna")
map.set("Role","Developer")
console.log(map);

for (const [key,value] of map) {
    console.log(key, ":", value);
}


