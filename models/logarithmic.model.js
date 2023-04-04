const mongoose = require("mongoose");

const logarithmicSchema = new mongoose.Schema({
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

const Logarithmic = mongoose.model("Logarithmic", logarithmicSchema);

module.exports = Logarithmic;
