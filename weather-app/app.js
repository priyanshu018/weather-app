// console.log('starting')

// setTimeout(() => {
//     console.log('2 Sec timmer')
// },2000)

// setTimeout(() => {
//     console.log('0 Sec timmer')
// },0)

// console.log('stopping')

const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=bc5fda16f6c764ad0a319ed1b7693163&query=New York&units=f";

// -----------------get the response without json true so we have to manually make it as parseJSON

// request({ url: url }, (error, response) => {
//     const data = JSON.parse(response.body)
//     console.log(data.current)
// });

// -----------------get the response in JSON automatically by going json:true

// request({ url: url,json:true }, (error, response) => {
//     console.log(response.body.current)
// });

// -----------------task to add a conditon if the temprature is 17 degreen then there is no

// request({ url: url,json:true }, (error, response) => {
//     console.log("it's current ",response.body.current.temperature+' degree out. There is a '+response.body.current.precip + '% change of rain')
// });

// -----------------Geo-Coding
// address => last/long -> weather

// const geoCodeUrl = ''

// request({
//   url:geoCodeUrl,json:true
// },(error,response) => {
//   const latitude = response.body.features[0].center[0]
//   const longitute = response.body.feature[0].center[1]
//   console.log(latitude,longitute)
// })

// -----------------using callback

// const geoCode = require('./utils/geoloaction');

// geoCode("Philadelphia", (error, data) => {
//   console.log("error",error);
//   console.log("data",data)
// });

// ----------------- Forecast

// const forecast = require('./utils/forecast');

// forecast("Philadelphia", (error, data) => {
//   console.log("error",error);
//   console.log("data",data)
// });

// ----------------- using both function

// const geoCode = require("./utils/geoloaction");
// const forecast = require("./utils/forecast");

// geoCode("Philadelphia", (error, data) => {
//   if (error) {
//     return console.log("error", error);
//   }

//   forecast(data.latitude, data.longitude, (error, forecastData) => {
//     if (error) {
//       return console.log("error", error);
//     }

//     console.log(data.location);
//     console.log(forecastData);
//   });
// });



// ----------------- using both function
