setTimeout(()=> {
    console.log("Two seconds are up")
},2000)

const name = ['Andrew','Jen','Jess'];
const shortName = name.filter((name) => {
    return name.length <=4
})


const geoCode = ( address,callBack ) => {
   setTimeout(() => {
    const data = {
        latitude:0,
        longitutde:0
    }
    callBack(data)
   },2000)
}

const data = geoCode('Philade')
console.log(data)