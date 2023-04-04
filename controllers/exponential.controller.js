const Exponential = require("../models/exponential.model");

const generateExponential = async (req, res) => {
  try {
    const exponential = new Exponential({
      question: "e^x",
      answer: "e^x",
      hints: ["Hint 1", "Hint 2", "Hint 3"],
      formulae: ["First Formula", "Second Formula"],
      upperLimit: 1,
      lowerLimit: 1,
      finalAns: 0,
    });
    await exponential.save();
    res.send(exponential);
  } catch (error) {
    console.log(error);
  }
};

const randomQuestion = async (req, res) => {
  try {
    const questions = await Exponential.find({});
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

module.exports = { randomQuestion, generateExponential };
