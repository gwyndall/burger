var express = require('express');
var burger = require('../models/burger.js');

var app = express();
var PORT = 3306;



const orm = require('../config/orm.js');

// Serve index.handlebars to the root route
app.get("/", function (req, res) {
  orm.selectAll(function (data) {
    res.render('index', {
        burgers: data
      });
  });
  // orm.selectDevoured(function (data) { 
  //   res.render('index', {
  //     devoured: data

  //   })
  //  })
});



// Create a new burger using the data posted from the front-end.
app.post("/api/burgers", function (req, res) {
  const newBurger = req.body.burger;

  orm.insertOne(
    newBurger,

        res.redirect('/')
    
    );
});



// Devour a burger.
app.put("/api/burgers/:id", function (req, res) {
  id = req.body.id;
  orm.updateOne(id,
    function (result) {
      console.log(result);
      res.redirect('/');
      }
    
  )
});

module.exports = app;
