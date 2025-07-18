const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getFriend,
  postCreateUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);

router.get("/friend", getFriend);
router.post("/create-user", postCreateUser);

module.exports = router;
