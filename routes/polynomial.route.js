const express = require("express");
const {
  randomQuestion,
  generatePolynomial,
} = require("../controllers/polynomial.controller");

const router = express.Router();

router.post("/", generatePolynomial);

router.get("/", randomQuestion);

module.exports = router;
