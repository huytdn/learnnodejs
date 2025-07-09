const getHomePage = (req, res) => {
  res.send("Home Page");
};

const getFriend = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getFriend,
};
