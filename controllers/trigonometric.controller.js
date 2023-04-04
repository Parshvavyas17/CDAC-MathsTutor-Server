const Trigonometric = require("../models/trigonometric.model");

const generateTrigonometric = async (req, res) => {
  try {
    const trigonometric = new Trigonometric({
      question: "sin x + cos x",
      answer: "-cos x + sin x",
      hints: ["Hint 1", "Hint 2", "Hint 3"],
      formulae: ["First Formula", "Second Formula"],
      upperLimit: 1,
      lowerLimit: 1,
      finalAns: 0,
    });
    await trigonometric.save();
    res.status(201).send(trigonometric);
  } catch (error) {
    console.log(error);
  }
};

const randomQuestion = async (req, res) => {
  try {
    const questions = await Trigonometric.find({});
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

module.exports = { randomQuestion, generateTrigonometric };
