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

  selectDevoured: function(cb){
    var queryString = "SELECT * FROM burgers WHERE devoured = 1;";
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
    var queryString = 'INSERT INTO burgers (burger_name) values ("'+ newBurger +'");';
    connection.query(queryString, function(err,result){
      if(err)throw err,
      cb(result);
    })
    console.log(queryString);

  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(tableInput, condition, cb) {

    connection.query(
      
      "UPDATE "+tableInput+" SET devoured = true WHERE id="+condition+';', 
       function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    }
    );
  }
  
};



module.exports = orm;