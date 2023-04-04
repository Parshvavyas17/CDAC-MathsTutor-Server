const mongoose = require("mongoose");

const exponentialSchema = new mongoose.Schema({
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

const Exponential = mongoose.model("Exponential", exponentialSchema);

module.exports = Exponential;
