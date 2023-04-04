const Logarithmic = require("../models/logarithmic.model");

const generateLogarithmic = async (req, res) => {
  try {
    const logarithmic = new Logarithmic({
      question: "logx",
      answer: "1/x",
      hints: ["Hint 1", "Hint 2", "Hint 3"],
      formulae: ["First Formula", "Second Formula"],
      upperLimit: 1,
      lowerLimit: 1,
      finalAns: 0,
    });
    await logarithmic.save();
    res.send(logarithmic);
  } catch (error) {
    console.log(error);
  }
};

const randomQuestion = async (req, res) => {
  try {
    const questions = await Logarithmic.find({});
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

module.exports = { randomQuestion, generateLogarithmic };
