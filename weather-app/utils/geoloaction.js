const request = require("postman-request");

const geoCode = (address, callback) => {
  const url =
    "http://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token";

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

module.exports = geoCode;
