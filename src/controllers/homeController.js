const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getFriend = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  console.log(req.body);
  res.send("alo");
};

module.exports = { getHomePage, getFriend, postCreateUser };
