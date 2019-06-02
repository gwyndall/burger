var connection = require('./connection.js');


var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) {
        console.log('error', err)
        throw err;
      }
      console.log('result', result)
      cb(result);
    });
  },
  insertOne: function(newBurger, cb) {
    var queryString = 'INSERT INTO burgers (burger_name) value ('+ newBurger + ')';
    
    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(id, cb) {

    connection.query(
      
      "UPDATE burgers SET devoured = true WHERE id=?",
      [
        id
      ], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
  
};



module.exports = orm;