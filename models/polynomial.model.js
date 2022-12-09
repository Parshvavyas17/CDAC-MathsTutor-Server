const mongoose = require("mongoose");

const polynomialSchema = new mongoose.Schema({
  question: {
    coefX2: Number,
    coefX1: Number,
    coefX0: Number,
  },
  answer: {
    coefX3: Number,
    coefX2: Number,
    coefX1: Number,
  },
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

const Polynomial = mongoose.model("Polynomial", polynomialSchema);

module.exports = Polynomial;
