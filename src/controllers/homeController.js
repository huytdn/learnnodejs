const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getFriend = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  // connection.query(
  //   `INSERT INTO Users (email, name, city)
  //    VALUES (?, ?, ?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send("Created user succeed");
  //   }
  // );

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)
     VALUES (?, ?, ?)`,
    [email, name, city]
  );

  res.send("Created user succeed");

  // connection.query("select * from Users u", function (err, results, fields) {
  //   console.log(results); // results contains rows returned by server

  // const [results, fields] = await connection.query("select * from Users u");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = (req, res) => {
  const userId = req.params.id;
  res.render("edit.ejs");
};

module.exports = {
  getHomePage,
  getFriend,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
