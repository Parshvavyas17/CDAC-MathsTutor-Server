const express = require("express");
const {
  randomQuestion,
  generateExponential,
} = require("../controllers/exponential.controller");

const router = express.Router();

router.post("/", generateExponential);

router.get("/", randomQuestion);

module.exports = router;
