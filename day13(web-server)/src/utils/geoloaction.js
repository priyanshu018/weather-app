const request = require("postman-request");

const geoCode = (address, callback) => {
  const url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
    address +
    "?unitGroup=us&key=QL5LRPLXKJNC8XHT3TJRX8PUW&contentType=json";

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
          longitude: message.body.longitude,
          latitute: message.body.latitude,
          location: message.body.resolvedAddress,
        });
      }
    }
  );
};

module.exports = geoCode;
