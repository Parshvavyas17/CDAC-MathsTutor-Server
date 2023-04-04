require("dotenv").config();
require("./db/mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// const userRouter = require("./routes/user.route");
// app.use("/api/user", userRouter);

const polynomialRouter = require("./routes/polynomial.route");
app.use("/api/poly", polynomialRouter);
const trigonometricRouter = require("./routes/trigonometric.route");
app.use("/api/trigo", trigonometricRouter);
const logarithmicRouter = require("./routes/logarithmic.route");
app.use("/api/loga", logarithmicRouter);
const exponentialRouter = require("./routes/exponential.route");
app.use("/api/expo", exponentialRouter);

app.get("/api/home", (req, res) => {
  res.send("Routes running successfully");
});

module.exports = app;
