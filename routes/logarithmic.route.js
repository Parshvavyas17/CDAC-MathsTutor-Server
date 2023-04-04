const express = require("express");
const {
  randomQuestion,
  generateLogarithmic,
} = require("../controllers/logarithmic.controller");

const router = express.Router();

router.post("/", generateLogarithmic);

router.get("/", randomQuestion);

module.exports = router;
