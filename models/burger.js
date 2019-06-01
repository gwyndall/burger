var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb) {
      orm.selectAll( function(res) {
        cb(res);
      });
    },

    insertOne: function( newBurger, cb) {
      orm.insertOne( newBurger, function(res) {
        cb(res);
      });
    },
    updateOne: function(id, cb) {
      orm.updateOne(id, function(res) {
        cb(res);
      });
    }
  };



module.exports = burger;