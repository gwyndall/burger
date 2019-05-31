var express = require('express');
var burger = require('burger.js');


var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// !!!!!!!!!!!!!! IMPORTANT !!!!!!!!!!!
// The line below is called orm, but it
// is also our rudimentary ORM. Extracting your
// data interactions to a new module will be enough
// to get the homework done. We will explore
// ORMS more in the coming week.
const orm = require('./config/orm');

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

// Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
app.get("/:id", function (req, res) {
  orm.getQuoteById(req.params.id,
    function (error, data) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      } else {
        res.render('single-quote', data[0]);
      }
    });
});

// Create a new quote using the data posted from the front-end.
app.post("/api/quotes", function (req, res) {
  const newQuote = req.body;

  orm.createQuote(
    newQuote,
    function (error) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      } else {
        res.redirect('/');
      }
    });
});

// Delete a quote based off of the ID in the route URL.
app.delete("/api/quotes/:id", function (req, res) {
  const quoteId = req.params.id;

  orm.deleteQuote(
    quoteId,
    function (error) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    }
  );
});

// Update a quote.
app.put("/api/quotes/:id", function (req, res) {

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
