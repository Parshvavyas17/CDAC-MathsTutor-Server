const Polynomial = require("../models/polynomial.model");

const randomQuestion = async (req, res) => {
  try {
    const questions = await Polynomial.find({});
    if (questions.length == 0) {
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

module.exports = { randomQuestion };
