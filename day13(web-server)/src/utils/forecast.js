const request = require("postman-request");

const forecast = (latitude,longitude, callback) => {
  const url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + latitude + "," + longitude +"?key=QL5LRPLXKJNC8XHT3TJRX8PUW&contentType=json";

  request(
    {
      url: url,
      json: true,
    },
    (error, message) => {
      if (error) {
        callback("Unable to connect to location service!", undefined);
      } else if (message.body === 0) {
        callback("Unable to find location. try another search", undefined);
      } else {
        callback(undefined, {
          latitute: latitude,
          longitude: longitude,
        });
      }
    }
  );
};

module.exports = forecast;
