const mongoose = require("mongoose");

const trigonometricSchema = new mongoose.Schema({
  question: String,
  answer: String,
  upperLimit: Number,
  lowerLimit: Number,
  finalAns: Number,
  hints: [
    {
      type: String,
    },
  ],
  formulae: [
    {
      type: String,
    },
  ],
});

const Trigonometric = mongoose.model("Trigonometric", trigonometricSchema);

module.exports = Trigonometric;
