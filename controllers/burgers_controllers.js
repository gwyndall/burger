var express = require('express');
var burger = require('../models/burger.js');


var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const orm = require('../config/orm.js');

// Serve index.handlebars to the root route
app.get("/", function (req, res) {
  orm.selectAll(function (error, data) {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      res.render('index', {
        burgerName: data
      });
    }
  });
});



// Create a new quote using the data posted from the front-end.
app.post("/api/burgers", function (req, res) {
  const newBurger = req.body;

  orm.insertOne(
    newBurger,
    function (error) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      } else {
        res.redirect('/');
      }
    });
});



// Devour a burger.
app.updateOne("/api/burgers/:id", function (req, res) {

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
