const express = require("express");
const {
  randomQuestion,
  generateTrigonometric,
} = require("../controllers/trigonometric.controller");

const router = express.Router();

router.post("/", generateTrigonometric);

router.get("/", randomQuestion);

module.exports = router;
