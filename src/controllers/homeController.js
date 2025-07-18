const connection = require("../config/database");

const getHomePage = (req, res) => {
  let users = [];
  connection.query("select * from Users u", function (err, results, fields) {
    users = results;
    console.log(results); // results contains rows returned by server
    res.send(JSON.stringify(users));
  });
};

module.exports = connection;
