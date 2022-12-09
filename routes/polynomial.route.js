const express = require("express");
const { randomQuestion } = require("../controllers/polynomial.controller");
const Polynomial = require("../models/polynomial.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const polynomial = new Polynomial({
      question: {
        coefX2: 3,
        coefX1: 2,
        coefX0: 1,
      },
      answer: {
        coefX3: 1,
        coefX2: 1,
        coefX1: 1,
      },
      hints: ["Hint 1", "Hint 2", "Hint 3"],
      formulae: ["First Formula", "Second Formula"],
      upperLimit: 1,
      lowerLimit: 1,
    });
    await polynomial.save();
    res.send(polynomial);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", randomQuestion);

module.exports = router;
