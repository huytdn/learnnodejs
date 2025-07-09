const express = require("express");
const router = express.Router();
const { getHomePage, getFriend } = require("../controllers/homeController");

router.get("/", getHomePage);

router.get("/friend", getFriend);

module.exports = router;
