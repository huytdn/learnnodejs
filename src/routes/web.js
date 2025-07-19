const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getFriend,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/friend", getFriend);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

module.exports = router;
