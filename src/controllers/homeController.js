const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getFriend = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  connection.query(
    `INSERT INTO Users (email, name, city)
     VALUES (?, ?, ?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);
      res.send("Created user succeed");
    }
  );
};

module.exports = { getHomePage, getFriend, postCreateUser };
