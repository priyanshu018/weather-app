const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geoloaction");
const forecast = require("./utils/forecast");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();

// define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// Setup handlebar engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    footer: "Andrew",
    name: "Andrew",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Weather App",
    footer: "Andrew",
    validate: "yes",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Weather App",
    footer: "Andrew",
    name: "About",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address ",
    });
  }

  geocode(req.query.address, (error, { latitute, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }


    forecast(latitute, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: forecastData,
        location,
        address: req.query.address,
      });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Andrew",
    errorMessage: "Help Artical not found",
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide search term",
    });
  }

  res.send({
    products: [],
  });
});

// for 404 page
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Andrew",
    errorMessage: "Page not found",
  });
});

app.listen(9000, () => {
  console.log("Server is running on Port : 9000");
});
