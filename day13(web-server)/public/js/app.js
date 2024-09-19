console.log("Client side js is loaded");

// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/!?unitGroup=us&key=QL5LRPLXKJNC8XHT3TJRX8PUW&contentType=json').then((response) => {
//     response.json().then((data) => {
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data.defaultAddress)
//         }
//     })
// })

const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')


weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = searchElement.value;

  message1.textContent = 'Loading...'
  message2.textContent = ''


  fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      location +
      "?unitGroup=us&key=QL5LRPLXKJNC8XHT3TJRX8PUW&contentType=json"
  ).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        message1.textContent = data.error
    } else {
        message1.textContent = data.error
        message2.textContent = data.description
      }
    });
  });
});
