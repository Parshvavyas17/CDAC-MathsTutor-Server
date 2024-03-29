const Polynomial = require("../models/polynomial.model");

const generatePolynomial = async (req, res) => {
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
    res.status(201).send(polynomial);
  } catch (error) {
    console.log(error);
  }
};

const randomQuestion = async (req, res) => {
  try {
    const questions = await Polynomial.find({});
    if (questions.length === 0) {
      return res
        .status(200)
        .send({ error: null, data: [], message: "No questions found." });
    } else {
      const length = questions.length;
      const idx = Math.floor(Math.random() * length);
      if (idx === length) idx--;
      return res.status(200).send({ error: null, data: questions[idx] });
    }
  } catch (error) {
    return res.status(400).send({ error: error, data: null });
  }
};

module.exports = { randomQuestion, generatePolynomial };
