var connection = require('connection.js');

function selectAll(callback){
    connection.query(
        'SELECT * FROM burgers',
        callback
      );
}

function insertOne(newBurger, callback){
    connection.query(
        'INSERT INTO burgers (burger_name) value (?)',
        [
          newBurger
        ],
        callback
      );
};

function updateOne(id, callback){
    connection.query(
        'SELECT * FROM burgers WHERE id=?',
        [
          id
        ],
        callback
      );
}

module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne,
  };