const fs = require("fs")

const book ={
    title:"Ego is the Enemy",
    author:"Ryan Holiday"
}

const bookJson = JSON.stringify(bookJson)

// ----------------------------------------------------

const jsonOpposite = JSON.parse(bookJson)

console.log(jsonOpposite.author)

// ----------------------------------------------------

fs.writeFileSync('newfile.json',bookJson);

const data = fs.readFileSync('newfile.json')

console.log(data,"buffer data") //get the data in binart 

console.log(data.toString()) // to make it readabe

// ----------------------------------------------------

// modify the already given .Json data 

const task = {
    "name":"Andrew",
    "planet":"Earth",
    "age":27
}

const dataBuffer = fs.readFileSync(task);
const dataJson = dataBuffer.toString();
const user = JSON.parse(dataJson);

user.name = "abd",
user.age= 54

const userJson = JSON.stringify(user);
fs.writeFileSync('new-1',userJson);