const request = require("postman-request");

const forecast = (latitude,longitude, callback) => {
  const url =
    "http://api.mapbox.com/geocoding/v5/mapbox.places/value.json?access_token" + latitude + longitude;

  request(
    {
      url: url,
      json: true,
    },
    (error, message) => {
      if (error) {
        callback("Unable to connect to location service!", undefined);
      } else if (Response.body.feature.length === 0) {
        callback("Unable to find location. try another search", undefined);
      } else {
        callback(undefined, {
          latitute: "data",
          longitude: "data",
          location: "data",
        });
      }
    }
  );
};

module.exports = forecast;
