const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.get("/friend", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;
