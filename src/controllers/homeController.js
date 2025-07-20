const connection = require("../config/database");
const {
  getAllUsers,
  updateUserById,
  getUserById,
  deleteUserById,
} = require("../services/CRUDService");

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

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?)`,
    [email, name, city]
  );

  res.send("Created user succeed");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;

  const user = await getUserById(userId);

  res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let userId = req.body.userId;

  await updateUserById(email, city, name, userId);

  // res.send("Updated user succeed");
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;

  const user = await getUserById(userId);

  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);
  res.redirect("/");
};
module.exports = {
  getHomePage,
  getFriend,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
